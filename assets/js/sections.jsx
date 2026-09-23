// ───────────────────────────────────────────────────────────────
// Estibadores y Montacargas SM — page sections
// ───────────────────────────────────────────────────────────────

const { useEffect, useRef, useState } = React;
const Icon = window.Ico;

// How many times the client-logos marquee repeats its list. Must stay in
// sync with the -100%/MARQUEE_COPIES keyframe step in index.html's
// .marquee-track animation. High enough that half the strip covers even
// wide screens, so the loop never runs out of logos before it repeats.
const MARQUEE_COPIES = 8;

/* utility — counter that animates when scrolled into view */
function useInView(opts = { rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    // If element already in viewport at mount, reveal immediately on next frame
    const r = ref.current.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.95 && r.bottom > 0) {
      const id = requestAnimationFrame(() => setSeen(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } });
    }, opts);
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Reveal({ as: As = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <As ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </As>
  );
}

function CountUp({ to, suffix = '', prefix = '', duration = 1400 }) {
  const [ref, seen] = useInView();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const k = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setV(Math.round(eased * to));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return <span ref={ref}>{prefix}{v}{suffix}</span>;
}

/* ─────────── NAV ─────────── */
function Nav({ accent }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    ['Inicio', '#hero'],
    ['Servicios', '#servicios'],
    ['Nosotros', '#nosotros'],
    ['Galería', '#trabajo'],
    ['Repuestos', '#herramientas'],
    ['Contacto', '#contacto'],
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? 'bg-bone/95 backdrop-blur border-b border-ink/10 shadow-sm' : 'bg-bone'}`}>
      <div className="absolute top-0 inset-x-0 h-[3px] hazard opacity-90"></div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center gap-6 lg:gap-8">
        <a href="#hero" className="flex items-center shrink-0 group">
          <img
            src={window.__resources && window.__resources["logo_sm"]}
            alt="Estibadores y Montacargas SM"
            className="h-11 lg:h-12 w-auto max-w-[220px] object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 ml-2">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="text-[13px] font-semibold uppercase tracking-wide text-ink/70 hover:text-ink transition-colors relative group">
              {t}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full transition-all" style={{ background: accent }}></span>
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a href="https://wa.me/573108247098" target="_blank" rel="noopener"
            className="inline-flex items-center gap-2 px-4 lg:px-5 h-10 font-semibold text-[12.5px] tracking-wide text-ink hover:translate-y-[-1px] transition-transform"
            style={{ background: accent, boxShadow: `0 8px 24px -10px ${accent}` }}>
            SOLICITAR COTIZACIÓN
            <Icon.Arrow className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(o => !o)} className="lg:hidden ml-1 w-10 h-10 flex flex-col items-center justify-center gap-1.5" aria-label="Menú">
            <span className={`block w-5 h-[2px] bg-ink transition ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-ink transition ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-ink transition ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-bone border-b border-ink/10 px-6 py-4 flex flex-col gap-3">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="text-[15px] font-semibold text-ink/80 uppercase tracking-wide">{t}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ─────────── HERO ─────────── */
function Hero({ accent, title, sub, showTicker = true }) {
  // split user-provided title into 3 lines if possible for the big stacked layout
  const words = (title || 'Soluciones para Montacargas y Estibadores').trim().split(/\s+/);
  let l1 = words.slice(0, 2).join(' ');
  let l2 = words.slice(2, 4).join(' ');
  let l3 = words.slice(4).join(' ');
  if (!l3) { l1 = words.slice(0, Math.ceil(words.length / 2)).join(' '); l2 = words.slice(Math.ceil(words.length / 2)).join(' '); l3 = ''; }
  return (
    <section id="hero" className="relative min-h-[100vh] pt-[72px] overflow-hidden bg-ink text-bone">
      {/* placeholder photo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 ph-stripes drift"></div>
        {/* faux forklift silhouette using simple geometry */}
        <svg className="absolute right-[-4%] bottom-[6%] w-[60%] max-w-[820px] opacity-[0.18]" viewBox="0 0 800 500" fill="none" stroke="#f5f4f0" strokeWidth="2">
          <path d="M120 360h360V180h120l60 100v80H120Z" />
          <path d="M540 180v180M540 220h120" />
          <path d="M120 200v160M120 200h40v160M180 200h40v160" strokeWidth="3" />
          <circle cx="220" cy="380" r="40" /><circle cx="220" cy="380" r="14" />
          <circle cx="440" cy="380" r="40" /><circle cx="440" cy="380" r="14" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
        {/* tiny placeholder label */}
        {/*<span className="absolute bottom-4 right-4 font-mono text-[10px] text-bone/40 tracking-[0.25em]">[ HERO · bodega + montacargas en operación ]</span>*/}
      </div>

      {/* hazard strip */}
      <div className="absolute left-0 right-0 top-[72px] h-[6px] hazard opacity-90"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-32 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <h1 className="font-head text-[clamp(56px,9vw,140px)] leading-[0.88] tracking-[0.005em] uppercase">
              {l1}<br />
              {l2}{l3 ? <br /> : null}
              {l3 && (
                <span className="relative inline-block">
                  <span className="relative z-10">{l3}</span>
                  <span className="absolute left-0 right-0 bottom-[8%] h-[14px]" style={{ background: accent, opacity: 0.85 }}></span>
                </span>
              )}
            </h1>
          </Reveal>

          <Reveal delay={160} className="mt-8 max-w-[640px] text-[22px] leading-relaxed text-white">
            {sub || 'Reparación especializada, mantenimiento y venta de repuestos para operaciones logísticas que no pueden detenerse. Equipos certificados, técnicos en sitio y respuesta en menos de 4 horas.'}
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap gap-3">
            <a href="#contacto"
              className="group inline-flex items-center gap-3 px-7 h-14 font-semibold tracking-wide text-ink"
              style={{ background: accent }}>
              COTIZAR AHORA
              <Icon.Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#servicios"
              className="group inline-flex items-center gap-3 px-7 h-14 font-semibold tracking-wide text-bone border border-bone/30 hover:bg-bone hover:text-ink transition-colors">
              NUESTROS SERVICIOS
            </a>
          </Reveal>

          {/* hero meta strip */}
          <Reveal delay={320} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-bone/10 max-w-[760px]">
            {[
              ['+14', 'AÑOS', 'operando'],
              ['4hr', 'RESPUESTA OPORTUNA', 'en sitio'],
              ['450+', 'EQUIPOS', 'atendidos']
            ].map(([n, k, s]) => (
              <div key={k} className="bg-ink/80 px-5 py-5 border-t-2" style={{ borderColor: accent }}>
                <div className="font-head text-4xl leading-none" style={{ color: accent }}>{n}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.2em] text-white">{k}</div>
                <div className="text-[12px] text-white">{s}</div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* featured repair image replacing spec card */}
        <div className="lg:col-span-5 lg:pt-6 hidden lg:block">
          <Reveal delay={400} className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={window.__resources && window.__resources["reparando_4"]}
                alt="Reparación de montacargas"
                className="w-full h-full object-contain hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-1 left-5 right-5">
                <div className="font-mono text-[10px] tracking-[0.3em] text-white uppercase mb-2">Servicio Técnico</div>
                <div className="font-head text-2xl text-white uppercase leading-tight">Mantenimiento Especializado</div>
              </div>
            </div>
            {/* hazard accent corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 hazard opacity-80 shadow-lg"></div>
          </Reveal>
        </div>
      </div>

      {/* clients marquee */}
      {showTicker && (
        <div className="relative border-t border-bone/10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-5 flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] shrink-0" style={{ color: accent }}>NUESTROS CLIENTES</span>
            <span className="h-px flex-1 bg-bone/15"></span>
          </div>
          <div className="relative py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-ink to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-ink to-transparent"></div>
            {/* Repeat the client list MARQUEE_COPIES times so half the strip
                (see the -100%/MARQUEE_COPIES keyframe in index.html) is always
                wider than the screen — otherwise the strip runs out of logos
                before the loop point and a gap appears before it repeats. */}
            <div className="flex marquee-track whitespace-nowrap">
              {[...Array(MARQUEE_COPIES)].map((_, i) => (
                <div key={i} className="flex items-center gap-3 pr-3">
                  {[
                    'Tecnoquímicas', 'Tecnofar', 'LaFrancol', 'Allers',
                    'Lito', 'Duana y Compañía', 'ASHE', 'Ladrillera La Samaritana'
                  ].map((name) => (
                    <span key={`${i}-${name}`} className="inline-flex items-center gap-3">
                      <span className="inline-flex items-center px-4 py-2 border border-bone/20 bg-bone/5 font-head text-xl tracking-wide text-bone uppercase">
                        {name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }}></span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
window.Nav = Nav;
window.Hero = Hero;
window.Reveal = Reveal;
window.CountUp = CountUp;
