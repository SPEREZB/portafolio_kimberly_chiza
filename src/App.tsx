import { useEffect, useState } from 'react';
import paisasImg from './assets/paisas.jpg';
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

function App() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
                  <li><a href="#empresas" className="text-gray-700 text-sm hover:bg-gray-100 hover:text-accent transition-colors no-underline block px-4 py-2 rounded flex items-center gap-2" onClick={() => setActiveDropdown(null)}><i className="fas fa-building text-xs"></i> Empresas</a></li>
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

      <section id="inicio" className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-[85vh] flex items-center justify-center py-12 px-4 md:px-8 fade-in-section">
        <div className="max-w-4xl text-center px-4">
          <div className="mb-10">
            <div className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full bg-gradient-to-br from-accent to-orange-400 p-1.5 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-7xl">
                👩‍💼
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-accent tracking-tight">Kimberly Chiza</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-600">Economista Profesional</h2>
          <p className="text-lg md:text-xl mb-12 text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
            Especialista en análisis económico, consultoría financiera y planificación estratégica
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contacto" className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline text-sm md:text-base">Contáctame</a>
            <a href="#servicios" className="px-8 md:px-10 py-3 md:py-4 rounded-full border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline text-sm md:text-base">Mis Servicios</a>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="sobre-mi" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-user text-accent"></i> Sobre Mí</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Soy economista con amplia experiencia en análisis de mercados, evaluación de proyectos 
              y consultoría económica. Me dedico a proporcionar soluciones estratégicas basadas en 
              datos sólidos para empresas y particulares.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Mi enfoque combina rigurosidad analítica con una visión práctica de los negocios, 
              ayudando a mis clientes a tomar decisiones informadas que maximizan su potencial económico.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl text-primary mb-4">Habilidades</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Análisis de Datos</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Economía Financiera</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Estadística</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Excel Avanzado</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Modelado Económico</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-medium">Consultoría</span>
              </div>
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
                <div className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Último trabajo</div>
                  <h3 className="text-xl text-primary mb-2">Los Paisas</h3>
                  <p className="text-accent font-semibold mb-2">Asistente administrativa y facturadora</p>
                  <p className="text-gray-600 leading-relaxed">Facturación, producción de productos, control de inventario, depositos, arqueo y cuadre de caja, roles de pago, atención a clientes, provedores y colaboradores.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Segunda empresa</div>
                  <h3 className="text-xl text-primary mb-2">Fullhogar</h3>
                  <p className="text-accent font-semibold mb-2">Secretaria</p>
                  <p className="text-gray-600 leading-relaxed">Agendamiento de citas, ordenes de compre, control de inventarios y gestión de redes sociales.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Primera empresa</div>
                  <h3 className="text-xl text-primary mb-2">Credifacil</h3>
                  <p className="text-accent font-semibold mb-2">Asesora de venta</p>
                  <p className="text-gray-600 leading-relaxed">Evaluación de solicitudes crediticias, análisis de riesgo financiero y gestión de cartera de clientes.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Prácticas</div>
                  <h3 className="text-xl text-primary mb-2">Municipio</h3>
                  <p className="text-accent font-semibold mb-2">Practicante</p>
                  <p className="text-gray-600 leading-relaxed">Creación de solicitudes, atención al publico y gestión documental fisicas y virtuales.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Prácticas</div>
                  <h3 className="text-xl text-primary mb-2">Casa Judicial</h3>
                  <p className="text-accent font-semibold mb-2">Practicante</p>
                  <p className="text-gray-600 leading-relaxed">Ingreso de casos judiciales, registro de anotaciones en reuniones, agendamiento de citas y atención al publico.</p>
                </div>
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
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Asistente administrativa y facturadora</p>
                <p className="text-gray-500 text-sm">Facturación, producción de productos, control de inventario, depositos, arqueo y cuadre de caja, roles de pago, atención a clientes, provedores y colaboradores.</p>
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
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Secretaria</p>
                <p className="text-gray-500 text-sm">Agendamiento de citas, ordenes de compre, control de inventarios y gestión de redes sociales.</p>
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
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Asesora de venta</p>
                <p className="text-gray-500 text-sm">Evaluación de solicitudes crediticias, análisis de riesgo financiero y gestión de cartera de clientes.</p>
              </div>
            </a>
            <a href="https://quevedo.gob.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-3 border-2 border-accent">
              <div className="h-56 overflow-hidden relative">
                <img src={municipioImg} alt="Municipio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Municipio</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Practicante</p>
                <p className="text-gray-500 text-sm">Creación de solicitudes, atención al publico y gestión documental fisicas y virtuales.</p>
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
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Practicante</p>
                <p className="text-gray-500 text-sm">Ingreso de casos judiciales, registro de anotaciones en reuniones, agendamiento de citas y atención al publico.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

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

      <section id="articulos-cientificos" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-file-alt text-accent"></i> Artículos Científicos</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-accent hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📄</div>
                <div className="flex-1">
                  <h4 className="text-lg text-primary mb-1 font-semibold">Análisis de indicadores macroeconómicos y su impacto en el consumo de los hogares en Ecuador</h4>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://dialnet.unirioja.es/servlet/articulo?codigo=10755284" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm rounded-full hover:shadow-md transition-all no-underline flex items-center gap-1">
                      <i className="fas fa-external-link-alt text-xs"></i>
                      Dialnet
                    </a>
                    <a href="https://revista.religacion.com/index.php/religacion/article/view/1277/1643" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 border-2 border-accent text-accent text-sm rounded-full hover:bg-accent hover:text-white hover:shadow-md transition-all no-underline flex items-center gap-1">
                      <i className="fas fa-external-link-alt text-xs"></i>
                      Revista Religación
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent max-w-4xl mx-auto my-4"></div>

      <section id="certificados" className="py-16 px-4 md:px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-primary flex items-center justify-center gap-3"><i className="fas fa-certificate text-accent"></i> Certificados</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-accent hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📜</div>
                <div className="flex-1">
                  <h4 className="text-lg text-primary mb-1 font-semibold">MDT Contabilidad, Tributación y Laboral</h4>
                  <a href={certificadoImg} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm rounded-full hover:shadow-md transition-all no-underline flex items-center gap-1 w-fit">
                    <i className="fas fa-external-link-alt text-xs"></i>
                    Ver Certificado
                  </a>
                </div>
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
            <h3 className="text-2xl text-primary mb-4">Conectemos</h3>
            <p className="text-gray-600 leading-relaxed mb-8">Estoy disponible para consultoría y proyectos colaborativos. No dudes en contactarme.</p>
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
    </>
  )
}

export default App
