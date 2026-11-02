import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle, Mail } from 'lucide-react';
import { editableContact } from '@/data';

type Props = { onWhatsApp: () => void };

export default function Contact({ onWhatsApp }: Props) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><MessageCircle className="h-3.5 w-3.5" /> Contacto</span>
          <h2 className="mt-4 section-title text-balance">Estamos para servirte</h2>
          <p className="mt-4 text-brand-100/80">
            Escríbenos, llámanos o visítanos. Con gusto atendemos tus pedidos y preguntas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Info + map */}
          <div className="reveal space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label="Teléfono" value={editableContact.phone} />
              <InfoCard icon={MessageCircle} label="WhatsApp" value={editableContact.whatsapp} />
              <InfoCard icon={Mail} label="Correo" value={editableContact.email} />
              <InfoCard icon={MapPin} label="Dirección" value={editableContact.address} />
              <InfoCard icon={Clock} label="Horarios" value={editableContact.hours} />
            </div>

            <button onClick={onWhatsApp} className="btn-whatsapp w-full">
              <WhatsAppIcon /> Escribir por WhatsApp
            </button>

            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/15 shadow-xl shadow-brand-950/30">
              <iframe
                title="Ubicación de Bio Natural"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(editableContact.mapsQuery)}&output=embed`}
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal card space-y-4 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-brand-950">Envíanos un mensaje</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="name" placeholder="Tu nombre completo" />
              <Field label="Teléfono" name="phone" placeholder="Tu teléfono" type="tel" />
            </div>
            <Field label="Tu correo" name="email" placeholder="tucorreo@ejemplo.com" type="email" icon={Mail} />
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-brand-900">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Cuéntanos qué necesitas..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              {sent ? '¡Mensaje enviado!' : <>Enviar mensaje <Send className="h-4 w-4" /></>}
            </button>
            {sent && (
              <p className="text-center text-xs text-nature-600">
                Gracias por escribirnos. Pronto nos pondremos en contacto contigo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="card flex items-start gap-3 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-brand-950">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  icon: Icon,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  icon?: typeof Mail;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-900">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-slate-200 bg-white/80 py-3 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${
            Icon ? 'pl-10 pr-4' : 'px-4'
          }`}
        />
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.21.85 5.75 2.38a8.09 8.09 0 0 1 2.38 5.74c0 4.46-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.47 3.63-8.1 8.12-8.1Zm-2.7 4.3c-.1 0-.26.04-.4.18-.14.14-.52.5-.52 1.24 0 .73.53 1.43.6 1.53.07.1 1.04 1.6 2.54 2.24.36.16.64.25.85.31.36.12.68.1.94.06.29-.04.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.06-.14-.1-.29-.17-.14-.07-.88-.43-1.02-.48-.14-.05-.24-.07-.34.08-.1.14-.39.48-.47.57-.09.1-.17.11-.32.04-.14-.07-.6-.22-1.14-.71-.42-.38-.7-.84-.79-.98-.08-.14-.01-.22.06-.29.07-.07.15-.16.22-.25.07-.09.1-.14.14-.25.05-.1.02-.19-.01-.26-.04-.07-.32-.79-.44-1.08-.12-.28-.23-.24-.32-.25h-.27Z" />
    </svg>
  );
}
