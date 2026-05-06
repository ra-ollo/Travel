export default function FloatingButtons() {
  const handleCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18139764842/Izf4CMWaq6gcEOqw28lD'
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18139764842/Izf4CMWaq6gcEOqw28lD'
      });
    }
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919884420534"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        💬
      </a>

      {/* Call */}
      <a
        href="tel:+919884420534"
        onClick={handleCallClick}
        className="fixed bottom-28 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      >
        📞
      </a>
    </>
  );
}