import { Gift } from 'lucide-react';
import { beneficios } from '@/data';

type Props = { onRegister: () => void };

export default function Benefits({ onRegister }: Props) {
  return (
    <section id="beneficios" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Gift className="h-3.5 w-3.5" /> Beneficios para clientes</span>
          <h2 className="mt-4 section-title text-balance">Ventajas que hacen la diferencia</h2>
          <p className="mt-4 text-brand-100/80">
            Al crear tu cuenta en Bio Natural, accedes a beneficios pensados para premiarte por
            confiar en nosotros y volver a pedir más fácil que nunca.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <div
              key={b.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lg shadow-brand-950/20 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/20"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-nature-400/20 blur-2xl transition-all duration-500 group-hover:bg-nature-400/30" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-nature-400/30 to-nature-500/30 text-nature-300 transition-all duration-300 group-hover:from-nature-500 group-hover:to-nature-600 group-hover:text-white">
                  <b.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-white">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-100/80">{b.description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div className="reveal flex flex-col justify-center rounded-3xl border border-nature-200 bg-gradient-to-br from-nature-500 to-nature-600 p-6 text-white shadow-lg shadow-nature-500/30">
            <h3 className="font-heading text-lg font-bold text-white">Crea tu cuenta hoy</h3>
            <p className="mt-1.5 text-sm text-nature-50/90">
              Empieza a disfrutar todos estos beneficios y haz tu próximo pedido mucho más fácil.
            </p>
            <button
              onClick={onRegister}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-nature-700 transition-transform hover:-translate-y-0.5"
            >
              Registrarme ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
