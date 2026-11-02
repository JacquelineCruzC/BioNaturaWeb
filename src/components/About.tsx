import { Leaf, Target, Heart, Droplets } from 'lucide-react';

const ABOUT_IMG =
  'https://images.pexels.com/photos/10965842/pexels-photo-10965842.jpeg?auto=compress&cs=tinysrgb&w=1100';

const values = [
  {
    icon: Leaf,
    title: 'Quiénes somos',
    text: 'Somos una empresa familiar dedicada a la purificación y distribución de agua para el hogar. Nacimos para acercar agua de calidad a más familias, con un trato cercano y honesto.',
  },
  {
    icon: Target,
    title: 'Nuestra misión',
    text: 'Ofrecer agua purificada de la más alta calidad, con un servicio a domicilio puntual y confiable, para que tu familia siempre tenga lo mejor para hidratarse.',
  },
  {
    icon: Heart,
    title: 'Nuestro compromiso',
    text: 'Nos comprometemos con la limpieza, la higiene y el bienestar de cada cliente. Cada garrafón lleva sello de garantía sanitaria y la confianza de un equipo que te conoce.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="page-section">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow"><Leaf className="h-3.5 w-3.5" /> Nosotros</span>
          <h2 className="mt-4 section-title text-balance">Una historia de agua, familia y confianza</h2>
          <p className="mt-4 text-brand-100/80">
            En Bio Natural creemos que el agua es vida y que mereces recibirla pura, fresca y sellada
            en la comodidad de tu casa. Conocer nuestra historia es conocer el porqué de cada garrafón.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-400/30 to-nature-400/30 blur-2xl" />
            <img
              src={ABOUT_IMG}
              alt="Vaso de agua purificada"
              className="aspect-[5/4] w-full rounded-[2rem] object-cover shadow-2xl shadow-brand-950/30 ring-1 ring-white/60"
            />
            <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:block">
              <div className="flex items-center gap-2 text-brand-600">
                <Droplets className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Agua sellada</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">Tapa y sello de garantía sanitaria en cada garrafón.</p>
            </div>
          </div>

          <div className="grid gap-6">
            {values.map((v) => (
              <div key={v.title} className="reveal card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-950">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{v.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
