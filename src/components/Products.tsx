import { Tag, Check } from 'lucide-react';
import { productGroups } from '@/data';

type Props = { onOrder: () => void };

export default function Products({ onOrder }: Props) {
  return (
    <section id="productos" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Tag className="h-3.5 w-3.5" /> Productos y precios</span>
          <h2 className="mt-4 section-title text-balance">Precios claros para cada necesidad</h2>
          <p className="mt-4 text-brand-100/80">
            Compara entre servicio a domicilio y venta en ventanilla. Elige la opción que más
            te convenga y pide tu agua en segundos.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {productGroups.map((group) => (
            <div key={group.title} className="reveal card overflow-hidden">
              <div className="flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-brand-50 to-white p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-md shadow-brand-950/5">
                  <group.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-brand-950">{group.title}</h3>
                  <p className="text-sm text-slate-600">{group.subtitle}</p>
                </div>
              </div>

              <ul className="divide-y divide-slate-100">
                {group.products.map((p) => (
                  <li
                    key={p.name}
                    className={`flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-brand-50/50 ${
                      p.highlight ? 'bg-nature-50/60' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          p.highlight ? 'bg-nature-500 text-white' : 'bg-brand-100 text-brand-600'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="font-semibold text-brand-950">{p.name}</p>
                        {p.note && <p className="mt-0.5 text-xs text-slate-400">{p.note}</p>}
                      </div>
                    </div>
                    <span
                      className={`shrink-0 font-heading text-xl font-bold ${
                        p.highlight ? 'text-nature-700' : 'text-brand-700'
                      }`}
                    >
                      {p.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-brand-100/70">
            ¿Listo para pedir tu agua? Recibe tu garrafón sellado y fresco en casa.
          </p>
          <button onClick={onOrder} className="btn-primary">Pedir ahora</button>
        </div>
      </div>
    </section>
  );
}
