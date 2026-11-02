import { Droplets, Sparkles, ChevronRight } from 'lucide-react';
import { editableContact } from '@/data';

const HERO_IMG =
  'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1400';
const DROP_IMG =
  'https://images.pexels.com/photos/247759/pexels-photo-247759.jpeg?auto=compress&cs=tinysrgb&w=900';

type HeroProps = {
  onOrder: () => void;
  onWhatsApp: () => void;
  onNavigate: (id: string) => void;
};

export default function Hero({ onOrder, onWhatsApp, onNavigate }: HeroProps) {
  return (
    <section id="inicio" className="relative z-10 overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Agua 100% purificada
          </span>
          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
            Agua pura, entregada en la puerta de tu casa
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-100/80">
            En <span className="font-semibold text-nature-400">Bio Natural</span> purificamos,
            sellamos y llevamos tu agua hasta ti. Frescura, limpieza y un servicio cercano
            que tu familia puede confiar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={onOrder} className="btn-primary">
              <Droplets className="h-5 w-5" /> Pedir ahora
            </button>
            <button onClick={onWhatsApp} className="btn-whatsapp">
              <WhatsAppIcon /> Contactar por WhatsApp
            </button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { v: '100%', l: 'Agua purificada' },
              { v: 'A domicilio', l: 'Entrega confiable' },
              { v: 'Sellado', l: 'Garantía sanitaria' },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
                <dt className="font-heading text-lg font-bold text-white">{s.v}</dt>
                <dd className="mt-1 text-xs font-medium text-brand-100/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual */}
        <div className="relative animate-fade-in">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-400/30 to-nature-400/30 blur-2xl" />
            <img
              src={HERO_IMG}
              alt="Agua purificada servida en un vaso"
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-brand-950/40 ring-1 ring-white/20"
            />

            {/* Floating card: water drop */}
            <div className="absolute -bottom-6 -left-4 hidden w-44 animate-float rounded-3xl border border-white/20 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:block">
              <img
                src={DROP_IMG}
                alt="Gota de agua purificada"
                className="h-24 w-full rounded-2xl object-cover"
              />
              <p className="mt-2 px-1 text-xs font-semibold text-brand-700">Gota perfecta</p>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-3 top-6 flex animate-float-slow items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2.5 shadow-xl backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-nature-400" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-nature-500" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Servicio activo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mini presentation + quick navigation */}
      <div className="container-x mt-16 space-y-6">
        <div className="reveal flex flex-col items-center gap-4 rounded-3xl border border-white/15 bg-white/10 px-6 py-6 text-center shadow-lg backdrop-blur sm:flex-row sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-nature-400">
            <Droplets className="h-6 w-6" />
          </div>
          <p className="max-w-3xl text-sm leading-relaxed text-brand-100/80 sm:text-base">
            <span className="font-semibold text-white">Bio Natural</span> es tu empresa de
            agua purificada de confianza. Nos dedicamos a purificar y entregar agua de la más
            alta calidad, con un servicio a domicilio pensado para tu comodidad y bienestar.
            {editableContact.hours.includes('editable') && (
              <span className="mt-1 block text-xs text-brand-100/50">
                Horario de atención: {editableContact.hours}
              </span>
            )}
          </p>
        </div>

        {/* Quick navigation tiles */}
        <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { id: 'productos', label: 'Ver productos y precios' },
            { id: 'promociones', label: 'Promociones del día' },
            { id: 'como-funciona', label: 'Cómo funciona el servicio' },
            { id: 'contacto', label: 'Contáctanos' },
          ].map((tile) => (
            <button
              key={tile.id}
              onClick={() => onNavigate(tile.id)}
              className="group flex items-center justify-between gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-left text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              {tile.label}
              <ChevronRight className="h-4 w-4 text-brand-200 transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.17 0 4.21.85 5.75 2.38a8.09 8.09 0 0 1 2.38 5.74c0 4.46-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.32c0-4.47 3.63-8.1 8.12-8.1Zm-2.7 4.3c-.1 0-.26.04-.4.18-.14.14-.52.5-.52 1.24 0 .73.53 1.43.6 1.53.07.1 1.04 1.6 2.54 2.24.36.16.64.25.85.31.36.12.68.1.94.06.29-.04.88-.36 1-.71.13-.35.13-.65.09-.71-.04-.06-.14-.1-.29-.17-.14-.07-.88-.43-1.02-.48-.14-.05-.24-.07-.34.08-.1.14-.39.48-.47.57-.09.1-.17.11-.32.04-.14-.07-.6-.22-1.14-.71-.42-.38-.7-.84-.79-.98-.08-.14-.01-.22.06-.29.07-.07.15-.16.22-.25.07-.09.1-.14.14-.25.05-.1.02-.19-.01-.26-.04-.07-.32-.79-.44-1.08-.12-.28-.23-.24-.32-.25h-.27Z" />
    </svg>
  );
}
