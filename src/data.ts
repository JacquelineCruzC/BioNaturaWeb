import {
  Truck,
  Store,
  Headphones,
  Package,
  ShoppingBag,
  ClipboardList,
  UserCheck,
  Droplets,
  Sparkles,
  Wallet,
  Award,
  History,
  Repeat,
  HeartHandshake,
} from 'lucide-react';

export type Service = {
  icon: typeof Truck;
  title: string;
  description: string;
};

export const servicios: Service[] = [
  {
    icon: Truck,
    title: 'Agua purificada a domicilio',
    description:
      'Llevamos agua purificada directamente a la puerta de tu casa, en el horario que más te convenga.',
  },
  {
    icon: Store,
    title: 'Venta de agua en ventanilla',
    description:
      'Acércate a nuestras instalaciones y lleva tu garrafón relleno al instante, sin esperas.',
  },
  {
    icon: Headphones,
    title: 'Atención a clientes',
    description:
      'Un equipo cercano y dispuesto a resolver tus dudas, pedidos y comentarios en todo momento.',
  },
  {
    icon: Package,
    title: 'Entrega de garrafones',
    description:
      'Recolección de garrafones vacíos y entrega de garrafones llenos, sellados y listos para tomar.',
  },
];

export type Product = {
  name: string;
  price: string;
  note?: string;
  highlight?: boolean;
};

export type ProductGroup = {
  icon: typeof Truck;
  title: string;
  subtitle: string;
  products: Product[];
};

export const productGroups: ProductGroup[] = [
  {
    icon: Truck,
    title: 'Servicio a domicilio',
    subtitle: 'Pedidos entregados en tu casa',
    products: [
      { name: 'Relleno de garrafón de 20 L', price: '$18' },
      { name: 'Relleno de garrafón de 10 L', price: '$10' },
      { name: 'Garrafón nuevo', price: 'Por confirmar', note: 'Precio editable' },
      {
        name: 'Garrafón nuevo con agua',
        price: '$108',
        highlight: true,
        note: 'Incluye garrafón + agua',
      },
    ],
  },
  {
    icon: Store,
    title: 'Venta en ventanilla',
    subtitle: 'Recoge en nuestras instalaciones',
    products: [
      { name: 'Relleno de garrafón de 20 L', price: '$16' },
      { name: 'Relleno de garrafón de 10 L', price: '$10' },
    ],
  },
];

export type Promo = {
  day: string;
  offer: string;
  description: string;
  accent?: boolean;
};

export const promociones: Promo[] = [
  {
    day: 'Martes',
    offer: '3 rellenos por $49',
    description: 'Aprovecha cada martes tres rellenos de garrafón a un precio especial para toda la familia.',
    accent: true,
  },
  {
    day: 'Próximamente',
    offer: 'Nuevas promociones',
    description: 'Estamos preparando más descuentos y beneficios para ti. ¡Mantente atento!',
  },
];

export type Step = {
  icon: typeof ShoppingBag;
  title: string;
  description: string;
};

export const pasos: Step[] = [
  { icon: ShoppingBag, title: 'Realizas tu pedido', description: 'Nos contactas por WhatsApp o por la página y nos dices cuántos garrafones necesitas.' },
  { icon: ClipboardList, title: 'Recibimos y organizamos', description: 'Tomamos nota de tu solicitud, dirección y horario de entrega.' },
  { icon: UserCheck, title: 'Un repartidor lo acepta', description: 'Asignamos a un repartidor cercano que se encargará de tu pedido.' },
  { icon: Package, title: 'Recoge garrafones vacíos', description: 'El repartidor pasa por tus garrafones vacíos al momento de la entrega.' },
  { icon: Droplets, title: 'Lavado, llenado y sello', description: 'Lavamos, llenamos, colocamos la tapa y el sello de garantía sanitaria.' },
  { icon: Truck, title: 'Entrega de garrafones llenos', description: 'Llevamos tus garrafones llenos y sellados hasta la puerta de tu casa.' },
  { icon: Wallet, title: 'Realizas tu pago', description: 'Pagas al recibir tu pedido, en efectivo o por el método que prefieras.' },
];

export type Benefit = {
  icon: typeof Award;
  title: string;
  description: string;
};

export const beneficios: Benefit[] = [
  { icon: Award, title: 'Programa de cliente frecuente', description: 'Acumula pedidos y desbloquea recompensas exclusivas para clientes habituales.' },
  { icon: Sparkles, title: 'Promociones especiales', description: 'Accede a descuentos y ofertas únicas solo disponibles para nuestros clientes.' },
  { icon: History, title: 'Historial de pedidos', description: 'Revisa todos tus pedidos anteriores en cualquier momento desde tu cuenta.' },
  { icon: Repeat, title: 'Volver a pedir es fácil', description: 'Repite tus pedidos con un par de toques, sin volver a llenar tus datos.' },
  { icon: HeartHandshake, title: 'Atención cercana y confiable', description: 'Un equipo humano que te conoce y te atiende como mereces, siempre.' },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: '¿Cómo solicito un pedido de agua a domicilio?',
    answer:
      'Puedes hacerlo desde el botón "Pedir ahora" en esta página, o escribiéndonos directamente por WhatsApp. Solo indícanos cuántos garrafones necesitas, tu dirección y un horario conveniente.',
  },
  {
    question: '¿Cuánto cuesta el servicio a domicilio?',
    answer:
      'El relleno de garrafón de 20 litros cuesta $18 a domicilio y el de 10 litros $10. El garrafón nuevo con agua tiene un costo de $108. No aplican cargos extra por la entrega dentro de nuestra zona de servicio.',
  },
  {
    question: '¿Qué tamaños de garrafón manejan?',
    answer:
      'Actualmente trabajamos con garrafones de 20 litros y de 10 litros, ideales para hogares, oficinas y pequeños negocios.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos pago en efectivo al momento de la entrega y, próximamente, transferencias y pago con tarjeta desde la página. Te avisaremos cuando estén disponibles nuevos métodos.',
  },
  {
    question: '¿Cómo funcionan las promociones?',
    answer:
      'Nuestras promociones, como el "3 rellenos por $49" de los martes, se aplican automáticamente los días indicados al solicitar tu pedido. Solo asegúrate de pedir en el día de la promoción.',
  },
  {
    question: '¿Cómo funciona el programa de cliente frecuente?',
    answer:
      'Cada pedido que realices se acumula en tu cuenta. Al alcanzar cierta cantidad de pedidos obtienes recompensas y descuentos especiales. Pronto podrás ver tu progreso desde tu cuenta.',
  },
];

export type NavLink = { id: string; label: string };

export const navLinks: NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'productos', label: 'Productos' },
  { id: 'promociones', label: 'Promociones' },
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'faq', label: 'Preguntas' },
  { id: 'contacto', label: 'Contacto' },
];

export const editableContact: { phone: string; whatsapp: string; address: string; hours: string; email: string; mapsQuery: string } = {
  phone: '55 1234 5678',
  whatsapp: '52 1 55 1234 5678',
  address: 'Av. Insurgentes Sur 1234, Col. Del Valle, CDMX',
  hours: 'Lun a Sáb · 8:00 a 20:00',
  email: 'contacto@bionatural.mx',
  mapsQuery: 'Bio Natural agua purificada Av. Insurgentes Sur 1234 Del Valle CDMX',
};
