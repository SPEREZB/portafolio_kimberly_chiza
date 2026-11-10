import { useEffect, useRef, useState } from 'react';
import paisasImg from './assets/paisas.png';
import municipioImg from './assets/municipio.jpg';
import casaJudicialImg from './assets/casa_judicial.jpg';
import notionImg from './assets/notion.png';
import officeImg from './assets/office.jpg';
import perseoImg from './assets/perseo.jpg';
import cfacilImg from './assets/cfacil.jpg';
import canvaImg from './assets/canva.jpg';
import powerbiImg from './assets/powerbi.png';
import fullhogarImg from './assets/fullhogar.jpg';
import hubspotImg from './assets/hubspot.png';
import certificadoImg from './assets/CERTIFICADO MDT CONTABILIDAD, TRIBUTACIÓN Y LABORAL.pdf';
import uteqImg from './assets/uteq.png';
import portadaImg from './assets/portada.jpg';
import meImg from './assets/me.jpeg';
import bancoPacificoImg from './assets/bancopacifico.jpg';

function AnimatedCounter({ target, prefix = '' }: { target: number; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return <span ref={ref}>{prefix}{count}</span>;
}

function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const [selectedImage, setSelectedImage] = useState<number | null>(null); // galeria desactivada por ahora
  const [showScrollTop, setShowScrollTop] = useState(false);

  const technologies = [
    {
      name: 'Microsoft Office',
      description: 'Manejo avanzado de herramientas de Office para análisis de datos, documentación y generación de reportes.',
      details: 'Excel avanzado para análisis financiero, Word para documentación formal, PowerPoint para presentaciones profesionales.',
      companies: ['Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Spotify']
    },
    {
      name: 'Perseo',
      description: 'Sistema de información financiera para análisis de indicadores económicos y gestión de datos.',
      details: 'Software de contabilidad y finanzas para gestión de indicadores macroeconómicos y control financiero.',
      companies: ['Gobiernos locales', 'Instituciones financieras', 'Bancos', 'Empresas de contabilidad']
    },
    {
      name: 'Notion',
      description: 'Organización de proyectos, documentación y gestión de tareas para optimizar el trabajo.',
      details: 'Gestión de proyectos, bases de datos, documentación colaborativa y seguimiento de tareas.',
      companies: ['OpenAI', 'Figma', 'Nvidia', 'Toyota', 'L\'Oréal', 'Volvo', 'Faire']
    },
    {
      name: 'Power BI',
      description: 'Herramienta de inteligencia de negocios para visualización de datos y análisis interactivo.',
      details: 'Dashboards interactivos, análisis de datos de ventas, reportes financieros y KPIs.',
      companies: ['Microsoft', 'Adobe', 'HP', 'Dell', 'Toyota', 'Pfizer', 'Coca-Cola']
    },
    {
      name: 'Canva',
      description: 'Diseño gráfico para creación de presentaciones, infografías y materiales visuales profesionales.',
      details: 'Diseño de presentaciones, infografías, materiales de marketing y contenido visual.',
      companies: ['Expedia', 'Grove', 'Airbnb', 'Salesforce', 'Aramark', 'Volvo', 'Faire']
    },
    {
      name: 'HubSpot',
      description: 'Plataforma de CRM para gestión de relaciones con clientes, marketing automatizado y análisis de datos.',
      details: 'Gestión de clientes, marketing automatizado, análisis de datos y seguimiento de leads.',
      companies: ['Casio', 'Salud SA', 'FC Barcelona', 'Nubox', 'Copa Airlines']
    }
  ];

  // Galeria de evidencia (desactivada por ahora): para reactivarla,
  // descomenta este array, el estado selectedImage, la seccion y el lightbox.
  // const evidencias = [
  //   { src: bancoPacificoImg, titulo: 'Banco del Pacífico', descripcion: 'Cajera bancaria' },
  //   { src: paisasImg, titulo: 'Los Paisas', descripcion: 'Asistente administrativa y facturadora' },
  //   { src: fullhogarImg, titulo: 'Fullhogar', descripcion: 'Secretaria' },
  //   { src: cfacilImg, titulo: 'Credifacil', descripcion: 'Asesora de venta' },
  //   { src: municipioImg, titulo: 'Municipio de Quevedo', descripcion: 'Practicante' },
  //   { src: casaJudicialImg, titulo: 'Casa Judicial', descripcion: 'Practicante' },
  // ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section, .fade-in-left, .fade-in-right, .fade-in-up');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <nav className="bg-gradient-to-r from-accent to-accent-light sticky top-0 z-50 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-white">Kimberly Chiza</div>
          <ul className="hidden md:flex gap-4 md:gap-6 m-0 p-0 list-none">
            <li><a href="#inicio" className="text-white text-sm md:text-base font-medium hover:text-white/80 transition-colors no-underline flex items-center gap-2"><i className="fas fa-home text-xs md:text-sm"></i> <span className="hidden sm:inline">Inicio</span></a></li>
            <li className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'portfolio' ? null : 'portfolio')}
                className="text-white text-sm md:text-base font-medium hover:text-white/80 transition-colors no-underline flex items-center gap-2 bg-transparent border-0 cursor-pointer"
              >
                <i className="fas fa-folder text-xs md:text-sm"></i> <span className="hidden sm:inline">Portfolio</span> <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'portfolio' && (
                <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] list-none m-0 p-2">
                  <li><a href="#sobre-mi" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-user text-xs"></i> Sobre Mí</a></li>
                  <li><a href="#experiencia" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-briefcase text-xs"></i> Experiencia</a></li>
                  <li><a href="#negocio" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-store text-xs"></i> Negocio Familiar</a></li>
                  <li><a href="#empresas" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-building text-xs"></i> Empresas</a></li>
                  {/* <li><a href="#galeria" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-images text-xs"></i> Galería</a></li> */}
                  <li><a href="#contacto" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-envelope text-xs"></i> Contacto</a></li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'competencias' ? null : 'competencias')}
                className="text-white text-sm md:text-base font-medium hover:text-white/80 transition-colors no-underline flex items-center gap-2 bg-transparent border-0 cursor-pointer"
              >
                <i className="fas fa-cogs text-xs md:text-sm"></i> <span className="hidden sm:inline">Competencias</span> <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'competencias' && (
                <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] list-none m-0 p-2">
                  <li><a href="#tecnologias" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-tools text-xs"></i> Tecnologías utilizadas</a></li>
                  <li><a href="#funciones" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-tasks text-xs"></i> Funciones realizadas</a></li>
                  <li><a href="#servicios" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-cogs text-xs"></i> Servicios</a></li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'educacion' ? null : 'educacion')}
                className="text-white text-sm md:text-base font-medium hover:text-white/80 transition-colors no-underline flex items-center gap-2 bg-transparent border-0 cursor-pointer"
              >
                <i className="fas fa-graduation-cap text-xs md:text-sm"></i> <span className="hidden sm:inline">Educación</span> <i className="fas fa-chevron-down text-xs"></i>
              </button>
              {activeDropdown === 'educacion' && (
                <ul className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] list-none m-0 p-2">
                  <li><a href="#educacion" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-graduation-cap text-xs"></i> Formación</a></li>
                  <li><a href="#educacion" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-file-alt text-xs"></i> Artículos Científicos</a></li>
                  <li><a href="#educacion" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-certificate text-xs"></i> Certificados</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>

      <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center py-12 px-4 md:px-8 fade-in-section">
        <div className="absolute inset-0">
          <img src={portadaImg} alt="Portada" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/70 to-slate-100/70"></div>
        </div>
        <div className="max-w-6xl w-full px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-accent tracking-tight drop-shadow-lg">Hola, soy Kimberly Chiza</h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 text-gray-700 drop-shadow-md">Economista</h2>
              <p className="text-lg md:text-xl mb-4 text-gray-800 leading-relaxed font-semibold drop-shadow-md">
                Especialista en análisis económico, consultoría financiera y planificación estratégica.
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-800 leading-relaxed font-semibold drop-shadow-md">
                Este portafolio presenta mi experiencia profesional en diversas empresas, las funciones que he desempeñado y el dominio de herramientas tecnológicas aplicadas en mi trayectoria laboral.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contacto" className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline text-sm md:text-base">Contáctame</a>
                <a href="#servicios" className="px-8 md:px-10 py-3 md:py-4 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline text-sm md:text-base">Mis Servicios</a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-accent to-accent-light p-1.5 shadow-xl shadow-accent/30 animate-glow-pulse">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img src={meImg} alt="Kimberly Chiza" className="w-full h-full object-cover object-top scale-[1.1] origin-[50%_28%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="sobre-mi" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-user text-accent"></i> Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6 text-justify">
              Soy economista con amplia experiencia en análisis de mercados, evaluación de proyectos 
              y consultoría económica. Me dedico a proporcionar soluciones estratégicas basadas en 
              datos sólidos para empresas y particulares.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8 text-justify">
              Mi enfoque combina rigurosidad analítica con una visión práctica de los negocios, 
              ayudando a mis clientes a tomar decisiones informadas que maximizan su potencial económico.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl text-primary mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-chart-line"></i>
                  Análisis Financiero
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-calculator"></i>
                  Contabilidad y Tributación
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-file-excel"></i>
                  Excel Avanzado
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-chart-bar"></i>
                  Power BI
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-boxes"></i>
                  Gestión de Inventarios
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-chess"></i>
                  Planificación Estratégica
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-shield-alt"></i>
                  Análisis de Riesgo
                </span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium flex items-center gap-2">
                  <i className="fas fa-folder-open"></i>
                  Gestión Documental
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="trayectoria" className="py-16 px-4 md:px-8 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-chart-line text-accent"></i> Mi Trayectoria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border-2 border-accent text-center group fade-in-up">
              <i className="fas fa-briefcase text-4xl text-accent mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"><AnimatedCounter target={1} prefix="+" /></h3>
              <p className="text-primary font-semibold">Año de experiencia laboral</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border-2 border-accent text-center group fade-in-up fade-in-up-delay-1">
              <i className="fas fa-building text-4xl text-accent mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"><AnimatedCounter target={5} prefix="+" /></h3>
              <p className="text-primary font-semibold">Empresas en mi trayectoria</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border-2 border-accent text-center group fade-in-up fade-in-up-delay-2">
              <i className="fas fa-tools text-4xl text-accent mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"><AnimatedCounter target={6} prefix="+" /></h3>
              <p className="text-primary font-semibold">Herramientas tecnológicas dominadas</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border-2 border-accent text-center group fade-in-up fade-in-up-delay-3">
              <i className="fas fa-landmark text-4xl text-accent mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent"><AnimatedCounter target={2} /></h3>
              <p className="text-primary font-semibold">Prácticas en instituciones públicas</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="experiencia" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-briefcase text-accent"></i> Experiencia</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-light to-accent transform md:-translate-x-1/2"></div>
              
              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://www.bancodelpacifico.com/personas/inicio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] md:scale-[1.03] bg-gradient-to-br from-accent/10 via-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/40 hover:border-accent group no-underline block animate-glow-pulse current-job"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="current-job-shine"></div>
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-dark via-accent to-accent-light text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-lg shadow-accent/40 whitespace-nowrap z-20">
                    ★ Empleo actual ★
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Entidad bancaria
                      </span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-university text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent shadow-lg shadow-accent/40 shrink-0">
                      <img src={bancoPacificoImg} alt="Banco del Pacífico" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Banco del Pacífico</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-cash-register text-xs"></i>
                        Cajera Bancaria
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Atención integral al cliente, procesamiento de depósitos, retiros y pagos, custodia y arqueo de efectivo, y promoción de productos financieros.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: +80 clientes atendidos al día y cuadre de caja sin diferencias</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://lospaisas.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Materias primas alimenticias</span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-star text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={paisasImg} alt="Los Paisas" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Los Paisas</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-user-tie text-xs"></i>
                        Asistente administrativa y facturadora
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Facturación, producción de productos, control de inventario, depositos, arqueo y cuadre de caja, roles de pago, atención a clientes, provedores y colaboradores.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: +60 facturas emitidas al día y pagos puntuales a +15 proveedores</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://fullhogar.com.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Tienda del hogar</span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-briefcase text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={fullhogarImg} alt="Fullhogar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Fullhogar</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-user-tie text-xs"></i>
                        Secretaria
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Agendamiento de citas, ordenes de compre, control de inventarios y gestión de redes sociales.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: gestión de +25 citas diarias e inventario de +400 productos</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://www.cooperativacredifacil.fin.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Cooperativa financiera</span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-landmark text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={cfacilImg} alt="Credifacil" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Credifacil</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-user-tie text-xs"></i>
                        Asesora de venta
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Evaluación de solicitudes crediticias, análisis de riesgo financiero y gestión de cartera de clientes.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: evaluación de +20 solicitudes crediticias por semana</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://quevedo.gob.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Entidad gubernamental</span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-university text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={municipioImg} alt="Municipio" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Municipio</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-user-graduate text-xs"></i>
                        Practicante
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Creación de solicitudes, atención al publico y gestión documental fisicas y virtuales.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: digitalización y gestión de +300 documentos físicos y virtuales</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="http://acotecnic.com/portfolio/casa-judicial-quevedo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Entidad judicial</span>
                      <i className="fas fa-building text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-balance-scale text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={casaJudicialImg} alt="Casa Judicial" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Casa Judicial</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-user-graduate text-xs"></i>
                        Practicante
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Ingreso de casos judiciales, registro de anotaciones en reuniones, agendamiento de citas y atención al publico.</p>
                  <div className="mt-3 flex items-center gap-2 bg-accent/10 rounded-lg px-3 py-2">
                    <i className="fas fa-trophy text-accent text-xs"></i>
                    <p className="text-accent text-xs font-semibold">Logro: registro de +50 casos judiciales y agendamiento de audiencias</p>
                  </div>
                </a>
              </div>

              <div className="relative pl-20 md:pl-0">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <a
                  href="https://www.uteq.edu.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:mx-auto md:w-[calc(50%-2rem)] bg-gradient-to-br from-white to-accent/5 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all ml-4 relative border-2 border-accent/20 hover:border-accent group no-underline block"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Universidad estatal</span>
                      <i className="fas fa-graduation-cap text-accent text-sm"></i>
                    </div>
                    <i className="fas fa-graduation-cap text-accent/30 text-lg group-hover:text-accent transition-colors"></i>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/30 shadow-md shrink-0">
                      <img src={uteqImg} alt="UTEQ" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl text-primary mb-1 font-bold">Universidad Técnica Estatal de Quevedo</h3>
                      <p className="text-accent font-semibold text-sm flex items-center gap-2">
                        <i className="fas fa-graduation-cap text-xs"></i>
                        Economía
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Formación académica en economía con enfoque en análisis económico, finanzas y planificación estratégica.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="negocio" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-primary flex items-center justify-center gap-3"><i className="fas fa-store text-accent"></i> Negocio Familiar</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Además de mi experiencia en empresas, apoyo en la gestión del negocio de mi familia.</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 via-white to-accent/5 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all border-2 border-accent/40 hover:border-accent relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-2xl"></div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">Comercio familiar</span>
                <i className="fas fa-store text-accent text-sm"></i>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/40 shrink-0 group-hover:scale-110 transition-transform">
                  <i className="fas fa-store text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl text-primary mb-1 font-bold">Comerciante</h3>
                  <p className="text-accent font-semibold text-sm flex items-center gap-2">
                    <i className="fas fa-user-tie text-xs"></i>
                    Apoyo en gestión y administración
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm border-t border-gray-100 pt-3">Gestión integral del negocio familiar: venta de productos, cobranzas a clientes, manejo y arqueo de caja, control de inventario, realización de pedidos y atención personalizada.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">💵 Cobranzas</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">🛒 Ventas</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">📦 Inventario</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">🧾 Facturación</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">🤝 Atención al cliente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="empresas" className="py-16 px-4 md:px-8 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-building text-accent"></i> Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://www.bancodelpacifico.com/personas/inicio" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={bancoPacificoImg} alt="Banco del Pacífico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Banco del Pacífico</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Banco ecuatoriano que ofrece servicios financieros personales y empresariales.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Cajera bancaria. Atención integral al cliente, procesamiento de depósitos, retiros y pagos, custodia y arqueo de efectivo.</p>
                </div>
              </div>
            </a>
            <a href="https://lospaisas.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={paisasImg} alt="Los Paisas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Los Paisas</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Venta de insumos para pastelería, maquinas, ingredientes y productos para la industria alimentaria.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Asistente administrativa y facturadora. Facturación, producción de productos, control de inventario, depósitos, arqueo y cuadre de caja, roles de pago, atención a clientes, proveedores y colaboradores.</p>
                </div>
              </div>
            </a>
            <a href="https://fullhogar.com.co/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-1 border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={fullhogarImg} alt="Fullhogar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Fullhogar</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Venta de electrodomésticos y artículos para el hogar.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Secretaria. Agendamiento de citas, órdenes de compra, control de inventarios y gestión de redes sociales.</p>
                </div>
              </div>
            </a>
            <a href="https://www.cooperativacredifacil.fin.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-2 border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={cfacilImg} alt="Credifacil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Credifacil</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Cooperativa de ahorro y crédito que ofrece servicios financieros a sus asociados.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Asesora de venta. Evaluación de solicitudes crediticias, análisis de riesgo financiero y gestión de cartera de clientes.</p>
                </div>
              </div>
            </a>
            <a href="https://quevedo.gob.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-3 border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={municipioImg} alt="Municipio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Municipio de Quevedo</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Entidad gubernamental del estado encargada de la administración local y servicios públicos.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Practicante. Creación de solicitudes, atención al público y gestión documental física y virtual.</p>
                </div>
              </div>
            </a>
            <a href="http://acotecnic.com/portfolio/casa-judicial-quevedo/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-4 border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={casaJudicialImg} alt="Casa Judicial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Casa Judicial</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <div className="mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Empresa</span>
                  <p className="text-gray-600 text-sm">Entidad del sistema de justicia que facilita el acceso a servicios legales y mediación.</p>
                </div>
                <div>
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-2">Mi rol</span>
                  <p className="text-gray-500 text-sm">Practicante. Ingreso de casos judiciales, registro de anotaciones en reuniones, agendamiento de citas y atención al público.</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      {/* SECCION GALERIA DESACTIVADA TEMPORALMENTE - descomenta para reactivar
      <section id="galeria" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-primary flex items-center justify-center gap-3"><i className="fas fa-camera text-accent"></i> Galería</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Evidencia fotográfica de mi trabajo y experiencia profesional.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidencias.map((foto, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group border-2 border-accent/20 hover:border-accent cursor-pointer p-0 fade-in-up ${index % 3 === 1 ? 'fade-in-up-delay-1' : index % 3 === 2 ? 'fade-in-up-delay-2' : ''}`}
              >
                <img src={foto.src} alt={foto.titulo} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <i className="fas fa-search-plus text-accent text-sm"></i>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-bold text-lg drop-shadow-md">{foto.titulo}</h3>
                  <p className="text-white/80 text-sm">{foto.descripcion}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>
      */}

      <section id="tecnologias" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-tools text-accent"></i> Herramientas y Tecnologías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
                <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                  <img src={index === 0 ? officeImg : index === 1 ? perseoImg : index === 2 ? notionImg : index === 3 ? powerbiImg : index === 4 ? canvaImg : hubspotImg} alt={tech.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-primary mb-3">{tech.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{tech.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm text-accent font-semibold mb-2">Empresas que lo usan:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {tech.companies.map((company, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gradient-to-r from-accent to-accent-light text-white rounded-full text-xs font-medium">{company}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="funciones" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-tasks text-accent"></i> Funciones realizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl text-primary mb-3">Gestión Administrativa</h3>
              <p className="text-gray-600 leading-relaxed">Agendamiento de citas, gestión documental, órdenes de compra y procesamiento de pagos a proveedores.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl text-primary mb-3">Control Financiero</h3>
              <p className="text-gray-600 leading-relaxed">Facturación, arqueo y cuadre de caja, depósitos, liquidaciones y conciliación bancaria de reportes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl text-primary mb-3">Control de Inventario</h3>
              <p className="text-gray-600 leading-relaxed">Perchado de mercadería, control de stock y gestión de inventario para optimización de recursos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl text-primary mb-3">Atención al Cliente</h3>
              <p className="text-gray-600 leading-relaxed">Atención presencial y virtual, resolución de consultas y soporte integral a clientes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl text-primary mb-3">Comunicación</h3>
              <p className="text-gray-600 leading-relaxed">Gestión de consultas vía WhatsApp y Gmail, coordinación con proveedores y elaboración de informes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all border-2 border-accent">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl text-primary mb-3">Reportes y Análisis</h3>
              <p className="text-gray-600 leading-relaxed">Elaboración de informes, análisis de datos y seguimiento de indicadores de desempeño.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="servicios" className="py-16 px-4 md:px-8 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-cogs text-accent"></i> Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl text-primary mb-3">Análisis Económico</h3>
              <p className="text-gray-600 leading-relaxed">Evaluación detallada de escenarios económicos y tendencias de mercado para toma de decisiones.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl text-primary mb-3">Consultoría Financiera</h3>
              <p className="text-gray-600 leading-relaxed">Asesoramiento en planificación financiera, inversiones y optimización de recursos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl text-primary mb-3">Evaluación de Proyectos</h3>
              <p className="text-gray-600 leading-relaxed">Análisis de viabilidad económica y financiera de proyectos de inversión.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl text-primary mb-3">Planificación Estratégica</h3>
              <p className="text-gray-600 leading-relaxed">Desarrollo de estrategias económicas alineadas con objetivos organizacionales.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl text-primary mb-3">Estudios de Mercado</h3>
              <p className="text-gray-600 leading-relaxed">Investigación y análisis de condiciones de mercado para nuevos emprendimientos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center border-2 border-accent">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl text-primary mb-3">Capacitación</h3>
              <p className="text-gray-600 leading-relaxed">Formación en economía, finanzas y herramientas de análisis para equipos y particulares.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="educacion" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-graduation-cap text-accent"></i> Educación</h2>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-accent">
              <h3 className="text-xl text-primary mb-2 font-semibold">Licenciatura en Economía</h3>
              <p className="text-accent font-semibold mb-1">Universidad Técnica Estatal de Quevedo</p>
              <p className="text-gray-500 text-sm">2019 - 2025</p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="articulos-cientificos" className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-blue-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-primary flex items-center justify-center gap-3"><i className="fas fa-file-alt text-accent"></i> Artículos Científicos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Publicaciones académicas que demuestran mi capacidad de investigación y análisis en el campo económico.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group border-2 border-accent/20 hover:border-accent">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <i className="fas fa-book-open text-6xl text-white relative z-10"></i>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Investigación</span>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Publicado</span>
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">Análisis de indicadores macroeconómicos</h3>
                <p className="text-gray-600 text-sm mb-4">Impacto de indicadores macroeconómicos en el consumo de los hogares en Ecuador.</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=10755284" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">
                    <i className="fas fa-external-link-alt text-xs"></i>
                    Dialnet
                  </a>
                  <a href="https://revista.religacion.com/index.php/religacion/article/view/1277/1643" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent text-sm font-semibold rounded-full hover:bg-accent hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">
                    <i className="fas fa-external-link-alt text-xs"></i>
                    Revista Religación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="certificados" className="py-16 px-4 md:px-8 bg-gradient-to-br from-slate-50 to-accent/10 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4 text-primary flex items-center justify-center gap-3"><i className="fas fa-certificate text-accent"></i> Certificados</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Certificaciones profesionales que avalan mi formación y experiencia en áreas especializadas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group border-2 border-accent/20 hover:border-accent">
              <div className="h-32 bg-gradient-to-br from-accent-light to-accent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <i className="fas fa-award text-6xl text-white relative z-10"></i>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">Certificación</span>
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Completado</span>
                </div>
                <h3 className="text-xl text-primary font-semibold mb-2">MDT Contabilidad, Tributación y Laboral</h3>
                <p className="text-gray-600 text-sm mb-4">Formación especializada en contabilidad, tributación y legislación laboral aplicada.</p>
                <a href={certificadoImg} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">
                  <i className="fas fa-external-link-alt text-xs"></i>
                  Ver Certificado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="contacto" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-envelope text-accent"></i> Contacto</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4 text-gray-700">
                <span className="text-2xl">📧</span>
                <span>kimberlychizza@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-4 text-gray-700">
                <span className="text-2xl">📱</span>
                <span>+593 95 944 7298</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-700">
                <span className="text-2xl">📍</span>
                <span>Quevedo, Ecuador</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center">
              <a href="https://www.linkedin.com/in/kimberlychiza/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-accent font-semibold border-2 border-accent rounded-full hover:bg-accent hover:text-white transition-all no-underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-accent to-accent-light text-white text-center py-8">
        <div className="max-w-7xl mx-auto">
          <p className="m-0">&copy; 2026 Kimberly Chiza. Todos los derechos reservados.</p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent-light text-white shadow-lg shadow-accent/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/*
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-6 text-white/80 hover:text-white text-4xl transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            <i className="fas fa-times"></i>
          </button>
          <button
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white text-xl flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + evidencias.length - 1) % evidencias.length); }}
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white text-xl flex items-center justify-center transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setSelectedImage((selectedImage + 1) % evidencias.length); }}
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="max-w-4xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={evidencias[selectedImage].src}
              alt={evidencias[selectedImage].titulo}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <div className="text-center mt-5">
              <h3 className="text-white text-xl font-bold">{evidencias[selectedImage].titulo}</h3>
              <p className="text-white/70 text-sm mt-1">{evidencias[selectedImage].descripcion}</p>
            </div>
          </div>
        </div>
      )}
      */}
    </>
  )
}

export default App
