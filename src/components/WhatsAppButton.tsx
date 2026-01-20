import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Clean phone number for WhatsApp URL (remove +, spaces, dashes, etc.)
  const cleanPhoneNumber = (phone: string) => {
    return phone.replace(/[\s\+\-\(\)]/g, '');
  };

  const phoneNumber = "+27678489517";
  const cleanedNumber = cleanPhoneNumber(phoneNumber);
  const message = "Hello! I'm interested in your electrical products and services.";
  const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform animate-float group"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      
      {/* Tooltip - hidden on mobile, shown on hover for desktop */}
      <span className="hidden sm:block absolute right-full mr-3 bg-foreground text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        Chat with us!
      </span>
      
      {/* Pulse ring - only on desktop to avoid performance issues on mobile */}
      <span className="hidden sm:block absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
