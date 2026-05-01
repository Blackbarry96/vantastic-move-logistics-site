import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

export const FloatingCTA = () => {
  const waLink = buildWhatsAppLink("Hi Vantastic Move Logistics, I'd like a quote please.");

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 lg:hidden">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-105 transition-smooth"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label={`Call ${CONTACT.phoneDisplay}`}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-red flex items-center justify-center hover:scale-105 transition-smooth animate-pulse-red"
      >
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
};
