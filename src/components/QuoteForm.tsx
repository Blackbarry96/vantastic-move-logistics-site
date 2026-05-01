import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[0-9 +()-]+$/i, "Phone number contains invalid characters"),
  email: z.string().trim().email("Please enter a valid email").max(120),
  pickupPostcode: z.string().trim().min(2, "Required").max(12),
  dropoffPostcode: z.string().trim().min(2, "Required").max(12),
  preferredDate: z.string().max(40).optional().or(z.literal("")),
  urgency: z.enum(["standard", "same-day", "flexible"]),
  details: z
    .string()
    .trim()
    .min(5, "Please describe what needs moving")
    .max(1000, "Keep it under 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

export const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { urgency: "standard" },
  });

  const urgency = watch("urgency");

  const buildSummary = (data: FormValues) =>
    `New Quote Request — Vantastic Move Logistics

Name: ${data.fullName}
Phone: ${data.phone}
Email: ${data.email}
Pickup: ${data.pickupPostcode}
Drop-off: ${data.dropoffPostcode}
Preferred date: ${data.preferredDate || "Flexible"}
Urgency: ${data.urgency}

Items / details:
${data.details}`;

  const onSubmit = async (data: FormValues) => {
    const summary = buildSummary(data);
    const whatsapp = buildWhatsAppLink(summary);
    setWaLink(whatsapp);

    try {
      const { error } = await supabase.functions.invoke("send-quote", {
        body: data,
      });
      if (error) throw error;

      toast.success("Quote request sent!", {
        description: "We've emailed your details. You can also message via WhatsApp for faster response.",
      });
      setSubmitted(true);
      reset({ urgency: "standard" });
    } catch (err) {
      console.error("Quote submission failed:", err);
      toast.error("Couldn't send email — please use WhatsApp or call us.", {
        description: "Tap the WhatsApp button below to send your details directly.",
      });
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-xl shadow-card p-8 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-display text-2xl mb-2">Thanks — we've got your details</h3>
        <p className="text-muted-foreground mb-6">
          For the quickest response, send the same details straight to our WhatsApp or give us a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" /> Send via WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`tel:${CONTACT.phone}`}>Call {CONTACT.phoneDisplay}</a>
          </Button>
          <Button variant="ghost" onClick={() => setSubmitted(false)}>
            Send another request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card rounded-xl shadow-card p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register("fullName")} placeholder="John Smith" autoComplete="name" />
          {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register("phone")} placeholder="07700 900000" type="tel" autoComplete="tel" />
          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" {...register("email")} placeholder="you@example.com" type="email" autoComplete="email" />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="pickupPostcode">Pickup Postcode</Label>
          <Input id="pickupPostcode" {...register("pickupPostcode")} placeholder="SW1A 1AA" />
          {errors.pickupPostcode && <p className="text-sm text-destructive mt-1">{errors.pickupPostcode.message}</p>}
        </div>
        <div>
          <Label htmlFor="dropoffPostcode">Drop-off Postcode</Label>
          <Input id="dropoffPostcode" {...register("dropoffPostcode")} placeholder="M1 1AA" />
          {errors.dropoffPostcode && <p className="text-sm text-destructive mt-1">{errors.dropoffPostcode.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="preferredDate">Preferred Date</Label>
          <Input id="preferredDate" {...register("preferredDate")} placeholder="e.g. Sat 10 May / ASAP" />
        </div>
        <div>
          <Label htmlFor="urgency">Urgency</Label>
          <Select value={urgency} onValueChange={(v) => setValue("urgency", v as FormValues["urgency"])}>
            <SelectTrigger id="urgency">
              <SelectValue placeholder="Select urgency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard (within a week)</SelectItem>
              <SelectItem value="same-day">Urgent / Same-day</SelectItem>
              <SelectItem value="flexible">Flexible</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="details">Details of Items to be Moved</Label>
        <Textarea
          id="details"
          {...register("details")}
          placeholder="e.g. 3-seater sofa, double bed frame, wardrobe, 10 boxes — 2nd floor flat, no lift"
          rows={5}
        />
        {errors.details && <p className="text-sm text-destructive mt-1">{errors.details.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-base h-12"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
        ) : (
          <><Send className="w-4 h-4" /> Submit Quote Request</>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Prefer WhatsApp? Fill the form and you'll get a one-tap WhatsApp option after submitting.
      </p>
    </form>
  );
};
