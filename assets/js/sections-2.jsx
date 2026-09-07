// More sections — Services, WhyUs, Gallery, CTA, Footer

const { useState: useState2 } = React;
const Icon = window.Ico;
const Reveal = window.Reveal;
const CountUp = window.CountUp;



/* ─────────── SERVICES ─────────── */

function Services({ accent }) {

  const items = [

    { i: 'Wrench', t: 'Reparación de montacargas', d: 'Atención a montacargas eléctricos y a combustión con tecnología de punta y técnicos certificados.', tag: '01' },

    { i: 'Box', t: 'Venta de repuestos', d: 'Contamos con un amplio stock de repuestos para todas las marcas', tag: '02' },

    { i: 'Forklift', t: 'Importadores ', d: 'Somos importadores directos de repuestos OEM para montacargas en todas las marcas, distribuidores de baterias de traccion y cargadores', tag: '03' },

    { i: 'Gear', t: 'Mantenimiento preventivo', d: 'Contamos con planes mensuales por horas. Implementamos una hoja de vida para cada equipo', tag: '04' },

    { i: 'Headset', t: 'Soporte técnico', d: 'Atención remota inmediata y desplazamiento garantizado en 4 horas.', tag: '05' },

    { i: 'Bolt', t: 'Estibadores eléctricos', d: 'Atendemos estibadores electricos y manuales, en todas las marcas incluyendo chinas.', tag: '06' },

  ];



  return (

    <section id="servicios" className="relative py-28 lg:py-36 bg-bone">

      <div className="absolute inset-0 blueprint opacity-50 pointer-events-none"></div>

      <div className="absolute top-0 inset-x-0 h-[6px] hazard opacity-80"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">

          <div className="lg:col-span-7">

            <div className="font-mono text-[11px] tracking-[0.3em] mb-4 text-deep">/01 — QUÉ HACEMOS</div>

            <h2 className="font-head text-[clamp(44px,6vw,84px)] leading-[0.92] uppercase text-ink">

              Servicios integrales<br />

              para mover tu <span className="underline-amber">operación</span>.
              

            </h2>
            <span className="font-mono text-[16px] text-ink">Aliados estratégicos en soluciones para equipos de manejo de materiales</span>
          </div>
          
        </div>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">

          {items.map((s, idx) => {

            const I = Icon[s.i];

            const tones = [

              { iconBg: accent, iconFg: '#1A283C', tag: accent },

              { iconBg: '#243982', iconFg: '#f6f4ef', tag: '#243982' },

              { iconBg: '#1A283C', iconFg: '#f7c940', tag: '#f7c940' },

            ];

            const tone = tones[idx % tones.length];

            return (

              <Reveal key={s.tag} delay={idx * 60}>

                <article className="lift group relative bg-white p-8 lg:p-10 h-full border border-ink/10 flex flex-col overflow-hidden">

                  <span className="absolute top-0 left-0 right-0 h-1" style={{ background: tone.tag }}></span>

                  <div className="flex items-start justify-between mb-8">

                    <div className="w-14 h-14 flex items-center justify-center transition-transform group-hover:scale-105" style={{ background: tone.iconBg, color: tone.iconFg }}>

                      <I className="w-7 h-7" />

                    </div>

                    <span className="font-mono text-[11px] font-semibold tracking-wider" style={{ color: tone.tag }}>{s.tag}</span>

                  </div>

                  <h3 className="font-head text-3xl uppercase leading-tight text-ink">{s.t}</h3>

                  <p className="mt-3 text-[14px] text-ink/65 leading-relaxed">{s.d}</p>

                  <a href={`https://wa.me/573108247098?text=Hola!$20Estoy%20interesado%20en%20${encodeURIComponent(s.t)}`} className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold transition-colors" style={{ color: '#243982' }}>

                    Solicitar <Icon.Arrow className="w-4 h-4 transition-transform group-hover:translate-x-1" />

                  </a>

                  <span className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: accent }}></span>

                </article>

              </Reveal>

            );

          })}

        </div>

      </div>

    </section>

  );

}



/* ─────────── WHY US ─────────── */

function WhyUs({ accent }) {

  const reasons = [

    'Técnicos certificados por marcas',

    'Repuestos OEM en stock',

    'Eficacia en nuestras labores',

    'Eficiencia en nuestras labores',

    'Transparencia en nuestras labores',

  ];

  return (

    <section id="nosotros" className="relative py-28 lg:py-36 bg-ink text-bone overflow-hidden">

      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-10" style={{ background: accent, filter: 'blur(120px)' }}></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-6">

            <div className="font-mono text-[11px] tracking-[0.3em] text-bone/60 mb-4">/ 02 — POR QUÉ ELEGIRNOS</div>

            <h2 className="font-head text-[clamp(44px,6vw,84px)] leading-[0.92] uppercase">

              Reparación experta.<br />

              <span style={{ color: accent }}>Máxima continuidad</span><br />

              en su operación.

            </h2>

          </div>

          <div className="lg:col-span-5 lg:col-start-8 text-[15px] text-bone/70 leading-relaxed">

            <p>Cuando su operación se detiene, el costo se mide en minutos perdidos. Nuestro modelo combina técnicos expertos, repuestos originales inmediatos y un compromiso total con la reparación de sus equipos.</p>

            <ul className="mt-6 space-y-2.5">

              {reasons.map((r, i) => (

                <li key={i} className="flex items-start gap-3 text-bone/85">

                  <span className="mt-2 inline-block w-3 h-[2px] shrink-0" style={{ background: accent }}></span>

                  <span className="text-[14.5px]">{r}</span>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </section>

  );

}



/* ─────────── GALLERY / EQUIPOS ─────────── */

function Gallery({ accent }) {

  const tabs = [

    { id: 'electric', label: 'Montacargas eléctricos' },

    { id: 'manual', label: 'Estibadores manuales' },

  ];

  const [active, setActive] = useState2('electric');



  const equipos = {

    electric: [

      { t: 'Montacarga atendido', img: 'assets/images/Montacargas2.png' },

      { t: 'Montacarga atendido', img: 'assets/images/montacargas3.jpg' },

      { t: 'Montacarga atendido', img: 'assets/images/montacargas4.jpg' },

      { t: 'Montacarga atendido', img: 'assets/images/montacargas5.jpg' },

    ],

    manual: [

      { t: 'PM-22 Tradicional', m: 'Crown · PTH50', spec: '2.2T · estiba doble', ph: 'estibador manual' },

      { t: 'PM-15 Tijera', m: 'Pramac · GS15', spec: '1.5T · 800mm', ph: 'estibador tijera' },

      { t: 'PE-20 Eléctrico', m: 'Linde · MT15', spec: '2.0T · litio', ph: 'estibador eléctrico' },

    ],

  };



  return (

    <section id="equipos" className="relative py-28 lg:py-36 bg-bone">

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">

          <div>

            <div className="font-mono text-[11px] tracking-[0.3em] text-deep mb-4">/ 05 — EQUIPOS &amp; GALERÍA</div>

            <h2 className="font-head text-[clamp(44px,6vw,84px)] leading-[0.92] uppercase text-ink">

              Equipos atendidos<br />con respaldo técnico.

            </h2>

          </div>

        </div>



        {/* tabs */}

        <div className="flex flex-wrap gap-2 mb-10 border-b border-ink/10">

          {tabs.map(tb => (

            <button key={tb.id}

              onClick={() => setActive(tb.id)}

              className={`relative px-4 lg:px-5 py-3 text-[13px] font-semibold tracking-wide uppercase transition-colors ${active === tb.id ? 'text-ink' : 'text-ink/45 hover:text-ink/80'}`}>

              {tb.label}

              {active === tb.id && <span className="absolute left-0 right-0 -bottom-px h-[3px]" style={{ background: accent }}></span>}

            </button>

          ))}

        </div>

        {/*
{marcas.map((m, i) => (

                <li key={i} className="flex items-start gap-3 text-bone/85">

                  <span className="mt-2 inline-block w-3 h-[2px] shrink-0" style={{ background: accent }}></span>

                  <span className="text-[14.5px]">{m}</span>

                </li>

              ))}
*/}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {equipos[active].map((e, idx) => (

            <Reveal key={e.t + active + idx} delay={idx * 70}>

              <article className="lift group relative bg-bone overflow-hidden border border-ink/10">

                <div className="relative aspect-[4/3] ph-stripes-light overflow-hidden">

                  {e.img ? (

                    <img src={e.img} alt={e.t} className="absolute inset-0 w-full h-full object-cover" />

                  ) : (

                    <>

                      {/* faux silhouette */}

                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300" fill="none" stroke="#243982" strokeWidth="1.5">

                        <path d="M60 220h220V120h60l30 60v40H60Z" />

                        <path d="M320 120v120M320 140h60" />

                        <path d="M60 130v90M60 130h20v90M90 130h20v90" />

                        <circle cx="120" cy="240" r="22" /><circle cx="240" cy="240" r="22" />

                      </svg>

                      <span className="absolute bottom-3 right-3 font-mono text-[10px] tracking-[0.2em] text-ink/40">[ {e.ph} ]</span>

                    </>

                  )}

                  <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-2.5 py-1 bg-ink text-bone font-mono text-[10px] tracking-[0.2em]">

                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }}></span>

                    DISPONIBLE

                  </span>

                </div>

                <div className="p-6">

                  {e.img ? (

                    <div className="flex items-center justify-between">

                      <h3 className="font-head text-3xl uppercase leading-tight text-ink">{e.t}</h3>

                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-deep">

                        Cotizar <Icon.Arrow className="w-3.5 h-3.5" />

                      </span>

                    </div>

                  ) : (

                    <>

                      <div className="flex items-center justify-between">

                        <span className="font-mono text-[10.5px] tracking-[0.25em] text-ink/45">{e.m}</span>

                        <span className="font-mono text-[10.5px] text-deep">#{(idx + 1).toString().padStart(2, '0')}</span>

                      </div>

                      <h3 className="mt-2 font-head text-3xl uppercase leading-tight text-ink">{e.t}</h3>

                      <div className="mt-3 flex items-center justify-between">

                        <span className="text-[13px] text-ink/70 font-medium">{e.spec}</span>

                        <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-deep">

                          Cotizar <Icon.Arrow className="w-3.5 h-3.5" />

                        </span>

                      </div>

                    </>

                  )}

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}



/* ─────────── CTA ─────────── */

function CTA({ accent }) {

  return (

    <section className="relative py-24 lg:py-32 bg-deep text-bone overflow-hidden">

      {/* hazard accent corners */}

      <div className="absolute top-0 left-0 right-0 h-[6px] hazard"></div>

      <div className="absolute bottom-0 left-0 right-0 h-[6px] hazard"></div>

      {/* diagonal accent */}

      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rotate-12 opacity-[0.06]" style={{ background: `repeating-linear-gradient(0deg, ${accent} 0 2px, transparent 2px 22px)` }}></div>



      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">

        <div className="lg:col-span-8">

          <div className="font-mono text-[11px] tracking-[0.3em] mb-5" style={{ color: accent }}>/ HABLEMOS DE TU OPERACIÓN</div>

          <h2 className="font-head text-[clamp(48px,7vw,108px)] leading-[0.9] uppercase">

            Optimiza tu<br />

            operación logística<br />

            <span style={{ color: accent }}>hoy.</span>

          </h2>

          <p className="mt-6 max-w-xl text-[16px] text-bone/75 leading-relaxed">

            Cuéntanos qué necesitas y nosotros te ofrecemos la mejor solución.

          </p>

        </div>



        <div className="lg:col-span-4 flex flex-col gap-3">

          <a href="https://wa.me/573108247098" target="_blank" rel="noopener"

            className="group flex items-center justify-between gap-3 px-6 h-16 font-semibold tracking-wide text-ink"

            style={{ background: accent }}>

            <span className="flex items-center gap-3">

              <Icon.Wa className="w-6 h-6" />

              HABLAR POR WHATSAPP

            </span>

            <Icon.Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />

          </a>

          <a href="mailto:comercial@sm-montacargas.co?Subject=Interesado%20en%20sus%20servicios" className="group flex items-center justify-between gap-3 px-6 h-16 font-semibold tracking-wide border border-bone/30 hover:bg-bone hover:text-ink transition-colors">

            <span className="flex items-center gap-3">

              <Icon.Mail className="w-5 h-5" />

              Contactar  por correo

            </span>

            <Icon.Arrow className="w-5 h-5 transition-transform group-hover:translate-x-1" />

          </a>

          {/*
          <div className="mt-2 flex items-center gap-3 text-bone/55 text-[12.5px]">

            <Icon.Clock className="w-4 h-4" />

            Respuesta en menos de 2 horas hábiles · L–S 7am · 7pm

          </div>
*/}
        </div>

      </div>

    </section>

  );

}



/* ─────────── FOOTER ─────────── */

function Footer({ accent }) {

  return (

    <footer id="contacto" className="relative bg-ink text-bone pt-24 pb-10">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">

            <a href="#hero" className="inline-block">

              <img
                src={window.__resources && window.__resources["logo_sm_white"]}
                alt="Estibadores y Montacargas SM"
                className="h-14 w-auto object-contain"
              />

            </a>

            <p className="mt-6 text-[14px] text-bone/65 leading-relaxed max-w-sm">

              Aliados estratégicos en soluciones para equipos de manejo de materiales.

            </p>



            <div className="mt-6 flex gap-2">

              {[

                { I: Icon.Insta, href: 'https://www.instagram.com/estibadores.y.montacargas_sm', l: 'Instagram' },

              ].map((s, i) => (

                <a key={i} href={s.href} aria-label={s.l} className="w-10 h-10 grid place-items-center border border-bone/15 hover:border-bone/60 hover:text-amber transition-colors">

                  <s.I className="w-4 h-4" />

                </a>

              ))}

            </div>

          </div>



          <div className="lg:col-span-3">

            <div className="font-mono text-[10.5px] tracking-[0.25em] text-bone/45 mb-4">CONTACTO</div>

            <ul className="space-y-3 text-[14px]">

              <li className="flex items-start gap-3"><Icon.Wa className="w-4 h-4 mt-0.5 text-amber shrink-0" /><span>+57 310 8247098</span></li>

              <li className="flex items-start gap-3"><Icon.Wa className="w-4 h-4 mt-0.5 text-amber shrink-0" /><span>+57 310 4054938</span></li>

              <li className="flex items-start gap-3"><Icon.Location className="w-4 h-4 mt-0.5 text-amber shrink-0" /><span>Cali, Colombia</span></li>


              <li className="flex items-start gap-3"><Icon.Mail className="w-4 h-4 mt-0.5 text-amber shrink-0" /><span><a href="mailto:ventas@estibadoresymontacargassm.com">ventas@estibadoresymontacargassm.com</a><br /><span className="text-bone/50 text-[12px]">Cotizaciones &amp; soporte</span></span></li>

              <li className="flex items-start gap-3"><Icon.Clock className="w-4 h-4 mt-0.5 text-amber shrink-0" />

                <span>

                  Lun – Vie · 8:00 a. m. – 5:30 p. m.<br />

                  Sábado · 8:00 a. m. – 12:00 m.

                </span>

              </li>

            </ul>

          </div>



          <div className="lg:col-span-2">

            <div className="font-mono text-[10.5px] tracking-[0.25em] text-bone/45 mb-4">NAVEGAR</div>

            <ul className="space-y-2 text-[14px]">

              {[

                ['Inicio', '#hero'],

                ['Servicios', '#servicios'],

                ['Nosotros', '#nosotros'],

                ['Equipos', '#equipos'],

                ['Cotizar', '#contacto'],

              ].map(([t, h]) => (

                <li key={h}><a href={h} className="text-bone/70 hover:text-amber transition-colors">{t}</a></li>

              ))}

            </ul>

          </div>

        </div>



        <div className="mt-16 pt-6 border-t border-bone/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-bone/40 tracking-wider">

          <span>© 2026 ESTIBADORES Y MONTACARGAS SM</span>

          <span>POLÍTICA DE PRIVACIDAD · TÉRMINOS · TRATAMIENTO DE DATOS</span>

        </div>

      </div>

    </footer>

  );

}



Object.assign(window, { Services, WhyUs, Gallery, CTA, Footer });



/* ─────────── WORK IN ACTION ─────────── */

function WorkInAction({ accent }) {

  const photos = [
    { id: 'reparando_5', src: 'editadas - personas/reparando_5_resultado_resultado.webp', alt: 'Registro de mantenimiento: reparando_5' },
    { id: 'reparando_8', src: 'editadas - personas/reparando_8_resultado_resultado.webp', alt: 'Registro de mantenimiento: reparando_8' },
    { id: 'reparando_1', src: 'editadas - personas/reparando_1_resultado_resultado.webp', alt: 'Registro de mantenimiento: reparando_1' },
    { id: 'reparando_2', src: 'editadas - personas/reparando_2_resultado_resultado.webp', alt: 'Registro de mantenimiento: reparando_2' },
    { id: 'reparando_3', src: 'editadas - personas/reparando_3_resultado_resultado.webp', alt: 'Registro de mantenimiento: reparando_3' }
  ];

  const marcas = [
    'Hyster',
    'Caterpillar',
    'TCM',
    'Komatsu',
    'Yale',
    'Nissan',
    'Clark',
    'Toyota',
    'Todas las marcas chinas'
  ];


  return (

    <section id="trabajo" className="relative py-28 lg:py-36 bg-ink text-bone overflow-hidden">

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="mb-16 grid grid-cols-2">
          <div className="">

            <div className="font-mono text-[11px] tracking-[0.3em] text-withe mb-4">/ 04 — NUESTRO EQUIPO</div>

            <h2 className="font-head text-[clamp(44px,6vw,84px)] leading-[0.92] uppercase">

              Nuestro equipo <span style={{ color: accent }}>en acción</span>.

            </h2>
          </div>
          <div className="">

            <p className="max-w-2xl text-withe leading-relaxed">Personal técnico altamente calificado y equipado con herramientas especializadas para garantizar la máxima confianza en la reparación de sus equipos.</p>
          </div>
        </div>



        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

          {photos.map((p, i) => (

            <Reveal key={i} delay={i * 50}>

              <div className="group relative aspect-square overflow-hidden bg-bone/5 border border-bone/10">

                <img

                  src={(window.__resources && window.__resources[p.id]) || p.src}

                  decoding="async"

                  alt={p.alt}

                  className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"

                  loading="lazy"

                />

                <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">

                  <p className="text-[12px] font-mono tracking-wider uppercase text-bone/90">{p.alt}</p>

                </div>

              </div>

            </Reveal>

          ))}

        </div>



        <div className="mt-20 pt-10 border-t border-bone/10">

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="font-mono text-[11px] tracking-[0.3em] text-bone/50 uppercase shrink-0">Marcas que atendemos</span>
            <span className="h-px flex-1 bg-bone/15"></span>
          </div>

          <div className="flex flex-wrap gap-3">
            {marcas.map((marca, i) => (
              <Reveal key={marca} delay={i * 40}>
                <span className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-bone/20 bg-bone/5 hover:bg-bone/10 transition-colors font-head text-lg tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }}></span>
                  {marca}
                </span>
              </Reveal>
            ))}
          </div>

        </div>

      </div>

    </section>

  );

}



/* ─────────── TOOLS & PARTS ─────────── */

// Each category shows every photo from window.__resources (set in index.html)
// whose id starts with one of its "prefixes". To add a photo to a category,
// just add it to window.__resources with a matching id — e.g. "parts_12"
// shows up automatically under "Repuestos Originales", no code change needed.
const TOOLS_CATEGORIES = [
  { id: 'diag', t: 'Herramientas de Diagnóstico', d: 'Escáneres multimarca y software de programación para sistemas electrónicos.', prefixes: ['diag_', 'foto_recurso_'] },
  { id: 'parts', t: 'Repuestos Originales', d: 'Stock permanente de kits de sellos, mangueras, filtros y componentes críticos.', prefixes: ['parts_'] },
  { id: 'batt', t: 'Baterías y Cargadores', d: 'Soluciones de energía industrial: baterías de tracción y cargadores de alta eficiencia.', prefixes: ['batt_'] },
  { id: 'tires', t: 'Llantas Industriales', d: 'Venta e instalación de llantas sólidas y neumáticas de alta resistencia.', prefixes: ['tires_'] },
];

// A handful of old tire photos don't follow the "tires_..." naming — list
// their exact ids here so they still show up under "Llantas Industriales".
const TIRES_LEGACY_IDS = ['27052026-DSC04468', '27052026-DSC04499'];

function belongsToCategory(resourceId, category) {
  if (category.id === 'tires' && TIRES_LEGACY_IDS.includes(resourceId)) return true;
  const idLower = resourceId.toLowerCase();
  return category.prefixes.some(prefix => idLower.startsWith(prefix));
}

// Grabs every photo of a category and sorts it by the number in its id,
// so "parts_2" comes before "parts_10" (plain alphabetical sort wouldn't).
function getCategoryPhotos(category) {
  const allResources = window.__resources || {};

  const photos = Object.keys(allResources)
    .filter(id => belongsToCategory(id, category))
    .map(id => ({ id, path: allResources[id] }));

  return photos.sort((a, b) => {
    const aNumber = parseInt(a.id.match(/\d+/), 10);
    const bNumber = parseInt(b.id.match(/\d+/), 10);
    if (Number.isNaN(aNumber) || Number.isNaN(bNumber)) return a.id.localeCompare(b.id);
    return aNumber - bNumber;
  });
}

const PHOTOS_PER_PAGE = 4;

function ToolsParts({ accent }) {

  const [active, setActive] = useState2('diag');
  const [page, setPage] = useState2(0);
  const [selectedImage, setSelectedImage] = useState2(null);

  const activeCategory = TOOLS_CATEGORIES.find(c => c.id === active);
  const photos = getCategoryPhotos(activeCategory);

  const pageCount = Math.max(1, Math.ceil(photos.length / PHOTOS_PER_PAGE));
  const visiblePhotos = photos.slice(page * PHOTOS_PER_PAGE, page * PHOTOS_PER_PAGE + PHOTOS_PER_PAGE);
  const photoCount = visiblePhotos.length;
  const gridColsClass =
    photoCount <= 1 ? 'grid-cols-1' :
      photoCount === 2 ? 'grid-cols-2' :
        photoCount === 3 ? 'grid-cols-2 sm:grid-cols-3' :
          'grid-cols-2';

  function selectCategory(categoryId) {
    setActive(categoryId);
    setPage(0);
  }

  return (

    <section id="herramientas" className="relative py-28 lg:py-36 bg-bone overflow-hidden">

      <div className="absolute inset-0 blueprint opacity-30 pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div>

            <div className="font-mono text-[11px] tracking-[0.3em] text-deep mb-4">/ 03 — SOPORTE TÉCNICO</div>

            <h2 className="font-head text-[clamp(44px,6vw,84px)] leading-[0.92] uppercase text-ink">

              Repuestos y<br />

              <span className="underline-amber">Herramientas</span>.

            </h2>

            <p className="mt-8 text-[15px] text-ink/70 leading-relaxed">

              Seleccione una categoría para ver nuestras soluciones. Suministramos repuestos originales y herramientas de precisión para mantener su garantía.

            </p>



            <div className="mt-12 space-y-4">

              {TOOLS_CATEGORIES.map((category, i) => (

                <Reveal key={category.id} delay={i * 100}>

                  <button

                    onClick={() => selectCategory(category.id)}

                    className={`w-full text-left flex gap-6 p-4 transition-all border ${active === category.id ? 'bg-bone shadow-xl border-ink/10' : 'border-transparent hover:bg-ink/5'}`}

                  >

                    <div className={`w-12 h-12 shrink-0 flex items-center justify-center transition-colors ${active === category.id ? 'bg-amber text-ink' : 'bg-deep text-bone'}`}>

                      <span className="font-head text-2xl">{i + 1}</span>

                    </div>

                    <div>

                      <h3 className="font-head text-2xl uppercase text-ink">{category.t}</h3>

                      <p className={`mt-1 text-[14px] leading-snug transition-opacity ${active === category.id ? 'text-ink/80' : 'text-ink/60'}`}>{category.d}</p>

                    </div>

                  </button>

                </Reveal>

              ))}

            </div>

          </div>



          <div className="lg:sticky lg:top-32">

            <div className={`grid gap-4 ${gridColsClass}`}>

              {visiblePhotos.map((photo, i) => (

                <Reveal key={`${active}-${photo.id}`} delay={(i + 1) * 50}>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(photo.path)}
                    className="group relative w-full aspect-[3/4] overflow-hidden bg-bone border border-ink/10 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500"
                  >

                    <img

                      src={photo.path}

                      decoding="async"

                      alt={active}

                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"

                      loading="lazy"

                    />

                    <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                      <Icon.Arrow className="w-8 h-8 text-bone" />

                    </div>

                  </button>

                </Reveal>

              ))}

              {photoCount === 0 && (
                <div className="col-span-full aspect-[3/4] border border-ink/10 bg-bone flex flex-col items-center justify-center text-center">
                  <Icon.Box className="w-10 h-10 text-deep/30 mb-4" />
                  <div className="font-mono text-[10px] tracking-widest text-ink/40 uppercase">Sin fotos en esta categoría</div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="inline-flex items-center gap-2">
                <button type="button" disabled={page <= 0} onClick={() => setPage(Math.max(page - 1, 0))} className={`px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition border ${page <= 0 ? 'border-ink/10 bg-ink/5 text-ink/40 cursor-not-allowed' : 'border-ink/20 bg-bone text-ink hover:border-ink'}`}>
                  Anterior
                </button>
                <button type="button" disabled={page >= pageCount - 1} onClick={() => setPage(Math.min(page + 1, pageCount - 1))} className={`px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition border ${page >= pageCount - 1 ? 'border-ink/10 bg-ink/5 text-ink/40 cursor-not-allowed' : 'border-ink/20 bg-bone text-ink hover:border-ink'}`}>
                  Siguiente
                </button>
              </div>
              <div className="font-mono text-[11px] tracking-widest uppercase text-ink/70">
                Página {page + 1} de {pageCount}
              </div>
            </div>

            {selectedImage && (
              <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/85 px-4 py-6" onClick={() => setSelectedImage(null)}>
                <div className="relative w-full max-w-5xl rounded-none border border-bone/20 bg-bone p-3 shadow-2xl" onClick={e => e.stopPropagation()}>
                  <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center border border-ink/10 bg-bone text-ink hover:bg-ink hover:text-bone transition-colors">
                    ✕
                  </button>
                  <img src={selectedImage} alt="Vista ampliada" className="max-h-[80vh] w-full object-contain" />
                </div>
              </div>
            )}

            <div className="mt-6 p-6 bg-ink text-bone font-mono text-[11px] tracking-widest uppercase flex items-center justify-between">

              <span>Categoría: {activeCategory.t}</span>

              <span style={{ color: accent }}>● ACTIVE</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}



Object.assign(window, { WorkInAction, ToolsParts });


