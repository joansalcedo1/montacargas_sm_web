// App entry — assembles the page + Tweaks panel

const {
  useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakText,
} = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#f7c940",
  "scheme": "industrial",
  "heroTitle": "Soluciones para Montacargas y Estibadores",
  "heroSub": "Reparacion, venta de repuestos y alquiler de montacargas a combustion, electricos, estibadores manuales y electricos",
  "showTicker": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ['#f7c940', '#1A283C', '#243982', '#ffffff'];
const { Insta, Wa } = window.Ico;

function FloatingSocialLinks() {
  const links = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/estibadores.y.montacargas_sm',
      Icon: Insta,
      className: 'rounded-full bg-[#E1306C] hover:bg-[#c9275d]',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/573108247098',
      Icon: Wa,
      className: 'rounded-full bg-[#25D366] hover:bg-[#1fb957]',
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
      {links.map(({ label, href, Icon, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${label}`}
          title={label}
          className={`grid h-12 w-12 place-items-center text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink ${className}`}
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Allow accent to drive a CSS variable for utility classes if needed
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.accent]);

  return (
    <div data-screen-label="01 Landing — Estibadores SM" className="min-h-screen">
      <Nav accent={t.accent}/>
      <Hero accent={t.accent} title={t.heroTitle} sub={t.heroSub}/>
      <Services accent={t.accent}/>
      <WhyUs accent={t.accent}/>
      <ToolsParts accent={t.accent}/>
      <WorkInAction accent={t.accent}/>
      <CTA accent={t.accent}/>
      <Footer accent={t.accent}/>
      <FloatingSocialLinks />

      <TweaksPanel title="Tweaks" subtitle="Estibadores SM · landing">
        <TweakSection title="Color de acento">
          <TweakColor
            label="Acento industrial"
            value={t.accent}
            options={ACCENT_OPTIONS}
            onChange={(v) => setTweak('accent', v)}
          />
        </TweakSection>
        <TweakSection title="Hero">
          <TweakText label="Título"     value={t.heroTitle} onChange={(v) => setTweak('heroTitle', v)} />
          <TweakText label="Subtítulo"  value={t.heroSub}   onChange={(v) => setTweak('heroSub',   v)} multiline />
        </TweakSection>
        <TweakSection title="Detalles">
          <TweakToggle label="Marquee de clientes" value={t.showTicker} onChange={(v) => setTweak('showTicker', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
