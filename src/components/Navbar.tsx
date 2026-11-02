import { useState } from 'react';
import { Menu, X, User, ShieldCheck } from 'lucide-react';
import { navLinks } from '@/data';

type NavbarProps = {
  onLogin: () => void;
  onRegister: () => void;
  onOrder: () => void;
  activePage: string;
  onNavigate: (id: string) => void;
};

export default function Navbar({ onLogin, onRegister, onOrder, activePage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-950/85 shadow-lg shadow-brand-950/20 backdrop-blur-xl">
      <nav className="container-x flex h-20 items-center justify-between">
        {/* Mobile: logo on left */}
        <button
          onClick={() => go('inicio')}
          className="group flex items-center lg:hidden"
          aria-label="Bio Natural — Inicio"
        >
          <img src="/logo.png" alt="Bio Natural" className="h-12 w-12 rounded-2xl object-contain transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className={`relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                activePage === link.id
                  ? 'text-white'
                  : 'text-brand-100 hover:text-white'
              }`}
            >
              {link.id === 'inicio' && (
                <img src="/logo.png" alt="" className="h-7 w-7 rounded-lg object-contain" />
              )}
              {link.label}
              {activePage === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-nature-400" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={onLogin}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-brand-100 transition-colors hover:bg-white/10"
          >
            <User className="h-4 w-4" />
            Iniciar sesión
          </button>
          <button
            onClick={onRegister}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/20"
          >
            <ShieldCheck className="h-4 w-4" />
            Registrarse
          </button>
          <button onClick={onOrder} className="btn-primary">
            Pedir ahora
          </button>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl border border-white/10 bg-brand-950/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activePage === link.id ? 'bg-brand-500/20 text-white' : 'text-brand-100 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
            <button onClick={() => { setOpen(false); onLogin(); }} className="btn-ghost w-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <User className="h-4 w-4" /> Iniciar sesión
            </button>
            <button onClick={() => { setOpen(false); onRegister(); }} className="btn-ghost w-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <ShieldCheck className="h-4 w-4" /> Registrarse
            </button>
            <button onClick={() => { setOpen(false); onOrder(); }} className="btn-primary w-full">
              Pedir ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
