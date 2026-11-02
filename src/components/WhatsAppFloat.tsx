type Props = { onClick: () => void };

export default function WhatsAppFloat({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:h-16 hover:w-16 sm:bottom-7 sm:right-7"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-[#25D366]" />
      <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.21.85 5.75 2.38a8.09 8.09 0 0 1 2.38 5.74c0 4.46-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.47 3.63-8.1 8.12-8.1Zm-2.7 4.3c-.1 0-.26.04-.4.18-.14.14-.52.5-.52 1.24 0 .73.53 1.43.6 1.53.07.1 1.04 1.6 2.54 2.24.36.16.64.25.85.31.36.12.68.1.94.06.29-.04.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.06-.14-.1-.29-.17-.14-.07-.88-.43-1.02-.48-.14-.05-.24-.07-.34.08-.1.14-.39.48-.47.57-.09.1-.17.11-.32.04-.14-.07-.6-.22-1.14-.71-.42-.38-.7-.84-.79-.98-.08-.14-.01-.22.06-.29.07-.07.15-.16.22-.25.07-.09.1-.14.14-.25.05-.1.02-.19-.01-.26-.04-.07-.32-.79-.44-1.08-.12-.28-.23-.24-.32-.25h-.27Z" />
      </svg>
    </button>
  );
}
