import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header currentPage="home" />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover"
              alt="Ciclista profesional ascendiendo una carretera montañosa en los Andes al amanecer"
src="https://media.istockphoto.com/id/1168532082/photo/mountain-biker-riding-downhill.jpg?s=2048x2048&w=is&k=20&c=MzQbccw4rBK_UUUO9ksILO2QPygoRXSK6_KFkmvv9hE="
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center items-start text-white">
              <span className="bg-secondary-container px-4 py-1 font-label text-xs font-bold tracking-[0.2em] mb-6 rounded-sm uppercase">
                Quito • 2,850m de Altitud
              </span>
              <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                TIENDA DE <br/>CICLISMO <br/><span className="text-secondary-container">PREMIUM</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-lg mb-10 leading-relaxed">
                Las mejores bicicletas y accesorios para ciclistas. Venta, mantenimiento y equipamiento profesional en Quito.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Ver Bicicletas
                  <span className="material-symbols-outlined">trending_flat</span>
                </Button>
                <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20">
                  Servicios de Taller
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-8 flex items-center gap-4 text-white/50 animate-bounce">
            <span className="font-label text-xs tracking-widest uppercase">Desplazar hacia abajo</span>
            <div className="w-px h-12 bg-white/30"></div>
          </div>
        </section>

        {/* Categories Bento Grid */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-5xl font-bold mb-4 tracking-tight">CATEGORÍAS INGENIADAS</h2>
              <p className="text-on-surface-variant font-body max-w-md">Selección curada de máquinas diseñadas para conquistar las ascensiones más empinadas y los descensos técnicos.</p>
            </div>
            <div className="hidden md:block">
              <Button variant="tertiary">Ver todo el equipo</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            {/* Mountain */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-12 flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="font-headline text-6xl font-bold mb-2">MONTAÑA</h3>
                <p className="text-on-surface-variant max-w-xs">Bestias de doble suspensión para las sendas volcánicas del Pichincha.</p>
              </div>
              <Image
                className="absolute right-[-10%] bottom-[-5%] w-2/3 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
                alt="Bicicleta de montaña de fibra de carbono en un sendero escarpado con montañas de fondo"
src="https://img.asmedia.epimg.net/resizer/v2/LGCWMSLC3NCUNIG6NYACCRL5UY.jpg?auth=3a328e6c8c11649cd1e39e6c4759d4ebe8cabb0a7f037656241b6bf4de658689&width=1200&height=675&smart=true"
                width={400}
                height={300}
              />
              <div className="relative z-10">
                <button className="bg-primary text-white p-4 rounded-full flex items-center justify-center hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </div>
            </div>

            {/* Road */}
            <div className="md:col-span-4 group relative overflow-hidden bg-primary-container text-white p-10 flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="font-headline text-4xl font-bold mb-2">CARRETERA</h3>
                <p className="text-primary-fixed/80">Cuadros ultraligeros para sprints de alta velocidad en valles.</p>
              </div>
              <Image
                className="absolute bottom-[-10%] left-[-20%] w-full h-1/2 object-contain opacity-50 group-hover:opacity-100 transition-all"
                alt="Bicicleta de carretera aerodinámica con reflejos dorados en fibra de carbono"
src="https://www.lugaresdeaventura.com/sites/default/files/inline-images/ciclismo%20carretera.jpg"
                width={300}
                height={200}
              />
              <div className="relative z-10 flex justify-end">
                <button className="bg-secondary-container text-white p-4 rounded-full">
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </div>
            </div>

            {/* Urban */}
            <div className="md:col-span-12 group relative overflow-hidden bg-surface-container-highest p-10 flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-headline text-4xl font-bold mb-2">URBANO</h3>
                <p className="text-on-surface-variant">Soluciones eléctricas ágiles para las calles empedradas de Quito.</p>
              </div>
              <Image
                className="absolute right-[10%] w-1/3 object-contain group-hover:translate-x-4 transition-transform"
                alt="Bicicleta urbana eléctrica minimalista contra una pared arquitectónica moderna"
src="https://www.lugaresdeaventura.com/sites/default/files/inline-images/mtb.jpg"
                width={300}
                height={200}
              />
              <Button variant="primary" className="bg-tertiary hover:bg-on-surface">
                Comprar Eléctricas
              </Button>
            </div>
          </div>
        </section>

        {/* Shop Section - Bike Catalog */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline text-5xl font-bold mb-4 tracking-tight">CATÁLOGO DE BICICLETAS</h2>
              <p className="text-on-surface-variant font-body max-w-2xl mx-auto text-lg">Colección premium seleccionada para las demandas extremas del terreno andino. Cada máquina está calibrada para la altitud.</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-primary text-white rounded-full font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-colors">
                Todas
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-label text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                Montaña
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-label text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                Carretera
              </button>
              <button className="px-6 py-3 bg-surface-container-high text-on-surface rounded-full font-label text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                Eléctricas
              </button>
            </div>

            {/* Bike Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bike 1 - Mountain Pro */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta de montaña profesional de fibra de carbono roja"
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                  <div className="absolute top-4 left-4 bg-secondary-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Nuevo
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Andean Summit Pro</h3>
                      <p className="text-on-surface-variant text-sm">Montaña | Full Suspension</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$3,499</span>
                      <p className="text-on-surface-variant text-sm line-through">$4,299</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Cuadro de carbono 29" full suspension
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Transmisión SRAM GX Eagle 12v
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Frenos hidráulicos disco 200mm
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bike 2 - Road Elite */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta de carretera aerodinámica azul y negra"
                    src="https://images.unsplash.com/photo-1548191261-391df0ba5c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                  <div className="absolute top-4 left-4 bg-tertiary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Más Vendido
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Volcano Racer Elite</h3>
                      <p className="text-on-surface-variant text-sm">Carretera | Carbono Aero</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$2,899</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Cuadro aerodinámico de carbono
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Shimano Ultegra Di2 11v
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Ruedas tubulares carbono 50mm
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bike 3 - E-Mountain */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta eléctrica de montaña verde"
                    src="https://images.unsplash.com/photo-1558622733-3c8c5f2d6c0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                  <div className="absolute top-4 left-4 bg-primary-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Eléctrica
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Cotopaxi E-Explorer</h3>
                      <p className="text-on-surface-variant text-sm">E-Montaña | Bosch</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$4,799</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Motor Bosch Performance Line CX
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Batería 750Wh rango 120km
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Suspensión FOX 150mm
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bike 4 - Urban Electric */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta urbana eléctrica minimalista gris"
                    src="https://images.unsplash.com/photo-1571068316344-57298a98148a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Quito Urban Pro</h3>
                      <p className="text-on-surface-variant text-sm">Urbana | Eléctrica</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$1,899</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Motor Shimano Steps E6100
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Cuadro aluminio hidroformado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Frenos disco hidráulicos
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bike 5 - Gravel Adventure */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta gravel naranja con alforjas"
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Aventura
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Andes Pathfinder</h3>
                      <p className="text-on-surface-variant text-sm">Gravel | Adventure</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$2,299</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Cuadro acero Reynolds 853
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      SRAM Apex 1x11v
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Montaje para alforjas incluido
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bike 6 - Pro Road */}
              <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative h-64 overflow-hidden bg-surface-container-low">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Bicicleta de carretera profesional roja y blanca"
                    src="https://images.unsplash.com/photo-1548191261-391df0ba5c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    fill
                  />
                  <div className="absolute top-4 left-4 bg-error-container text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Limitada
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline text-2xl font-bold mb-1">Summit Dura-Ace Pro</h3>
                      <p className="text-on-surface-variant text-sm">Carretera | Carrera</p>
                    </div>
                    <div className="text-right">
                      <span className="font-headline text-3xl font-bold text-primary">$5,999</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Shimano Dura-Ace Di2 12v
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Cuadro carbono ultraligero 6.8kg
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      Ruedas carbono tubulares 60mm
                    </li>
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="flex-1">
                      Comprar Ahora
                    </Button>
                    <Button variant="tertiary" size="sm" className="p-3">
                      <span className="material-symbols-outlined">favorite_border</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <Button variant="tertiary" size="lg">
                Cargar Más Bicicletas
                <span className="material-symbols-outlined">arrow_downward</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          {/* Skewed background element */}
          <div className="absolute top-0 inset-x-0 h-32 bg-background kinetic-skew origin-top-left"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-white mt-12">
            <div className="text-center mb-24">
              <h2 className="font-headline text-5xl font-bold mb-6">MANTENIMIENTO PRECISO</h2>
              <p className="text-on-primary-container max-w-2xl mx-auto text-lg">Nuestros técnicos son ingenieros certificados. No solo reparamos bicicletas; las calibramos para las demandas únicas de la altitud y topografía.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Tune Up */}
              <div className="bg-primary-container p-8 rounded-lg flex flex-col items-start hover:translate-y-[-8px] transition-transform duration-300">
                <div className="mb-8 p-4 bg-primary rounded-full">
                  <span className="material-symbols-outlined text-4xl text-secondary-container">build</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 uppercase">Revisión Alpina</h3>
                <ul className="space-y-4 mb-8 text-on-primary-container flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Calibración de frenos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Desengrasado de transmisión
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Inspección básica de seguridad
                  </li>
                </ul>
                <div className="w-full flex items-center justify-between">
                  <span className="font-headline text-3xl font-bold text-white">$45</span>
                  <Button variant="tertiary" className="text-secondary-container border-secondary-container">Book Now</Button>
                </div>
              </div>

              {/* Full Overhaul */}
              <div className="bg-white text-on-surface p-8 rounded-lg flex flex-col items-start scale-105 shadow-2xl relative">
                <div className="absolute top-4 right-4 bg-secondary-container text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Más Vendido</div>
                <div className="mb-8 p-4 bg-surface-container-low rounded-full">
                  <span className="material-symbols-outlined text-4xl text-secondary">settings_suggest</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 uppercase">El Andean Trail Pro</h3>
                <ul className="space-y-4 mb-8 text-on-surface-variant flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    Limpieza ultrasónica de transmisión
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    Overhaul de buje y pedalier
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    Detallado y protección de cuadro
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                    Alineación de ruedas
                  </li>
                </ul>
                <div className="w-full flex items-center justify-between">
                  <span className="font-headline text-3xl font-bold text-primary">$120</span>
                  <Button variant="primary" size="sm">Reservar Servicio</Button>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-primary-container p-8 rounded-lg flex flex-col items-start hover:translate-y-[-8px] transition-transform duration-300">
                <div className="mb-8 p-4 bg-primary rounded-full">
                  <span className="material-symbols-outlined text-4xl text-secondary-container">speed</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 uppercase">Calibración de Carrera</h3>
                <ul className="space-y-4 mb-8 text-on-primary-container flex-grow">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Ajuste de suspensión
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Actualización de firmware Di2/eTap
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                    Calibración de medidor de potencia
                  </li>
                </ul>
                <div className="w-full flex items-center justify-between">
                  <span className="font-headline text-3xl font-bold text-white">$85</span>
                  <Button variant="tertiary" className="text-secondary-container border-secondary-container">Reservar Ahora</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Slider */}
        <section className="py-32 px-8 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 text-[200px] font-black text-surface-container-highest opacity-50 z-0">"</div>
                <div className="relative z-10">
                  <h2 className="font-headline text-5xl font-bold mb-12 tracking-tight">VOCES DE LA SENDA</h2>
                  <div className="space-y-8">
                    <p className="text-3xl font-headline font-light leading-snug italic text-tertiary">
                      "La única tienda en Quito en la que confío con mi cuadro de fibra de carbono. Entienden que la altitud lo cambia todo. Mi bicicleta salió del servicio Andean Trail Pro sintiéndose más rápida que cuando era nueva."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden">
                        <Image
                          className="w-full h-full object-cover"
                          alt="Retrato de ciclista profesional con iluminación exterior, expresión determinada"
          src="https://ticosound.com/wp-content/uploads/Imagen-de-WhatsApp-2023-11-25-a-las-07.43.44_544c4475.jpg"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-lg uppercase tracking-wider">Sofia Martinez</h4>
                        <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest">Competidora Nacional de Enduro</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-12">
                  <button className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="bg-surface-container-high rounded-lg overflow-hidden h-[500px]">
                <Image
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Professional bicycle workshop with high-end tools and a bike frame mounted on a repair stand, warm moody lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPHktaicClXiicjVgAExFcOK_AtW_xPyqNJRRVVoM1yLMBA0dwYn0DOOKD8wrgThTzWnXfpC4a28piuz6fxXPANO4ohFyXQNwy6CN2CSMVbdZH0mqSXv00yxL2DYg4_RrnbQcENJgcSBdkB_wJLZpTOW9iTsqVPgF-oVOiRONfWsxUcgVeRtchJw1JwgxNA1BggZYDTpspYZ1D4CNVNSdXVT0yCIE5wrdLbAXBFzIKSnD6U7XlfrbR4ywEBiemigS29ESaEbfeKBMu"
                  fill
                />
                <div className="absolute inset-0 bg-secondary/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
