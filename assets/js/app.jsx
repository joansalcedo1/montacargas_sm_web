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
