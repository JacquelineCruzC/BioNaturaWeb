import { useEffect, useState } from 'react';
import { X, User, ShieldCheck, Mail, Lock, Phone } from 'lucide-react';

export type AuthMode = 'login' | 'register' | null;

type Props = {
  mode: AuthMode;
  onClose: () => void;
  onSwitch: (mode: AuthMode) => void;
};

export default function AuthModal({ mode, onClose, onSwitch }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (mode) {
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mode]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!mode) return null;

  const isLogin = mode === 'login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md animate-fade-up overflow-hidden rounded-3xl border border-white/60 bg-white shadow-2xl">
        <div className="relative bg-gradient-to-br from-brand-500 to-brand-700 p-6 text-white">
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-xl" />
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Bio Natural" className="h-11 w-11 rounded-2xl object-contain" />
            <div>
              <h2 className="font-heading text-xl font-bold text-white">
                {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
              </h2>
              <p className="text-xs text-brand-100/90">
                {isLogin ? 'Accede a tu cuenta Bio Natural' : 'Únete a Bio Natural hoy mismo'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nature-100 text-nature-600">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-950">
                {isLogin ? 'Bienvenido de vuelta' : 'Cuenta creada'}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Esta es una demostración visual. Pronto podrás acceder a tu panel de cliente.
              </p>
              <button onClick={onClose} className="btn-primary mt-6">Continuar</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <Input icon={User} label="Nombre completo" name="name" placeholder="Tu nombre" type="text" />
              )}
              <Input icon={Mail} label="Correo electrónico" name="email" placeholder="tucorreo@ejemplo.com" type="email" />
              {!isLogin && (
                <Input icon={Phone} label="Teléfono" name="phone" placeholder="Tu teléfono" type="tel" />
              )}
              <Input icon={Lock} label="Contraseña" name="password" placeholder="••••••••" type="password" />

              <button type="submit" className="btn-primary w-full">
                {isLogin ? 'Entrar' : 'Registrarme'}
              </button>

              <p className="text-center text-sm text-slate-500">
                {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                <button
                  type="button"
                  onClick={() => onSwitch(isLogin ? 'register' : 'login')}
                  className="font-semibold text-brand-600 underline-offset-2 hover:underline"
                >
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Input({
  icon: Icon,
  label,
  name,
  placeholder,
  type,
}: {
  icon: typeof User;
  label: string;
  name: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-900">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-white/80 py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>
    </div>
  );
}
