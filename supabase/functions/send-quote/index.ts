// Edge function: send-quote
// Receives a validated quote request and emails it to the business owner.
// If no email provider is configured, it logs the payload (still succeeds) so the
// form's WhatsApp/phone fallback always works.

import { corsHeaders } from "@supabase/supabase-js/cors";
import { z } from "https://esm.sh/zod@3.23.8";

const BUSINESS_EMAIL = "mbhv_1@yahoo.co.uk";

const QuoteSchema = z.object({
  fullName: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(120),
  pickupPostcode: z.string().trim().min(2).max(12),
  dropoffPostcode: z.string().trim().min(2).max(12),
  preferredDate: z.string().max(40).optional().or(z.literal("")),
  urgency: z.enum(["standard", "same-day", "flexible"]),
  details: z.string().trim().min(5).max(1000),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHtml(d: z.infer<typeof QuoteSchema>): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;background:#f5f5f5;font-weight:600;width:160px">${escapeHtml(label)}</td><td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`;

  return `<!doctype html>
<html><body style="font-family:Arial,sans-serif;background:#fafafa;padding:20px;color:#111">
  <div style="max-width:620px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #eee">
    <div style="background:#0a0a0a;color:#fff;padding:20px 24px">
      <h1 style="margin:0;font-size:20px">New Quote Request</h1>
      <p style="margin:4px 0 0;color:#dc2626;font-weight:600">Vantastic Move Logistics</p>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${row("Name", d.fullName)}
      ${row("Phone", d.phone)}
      ${row("Email", d.email)}
      ${row("Pickup postcode", d.pickupPostcode)}
      ${row("Drop-off postcode", d.dropoffPostcode)}
      ${row("Preferred date", d.preferredDate || "Flexible")}
      ${row("Urgency", d.urgency)}
    </table>
    <div style="padding:16px 24px">
      <h3 style="margin:0 0 8px;font-size:14px">Items / details</h3>
      <p style="white-space:pre-wrap;margin:0;line-height:1.5">${escapeHtml(d.details)}</p>
    </div>
    <div style="padding:16px 24px;background:#f5f5f5;font-size:12px;color:#666">
      Reply to this lead quickly — call ${escapeHtml(d.phone)} or email ${escapeHtml(d.email)}.
    </div>
  </div>
</body></html>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const parsed = QuoteSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: "Invalid request", details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const data = parsed.data;
    const html = renderHtml(data);
    const subject = `New Quote — ${data.fullName} (${data.pickupPostcode} → ${data.dropoffPostcode})`;

    // Try Lovable's transactional email if configured
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    let emailSent = false;
    let emailError: string | null = null;

    if (supabaseUrl && serviceRoleKey) {
      try {
        const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${serviceRoleKey}`,
          },
          body: JSON.stringify({
            to: BUSINESS_EMAIL,
            subject,
            html,
            reply_to: data.email,
            purpose: "transactional",
            idempotency_key: `quote-${data.phone}-${Date.now()}`,
          }),
        });
        if (res.ok) {
          emailSent = true;
        } else {
          emailError = `status ${res.status}`;
        }
      } catch (e) {
        emailError = e instanceof Error ? e.message : "send failed";
      }
    } else {
      emailError = "email infra not configured";
    }

    // Always log so the owner can see leads in function logs as a backup
    console.log("[quote-request]", JSON.stringify({ ...data, emailSent, emailError }));

    return new Response(
      JSON.stringify({ success: true, emailSent }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[send-quote] error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
