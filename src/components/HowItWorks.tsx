import { Workflow } from 'lucide-react';
import { pasos } from '@/data';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Workflow className="h-3.5 w-3.5" /> Cómo funciona</span>
          <h2 className="mt-4 section-title text-balance">Así de fácil es recibir tu agua</h2>
          <p className="mt-4 text-brand-100/80">
            Del pedido a la entrega, cada paso está pensado para que recibas agua pura, fresca y sellada
            sin complicaciones.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <li
              key={p.title}
              className="reveal relative"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="card group h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-950/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-brand-700 transition-all duration-300 group-hover:from-brand-500 group-hover:to-brand-600 group-hover:text-white">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-brand-100">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-brand-950">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{p.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
