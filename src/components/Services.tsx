import { Wrench } from 'lucide-react';
import { servicios } from '@/data';

export default function Services() {
  return (
    <section id="servicios" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Wrench className="h-3.5 w-3.5" /> Nuestros servicios</span>
          <h2 className="mt-4 section-title text-balance">Todo lo que tu familia necesita, en un solo lugar</h2>
          <p className="mt-4 text-brand-100/80">
            Desde la entrega a domicilio hasta la venta en ventanilla, en Bio Natural te
            ofrecemos opciones cómodas para que nunca falte agua purificada en tu casa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className="reveal group card flex flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-950/10"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-brand-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
