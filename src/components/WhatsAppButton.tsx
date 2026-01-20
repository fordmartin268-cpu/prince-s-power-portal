import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number
  const phoneNumber = "27000000000";
  const message = "Hello! I'm interested in your electrical products and services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-foreground text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
