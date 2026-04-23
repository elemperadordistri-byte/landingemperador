/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  PiggyBank, 
  Rocket, 
  Headphones, 
  Truck, 
  ShieldCheck, 
  Clock, 
  ShoppingBag, 
  MessageCircle,
  Star,
  ChevronDown,
  Instagram,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Package
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

// Configuration & Constants
const LOGO_URL = "https://lh3.googleusercontent.com/aida/ADBb0uia1p3cQQ2YajH6fUjcP213VaMPznp-q72afwG5846eubRc6Llcv7MMAo1yV61KMbvucXFHN1abyIquwkOJXfJUsZ0WcSee6mOEqwnRegZBHGz__30ZqlRPYr7qHAQqDBx8PM_pgRetUUX182qmOB_nu9lOvBpksRwTp_0Z2q_DYtH0slVcyKpZOp7bQtydt6h1tJcYOsWGfR-bSFaYeni9MYDyrScb8Eo7xpvPKkR-Xmo5v1ncLm7aZbsflV38DtgOo-7E6cY7";
const STORE_URL = "https://mayoristaelemperadorcaba.tiendanegocio.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGncvyN9C7pmBSI8ei9PnvEyrQF59Ott4yVYcxAiTpM3IBohfHJ-Hx50FWfjgI_aem_ulBwmhANK_U1LR86ksX25g";
const WHATSAPP_URL = "https://wa.me/541123667301";
const INSTAGRAM_URL = "https://www.instagram.com/mayoristaelemperadorcaba/?hl=es-es";

const BRANDS = [
  { name: "Aromanza", logo: "input_file_2.png" },
  { name: "Sagrada Madre", logo: "input_file_0.png" },
  { name: "Iluminarte", logo: "input_file_1.png" },
  { name: "Saphirus", logo: null },
  { name: "Satya", logo: null }
];

// Reusable Components
const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`px-6 py-16 md:py-24 max-w-7xl mx-auto w-full ${className}`}>
    {children}
  </section>
);

const Button = ({ 
  children, 
  className = "", 
  variant = "primary", 
  as: Component = "button", 
  ...props 
}: any) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 text-sm md:text-base uppercase tracking-wider active:scale-95 transition-all outline-none cursor-pointer decoration-none font-bold rounded-xl py-4 px-8 md:px-10 shadow-lg";
  
  const variants: any = {
    primary: "bg-emperor-gold text-midnight hover:bg-opacity-90 shadow-emperor-gold/20",
    secondary: "bg-white text-midnight hover:bg-gray-50 border border-gray-200",
    outline: "border-2 border-emperor-gold text-emperor-gold hover:bg-emperor-gold/10 shadow-none",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-green-500/20"
  };
  
  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: <PiggyBank />,
      title: "Baja inversión inicial",
      desc: "Comenzá con un monto mínimo y accesible para cualquier bolsillo."
    },
    {
      icon: <TrendingUp />,
      title: "Productos de alta rotación",
      desc: "Productos que tus clientes ya conocen y compran todos los días."
    },
    {
      icon: <Headphones />,
      title: "Asesoramiento personalizado",
      desc: "Te guiamos paso a paso para que elijas lo que más se vende en tu zona."
    },
    {
      icon: <Clock />,
      title: "Pedidos listos en 72 hs",
      desc: "Despachamos rápido para que no pierdas ventas por falta de stock."
    }
  ];

  const steps = [
    { n: "1", title: "Elegís tus productos", desc: "Seleccioná los productos que mejor se ajusten a tu presupuesto inicial." },
    { n: "2", title: "Comprás online o consultás", desc: "Podés pagar directamente en la web o sacarte dudas por WhatsApp." },
    { n: "3", title: "Pagás como prefieras", desc: "Aceptamos transferencia, Mercado Pago y todas las tarjetas." },
    { n: "4", title: "Recibís en tu casa", desc: "Enviamos por Correo Argentino a todo el país con seguimiento." },
    { n: "5", title: "Empezás a vender", desc: "¡Listo! Ya tenés mercadería de calidad para generar tus ganancias." }
  ];

  const packs = [
    { 
      name: "Pack Inicial", 
      price: "$100.000", 
      focus: "Perfecto para empezar sin riesgo",
      features: ["Surtido básico", "Ideal para revendedores nuevos", "Ganancia rápida"]
    },
    { 
      name: "Pack Intermedio", 
      price: "$150.000", 
      focus: "Más variedad, más margen de ganancia",
      features: ["Marcas líderes incluidas", "Mayor stock de rotación", "Bonificación en envío"]
    },
    { 
      name: "Pack Completo", 
      price: "$200.000", 
      focus: "Máximo potencial de reventa",
      features: ["Catálogo completo", "Caja premium incluida", "Asesoramiento prioritario"]
    }
  ];

  const testimonials = [
    { name: "Mariano González", text: "Excelente atención y los productos se venden solos. El envío llegó a Córdoba impecable." },
    { name: "Laura Fernández", text: "Empecé con el pack de 100k y en dos semanas ya estaba haciendo el segundo pedido." },
    { name: "Santiago Pérez", text: "Lo mejor es que te asesoran de verdad. Me dijeron qué marcas salían más y no fallaron." },
    { name: "Marcela López", text: "Muy conforme con la rapidez del despacho. En 3 días ya tenía todo listo para vender." },
    { name: "Fernando Ruiz", text: "Productos originales y de calidad. Mis clientes me lo agradecen siempre." }
  ];

  const faqs = [
    { q: "¿Necesito experiencia previa?", a: "No, para nada. Los sahumerios son productos de venta impulsiva, se venden por el aroma y la marca." },
    { q: "¿Cuál es el mínimo de inversión?", a: "Podés arrancar desde los $100.000 con nuestros packs diseñados para emprendedores." },
    { q: "¿Realmente se vende bien?", a: "Sí. Trabajamos con marcas líderes como Aromanza y Sagrada Madre, que tienen muchísima demanda." },
    { q: "¿Cómo empiezo?", a: "Elegí tu pack en la tienda o escribinos por WhatsApp para que te armemos un pedido a medida." }
  ];

  return (
    <div className="min-h-screen bg-midnight text-parchment font-sans selection:bg-emperor-gold selection:text-midnight overflow-x-hidden">
      
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="El Emperador" className="w-8 h-8 rounded-full border border-emperor-gold/30" />
            <span className="font-serif italic text-lg leading-none">El Emperador</span>
          </div>
          <div className="hidden md:flex gap-6">
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-emperor-gold bg-emperor-gold/10 p-2 rounded-lg md:hidden">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* 1. SECCIÓN HERO */}
      <section className="relative pt-32 pb-20 px-6 text-center md:pt-48 md:pb-32 bg-gradient-to-b from-obsidian via-midnight to-midnight">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-tight"
          >
            Empezá tu negocio de sahumerios con <span className="text-emperor-gold italic">poca inversión</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-parchment/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Comprá al mejor precio, recibí en tu casa y empezá a generar ingresos desde el primer pedido.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button as="a" href={STORE_URL} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full sm:w-auto h-16 text-lg">
              COMPRAR AHORA <ArrowRight className="w-5 h-5" />
            </Button>
            <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="w-full sm:w-auto h-16 text-lg">
              HABLAR POR WHATSAPP <MessageCircle className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="bg-midnight py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-emperor-gold font-bold mb-10">Distribuidor Oficial de Marcas Líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {BRANDS.map((brand, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="h-12 md:h-16 flex items-center justify-center">
                  {brand.logo ? (
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="h-full w-auto grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all" 
                      referrerPolicy="no-referrer"
                      onError={(e: any) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                  ) : null}
                  <span className={`${brand.logo ? 'hidden' : 'block'} text-xl md:text-2xl font-serif italic text-parchment group-hover:text-emperor-gold transition-colors`}>{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. SECCIÓN BENEFICIOS */}
      <Section id="beneficios" className="bg-surface relative rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 md:-mt-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-8 rounded-3xl bg-midnight/30 border border-white/5 hover:border-emperor-gold/20 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-emperor-gold/5 flex items-center justify-center text-emperor-gold mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(b.icon as React.ReactElement, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-parchment/50 font-light leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button as="a" href={STORE_URL} target="_blank" rel="noopener noreferrer" variant="primary">
            EMPEZÁ A VENDER AHORA
          </Button>
        </div>
      </Section>

      {/* 3. CÓMO FUNCIONA */}
      <Section className="bg-midnight overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-serif italic text-center mb-16">Armá tu negocio en 5 pasos</h2>
        <div className="relative">
          {/* Línea decorativa */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emperor-gold/20 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-emperor-gold flex items-center justify-center text-emperor-gold font-bold text-2xl mx-auto mb-6 shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                <h4 className="text-lg font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-parchment/40 leading-relaxed px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="primary">
            Quiero Consultar mis Dudas
          </Button>
        </div>
      </Section>

      {/* 4. SECCIÓN PACKS (CRÍTICA) */}
      <Section id="packs" className="bg-surface relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emperor-gold/5 via-transparent to-transparent pointer-events-none" />
        <h2 className="text-3xl md:text-6xl font-serif italic text-center mb-4 underline underline-offset-[12px] decoration-emperor-gold/20">Packs a tu medida</h2>
        <p className="text-center text-parchment/60 mb-8 max-w-xl mx-auto">Armamos packs a tu medida optimizando tu presupuesto para que vendas desde el primer día.</p>
        <div className="flex justify-center mb-16">
          <Button as="a" href={STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-[#F59E0B] text-white hover:bg-[#D97706] shadow-xl text-lg px-12">
            EMPEZÁ HOY <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packs.map((p, i) => (
            <div key={i} className={`p-8 md:p-10 rounded-[2.5rem] bg-card border ${i === 1 ? 'border-emperor-gold shadow-[0_20px_50px_rgba(245,158,11,0.1)] relative scale-105 z-10' : 'border-white/5'} flex flex-col`}>
              {i === 1 && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emperor-gold text-midnight text-[10px] uppercase font-bold px-4 py-1 rounded-full tracking-[0.2em]">El más buscado</span>}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <div className="text-4xl md:text-5xl font-serif font-bold text-emperor-gold mb-4 italic">{p.price}</div>
              <p className="text-sm text-parchment/60 font-light mb-8 italic">"{p.focus}"</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-parchment/80">
                    <CheckCircle2 className="w-5 h-5 text-emperor-gold shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-3">
                <Button as="a" href={i === 1 ? "https://mayoristaelemperadorcaba.tiendanegocio.com/producto/mega-pack-aromanza-80-prod-envio-gratis" : STORE_URL} target="_blank" rel="noopener noreferrer" variant={i === 1 ? 'primary' : 'outline'} className="w-full">
                  COMPRAR PACK
                </Button>
                <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="secondary" className="w-full text-xs">
                  CONSULTAR POR WHATSAPP
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. SECCIÓN PROFIT (NUEVA) */}
      <Section className="bg-midnight">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-card to-surface border border-white/5 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-emperor-gold/10 flex items-center justify-center text-emperor-gold shrink-0">
            <TrendingUp className="w-12 h-12 md:w-16 md:h-16" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-6">¿Cuánto podés ganar?</h2>
            <p className="text-lg md:text-xl text-parchment/70 font-light leading-relaxed mb-4">
              Nuestros productos tienen una **altísima demanda** y un margen de reventa competitivo. El objetivo es que logres **recuperar tu inversión inicial rápido** y empieces a generar ganancia real desde el primer pedido.
            </p>
            <p className="text-sm text-emperor-gold font-bold mb-8 italic">Contamos con diversas formas de pago: transferencia, Mercado Pago, MODO, tarjeta de crédito y débito.</p>
          </div>
        </div>
      </Section>

      {/* 7. GARANTÍA & CONFIANZA */}
      <Section className="bg-surface rounded-[3rem] md:rounded-[5rem] my-10 md:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">Tu inversión está segura con nosotros</h2>
            <div className="p-8 rounded-3xl bg-midnight border-l-4 border-emperor-gold shadow-xl">
              <p className="text-lg md:text-xl font-bold leading-relaxed text-emperor-gold mb-2 uppercase tracking-tight">Garantía Real de Entrega:</p>
              <p className="text-parchment/80 text-base md:text-lg italic leading-relaxed">
                “Si tu pedido se pierde o no llega, te reenviamos la mercaderia**.”
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: <Truck />, text: "Envíos a todo el país" },
                { icon: <Package />, text: "Correo Argentino" },
                { icon: <Rocket />, text: "Entrega rápida" }
              ].map((x, i) => (
                <div key={i} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                  <div className="text-emperor-gold">{React.cloneElement(x.icon as React.ReactElement, { className: "w-6 h-6" })}</div>
                  <span className="text-xs uppercase tracking-widest font-bold opacity-60">{x.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emperor-gold/10 rounded-[3rem] blur-[100px]" />
            <div className="relative p-10 rounded-[3rem] bg-card border border-white/5 flex flex-col gap-6">
              <ShieldCheck className="w-16 h-16 text-emperor-gold" />
              <h3 className="text-2xl font-serif italic">Compromiso Santería El Emperador</h3>
              <p className="text-sm text-parchment/50 font-light leading-relaxed">
                Somos distribuidores oficiales. Solo trabajamos productos legítimos y originales para que tu reputación con tus clientes sea excelente.
              </p>
              <div className="pt-4 border-t border-white/5">
                <Button as="a" href={STORE_URL} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full">
                  Hacer mi primer pedido
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. TESTIMONIOS */}
      <Section className="bg-midnight">
        <h2 className="text-center text-3xl md:text-5xl font-serif italic mb-16 underline underline-offset-8 decoration-emperor-gold/20">Ellos ya empezaron su negocio</h2>
        <div className="flex gap-6 overflow-x-auto pb-12 snap-x scrollbar-hide no-scrollbar px-2">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-[280px] md:w-[350px] p-8 rounded-[2rem] bg-card border border-white/5 shadow-2xl snap-center group">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-emperor-gold fill-current" />)}
              </div>
              <p className="text-parchment/70 italic leading-relaxed mb-8 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emperor-gold/10 flex items-center justify-center text-emperor-gold font-bold">{t.name[0]}</div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-[10px] uppercase text-emperor-gold tracking-widest font-bold">Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. PREGUNTAS FRECUENTES */}
      <Section id="preguntas" className="bg-surface py-20 border-y border-white/5">
        <h2 className="text-center text-3xl md:text-5xl font-serif italic mb-16">Dudas frecuentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-white/5 rounded-3xl overflow-hidden bg-card/50">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center group outline-none"
              >
                <span className={`font-bold transition-colors ${openFaq === i ? 'text-emperor-gold' : 'text-parchment group-hover:text-emperor-gold'}`}>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-emperor-gold' : 'text-parchment/30'}`} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-parchment/50 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. FINAL CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-t from-obsidian to-midnight">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emperor-gold/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 italic">¿Preparado para crecer?</h2>
          <p className="text-xl md:text-2xl text-emperor-gold/90 font-bold mb-10 uppercase tracking-[0.2em] animate-pulse">
            🚨 STOCK LIMITADO / ALTA DEMANDA
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="a" href={STORE_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-emperor-gold hover:bg-parchment w-full sm:w-auto h-20 text-xl px-16 shadow-2xl">
              EMPEZÁ HOY
            </Button>
            <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="whatsapp" className="w-full sm:w-auto h-20 text-xl px-16">
              HABLAR POR WHATSAPP
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-obsidian border-t border-white/5 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full border border-emperor-gold/30" />
                <span className="text-2xl font-serif italic text-parchment">El Emperador</span>
              </div>
              <p className="text-parchment/40 text-sm leading-relaxed max-w-md mb-8 italic">
                Distribuidora mayorista líder. Nos encargamos de que tengas la mejor mercadería en tu domicilio para que vos solo te preocupes por vender.
              </p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-emperor-gold font-bold">Depósito Central:</p>
                <p className="text-sm text-parchment/60 italic font-light">Catamarca 529, Balvanera, CABA</p>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-emperor-gold font-bold mb-6">Negocio</h4>
              <nav className="flex flex-col gap-4 text-sm text-parchment/60 italic">
                <a href={STORE_URL} target="_blank" className="hover:text-emperor-gold transition-colors">Tienda Online</a>
              </nav>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-emperor-gold font-bold mb-6">Seguinos</h4>
              <nav className="flex flex-col gap-4 text-sm text-parchment/60 italic">
                <a href={INSTAGRAM_URL} target="_blank" className="hover:text-emperor-gold transition-colors">Instagram</a>
                <a href={WHATSAPP_URL} target="_blank" className="hover:text-emperor-gold transition-colors">WhatsApp</a>
              </nav>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-parchment/20">© 2024 Santería Mayorista El Emperador. Buenos Aires, Argentina.</p>
            <div className="flex gap-4">
              <Instagram className="w-4 h-4 text-parchment/20 hover:text-emperor-gold transition-colors cursor-pointer" />
              <MessageCircle className="w-4 h-4 text-parchment/20 hover:text-emperor-gold transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 grid grid-cols-2 gap-2 bg-midnight/90 backdrop-blur-md border-t border-white/5">
        <a href={WHATSAPP_URL} target="_blank" className="h-14 flex items-center justify-center bg-[#25D366] rounded-xl text-white font-bold shadow-lg shadow-green-500/20">
          <MessageCircle className="w-5 h-5 mr-2" /> WHATSAPP
        </a>
        <a href={STORE_URL} target="_blank" className="h-14 flex items-center justify-center bg-emperor-gold rounded-xl text-midnight font-bold shadow-lg shadow-emperor-gold/20">
          <ShoppingBag className="w-5 h-5 mr-2" /> TIENDA
        </a>
      </div>

      {/* Floating WhatsApp FAB (Desktop) */}
      <a 
        href={WHATSAPP_URL} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-10 right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl active:scale-90 transition-transform group"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-obsidian px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          ¿Querés vender? Consultanos
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>

    </div>
  );
}
