import { useEffect } from 'react';
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

function App() {
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
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 py-4 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">Kimberly Chiza</div>
          <ul className="flex gap-6 m-0 p-0 list-none">
            <li><a href="#inicio" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-home text-sm"></i> Inicio</a></li>
            <li><a href="#sobre-mi" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-user text-sm"></i> Sobre Mí</a></li>
            <li><a href="#experiencia" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-briefcase text-sm"></i> Experiencia</a></li>
            <li><a href="#empresas" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-building text-sm"></i> Empresas</a></li>
            <li><a href="#tecnologias" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-tools text-sm"></i> Herramientas</a></li>
            <li><a href="#funciones" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-tasks text-sm"></i> Funciones</a></li>
            <li><a href="#servicios" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-cogs text-sm"></i> Servicios</a></li>
            <li><a href="#contacto" className="text-gray-700 font-medium hover:text-accent transition-colors no-underline flex items-center gap-2"><i className="fas fa-envelope text-sm"></i> Contacto</a></li>
          </ul>
        </div>
      </nav>

      <section id="inicio" className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-[85vh] flex items-center justify-center py-16 px-8 fade-in-section">
        <div className="max-w-4xl text-center">
          <div className="mb-10">
            <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-accent to-orange-400 p-1.5 shadow-xl">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-7xl">
                👩‍💼
              </div>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-primary tracking-tight">Kimberly Chiza</h1>
          <h2 className="text-2xl font-medium mb-6 text-gray-600">Economista Profesional</h2>
          <p className="text-xl mb-12 text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
            Especialista en análisis económico, consultoría financiera y planificación estratégica
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contacto" className="px-10 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">Contáctame</a>
            <a href="#servicios" className="px-10 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all no-underline">Mis Servicios</a>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Sobre Mí</h2>
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
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Análisis de Datos</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Economía Financiera</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Estadística</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Excel Avanzado</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Modelado Económico</span>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-medium">Consultoría</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Experiencia</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-light to-accent transform md:-translate-x-1/2"></div>
              
              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Último trabajo</div>
                  <h3 className="text-xl text-primary mb-2">Los Paisas</h3>
                  <p className="text-accent font-semibold mb-2">Economista</p>
                  <p className="text-gray-600 leading-relaxed">Última empresa donde trabajé, experiencia en análisis económico y gestión financiera.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Segunda empresa</div>
                  <h3 className="text-xl text-primary mb-2">Fullhogar</h3>
                  <p className="text-accent font-semibold mb-2">Gestión Comercial</p>
                  <p className="text-gray-600 leading-relaxed">Segunda empresa donde trabajé, experiencia en gestión comercial y análisis de mercado.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:mr-auto md:ml-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Primera empresa</div>
                  <h3 className="text-xl text-primary mb-2">Credifacil</h3>
                  <p className="text-accent font-semibold mb-2">Analista de Crédito</p>
                  <p className="text-gray-600 leading-relaxed">Primera empresa donde trabajé, experiencia en análisis de crédito y evaluación financiera.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0 mb-12">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Prácticas</div>
                  <h3 className="text-xl text-primary mb-2">Municipio</h3>
                  <p className="text-accent font-semibold mb-2">Practicante</p>
                  <p className="text-gray-600 leading-relaxed">Prácticas profesionales en la entidad municipal, apoyo en gestión pública y políticas locales.</p>
                </div>
              </div>

              <div className="relative pl-20 md:pl-0">
                <div className="absolute left-6 md:left-1/2 top-0 w-5 h-5 bg-gradient-to-r from-accent-light to-accent rounded-full transform md:-translate-x-1/2 border-4 border-white shadow-lg z-10"></div>
                <div className="md:ml-auto md:mr-0 md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow ml-4">
                  <div className="inline-block bg-gradient-to-r from-accent-light to-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">Prácticas</div>
                  <h3 className="text-xl text-primary mb-2">Casa Judicial</h3>
                  <p className="text-accent font-semibold mb-2">Practicante</p>
                  <p className="text-gray-600 leading-relaxed">Prácticas profesionales en la Casa Judicial, experiencia en análisis legal y económico.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="empresas" className="py-24 px-8 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="https://lospaisas.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up">
              <div className="h-56 overflow-hidden relative">
                <img src={paisasImg} alt="Los Paisas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Los Paisas</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Economista</p>
                <p className="text-gray-500 text-sm">Análisis económico, gestión financiera y evaluación de indicadores de desempeño empresarial.</p>
              </div>
            </a>
            <a href="https://fullhogar.com.co/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-1">
              <div className="h-56 overflow-hidden relative">
                <img src={fullhogarImg} alt="Fullhogar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Fullhogar</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Gestión Comercial</p>
                <p className="text-gray-500 text-sm">Administración de relaciones comerciales, análisis de mercado y estrategias de ventas.</p>
              </div>
            </a>
            <a href="https://www.cooperativacredifacil.fin.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-2">
              <div className="h-56 overflow-hidden relative">
                <img src={cfacilImg} alt="Credifacil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl text-primary font-semibold">Credifacil</h3>
                  <i className="fas fa-external-link-alt text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm mb-3">Cargo: Analista de Crédito</p>
                <p className="text-gray-500 text-sm">Evaluación de solicitudes crediticias, análisis de riesgo financiero y gestión de cartera de clientes.</p>
              </div>
            </a>
            <a href="https://quevedo.gob.ec/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-3">
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
                <p className="text-gray-500 text-sm">Apoyo en gestión pública, análisis de políticas locales y administración de recursos municipales.</p>
              </div>
            </a>
            <a href="http://acotecnic.com/portfolio/casa-judicial-quevedo/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all group no-underline fade-in-up fade-in-up-delay-4">
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
                <p className="text-gray-500 text-sm">Análisis legal y económico, investigación de casos y elaboración de informes técnicos.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Herramientas y Tecnologías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={officeImg} alt="Microsoft Office" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">Microsoft Office</h3>
                <p className="text-gray-600 leading-relaxed">Manejo avanzado de herramientas de Office para análisis de datos, documentación y generación de reportes.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={perseoImg} alt="Perseo" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">Perseo</h3>
                <p className="text-gray-600 leading-relaxed">Sistema de información financiera para análisis de indicadores económicos y gestión de datos.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={notionImg} alt="Notion" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">Notion</h3>
                <p className="text-gray-600 leading-relaxed">Organización de proyectos, documentación y gestión de tareas para optimizar el trabajo.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={powerbiImg} alt="Power BI" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">Power BI</h3>
                <p className="text-gray-600 leading-relaxed">Herramienta de inteligencia de negocios para visualización de datos y análisis interactivo.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={canvaImg} alt="Canva" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">Canva</h3>
                <p className="text-gray-600 leading-relaxed">Diseño gráfico para creación de presentaciones, infografías y materiales visuales profesionales.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-56 bg-gray-100 flex items-center justify-center p-8">
                <img src={hubspotImg} alt="HubSpot" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-primary mb-3">HubSpot</h3>
                <p className="text-gray-600 leading-relaxed">Plataforma de CRM para gestión de relaciones con clientes, marketing automatizado y análisis de datos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funciones" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Funciones realizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl text-primary mb-3">Gestión Administrativa</h3>
              <p className="text-gray-600 leading-relaxed">Agendamiento de citas, gestión documental, órdenes de compra y procesamiento de pagos a proveedores.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl text-primary mb-3">Control Financiero</h3>
              <p className="text-gray-600 leading-relaxed">Facturación, arqueo y cuadre de caja, depósitos, liquidaciones y conciliación bancaria de reportes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl text-primary mb-3">Control de Inventario</h3>
              <p className="text-gray-600 leading-relaxed">Perchado de mercadería, control de stock y gestión de inventario para optimización de recursos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl text-primary mb-3">Atención al Cliente</h3>
              <p className="text-gray-600 leading-relaxed">Atención presencial y virtual, resolución de consultas y soporte integral a clientes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl text-primary mb-3">Comunicación</h3>
              <p className="text-gray-600 leading-relaxed">Gestión de consultas vía WhatsApp y Gmail, coordinación con proveedores y elaboración de informes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl text-primary mb-3">Reportes y Análisis</h3>
              <p className="text-gray-600 leading-relaxed">Elaboración de informes, análisis de datos y seguimiento de indicadores de desempeño.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 px-8 bg-gray-50 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl text-primary mb-3">Análisis Económico</h3>
              <p className="text-gray-600 leading-relaxed">Evaluación detallada de escenarios económicos y tendencias de mercado para toma de decisiones.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl text-primary mb-3">Consultoría Financiera</h3>
              <p className="text-gray-600 leading-relaxed">Asesoramiento en planificación financiera, inversiones y optimización de recursos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl text-primary mb-3">Evaluación de Proyectos</h3>
              <p className="text-gray-600 leading-relaxed">Análisis de viabilidad económica y financiera de proyectos de inversión.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl text-primary mb-3">Planificación Estratégica</h3>
              <p className="text-gray-600 leading-relaxed">Desarrollo de estrategias económicas alineadas con objetivos organizacionales.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl text-primary mb-3">Estudios de Mercado</h3>
              <p className="text-gray-600 leading-relaxed">Investigación y análisis de condiciones de mercado para nuevos emprendimientos.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl text-primary mb-3">Capacitación</h3>
              <p className="text-gray-600 leading-relaxed">Formación en economía, finanzas y herramientas de análisis para equipos y particulares.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="educacion" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Educación</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-accent">
              <h3 className="text-xl text-primary mb-2 font-semibold">Licenciatura en Economía</h3>
              <p className="text-accent font-semibold mb-1">Universidad Técnica Estatal de Quevedo</p>
              <p className="text-gray-500 text-sm">2019 - 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 px-8 fade-in-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-primary relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-accent-light after:to-accent after:mx-auto after:mt-4 after:rounded">Contacto</h2>
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
              <a href="https://www.linkedin.com/in/kimberlychiza/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-primary font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all no-underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white text-center py-8">
        <div className="max-w-7xl mx-auto">
          <p className="m-0">&copy; 2026 Kimberly Chiza. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
