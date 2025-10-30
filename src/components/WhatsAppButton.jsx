import React, { useState } from "react";
import { createPortal } from "react-dom";

const WhatsAppButton = () => {
  const [showBubble, setShowBubble] = useState(true);

  return createPortal(
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2">
      {/* 🟢 Burbuja de texto */}
      {showBubble && (
        <div className="bg-white text-gray-900 px-4 py-2 rounded-xl shadow-lg border border-gray-200 text-sm font-medium animate-fadeIn">
          ¿Necesitas cotizar?
        </div>
      )}

      {/*Botón WhatsApp */}
      <a
        href="https://wa.me/573138547852?text=Hola%2C+quiero+cotizar+un+servicio+de+Strumec."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl hover:scale-110 transition-transform relative"
        onMouseEnter={() => setShowBubble(true)}
        onMouseLeave={() => setShowBubble(false)}
      >
        💬
      </a>
    </div>,
    document.body
  );
};

export default WhatsAppButton;
