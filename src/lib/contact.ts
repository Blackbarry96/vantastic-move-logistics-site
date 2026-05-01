export const CONTACT = {
  phone: "07778192131",
  phoneDisplay: "07778 192131",
  phoneIntl: "447778192131", // for wa.me & tel: international
  email: "mbhv_1@yahoo.co.uk",
  businessName: "Vantastic Move Logistics",
  tagline: "Vantastic Moves. Door-to-Door. Anywhere in the UK.",
  whatsappBase: "https://wa.me/447778192131",
};

export function buildWhatsAppLink(message: string): string {
  return `${CONTACT.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export function buildMailto(subject: string, body: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
