import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { editableContact, type NavLink } from '@/data';

type Props = {
  onOrder: () => void;
  onWhatsApp: () => void;
  onNavigate: (id: string) => void;
  navLinks: NavLink[];
};

export default function Footer({ onOrder, onWhatsApp, onNavigate, navLinks }: Props) {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-brand-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Bio Natural" className="h-12 w-12 rounded-2xl object-contain" />
              <div className="leading-none">
                <p className="font-heading text-lg font-bold text-white">Bio Natural</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-nature-400">Agua purificada</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
              Agua purificada de la más alta calidad, entregada en tu casa con el sello de confianza
              que tu familia merece.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">Navegación</p>
            <ul className="mt-4 grid gap-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => onNavigate(l.id)}
                    className="text-sm text-brand-200/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">Contacto</p>
            <ul className="mt-4 grid gap-3 text-sm text-brand-200/80">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {editableContact.phone}
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {editableContact.whatsapp}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {editableContact.address}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {editableContact.hours}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-white">Acciones</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <button onClick={onOrder} className="btn-primary w-full">Pedir ahora</button>
              <button onClick={onWhatsApp} className="btn-ghost w-full border-brand-800/50 bg-brand-900/40 text-brand-100 hover:border-brand-700 hover:bg-brand-900">
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-800/60 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-brand-300/70">
            © {new Date().getFullYear()} Bio Natural. Todos los derechos reservados.
          </p>
          <p className="text-xs text-brand-300/50">
            Diseñado con dedicación para tu bienestar.
          </p>
        </div>
      </div>
    </footer>
  );
}
