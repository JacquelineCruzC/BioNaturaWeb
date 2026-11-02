import { Sparkles, Tag, Plus } from 'lucide-react';
import { promociones } from '@/data';

type Props = { onOrder: () => void };

export default function Promotions({ onOrder }: Props) {
  return (
    <section id="promociones" className="relative z-10 py-24">
      <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-nature-500/20 blur-3xl" />

      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur">
            <Tag className="h-3.5 w-3.5" /> Promociones
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-white text-balance sm:text-4xl">
            Ahorra cada semana con nuestras ofertas
          </h2>
          <p className="mt-4 text-brand-100/80">
            Descuentos pensados para tu familia. Aprovecha las promociones especiales y ten
            siempre agua purificada al mejor precio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {promociones.map((promo) => (
            <div
              key={promo.day}
              className={`reveal group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                promo.accent
                  ? 'border-nature-400/40 bg-gradient-to-br from-nature-500/20 to-brand-500/10'
                  : 'border-white/15 bg-white/5'
              }`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-white/10" />
              <div className="relative">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${
                    promo.accent ? 'bg-nature-400 text-nature-950' : 'bg-white/10 text-white'
                  }`}
                >
                  {promo.accent && <Sparkles className="h-3.5 w-3.5" />}
                  {promo.day}
                </span>
                <p className="mt-5 font-heading text-4xl font-extrabold text-white sm:text-5xl">
                  {promo.offer}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-100/80">{promo.description}</p>

                {promo.accent && (
                  <button
                    onClick={onOrder}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-800 transition-all hover:bg-brand-50"
                  >
                    Aprovechar oferta
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Placeholder card for future promos */}
          <div className="reveal flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/5 p-8 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Plus className="h-7 w-7" />
            </div>
            <p className="mt-4 font-heading text-lg font-bold text-white">Más promociones en camino</p>
            <p className="mt-1 text-sm text-brand-100/70">
              Estamos preparando nuevas ofertas para ti. ¡Mantente atento a esta sección!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
