import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Workshop() {
  return (
    <div className="min-h-screen">
      <Header currentPage="workshop" />
      
      <main className="pt-24 lg:pt-32">
        {/* Hero Section: Kinetic Topography */}
        <section className="relative px-8 mb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12">
            <div className="w-full md:w-1/2 relative z-10">
              <span className="font-label text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-4">Ingeniería de Precisión</span>
              <h1 className="font-headline text-5xl lg:text-8xl font-bold leading-[0.9] text-primary tracking-tighter mb-8">
                TALLER DE <br/>CICLISMO <br/><span className="text-secondary">PROFESIONAL</span>
              </h1>
              <p className="font-body text-lg text-tertiary max-w-md leading-relaxed mb-10">
                Mantenimiento experto para todo tipo de bicicletas. Servicios especializados en Quito con mecánicos certificados.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container opacity-5 rounded-full blur-3xl"></div>
              <Image
                className="w-full h-[500px] object-cover rounded-xl shadow-2xl relative z-10 transform translate-y-12"
                alt="Mecánico profesional trabajando en bicicleta de montaña en taller especializado"
src="https://ticosound.com/wp-content/uploads/Imagen-de-WhatsApp-2023-11-25-a-las-07.43.44_544c4475.jpg"
                width={600}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Service Tiers: Tonal Layering */}
        <section className="px-8 py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold text-primary tracking-tight">Servicios de Mantenimiento</h2>
              <div className="h-1 w-24 bg-secondary mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Tier */}
              <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col transition-all hover:translate-y-[-8px] duration-300 group">
                <div className="mb-8">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-outline">Nivel 01</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mt-2">Mantenimiento Básico</h3>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Inspección de Seguridad
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Limpieza y Lubricación de Transmisión
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Ajuste de Cambios y Frenos
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Verificación de Presión de Neumáticos
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="font-headline text-3xl font-bold text-on-surface mb-6">$45<span className="text-sm font-normal text-outline">/service</span></p>
                </div>
              </div>

              {/* Full Tune-up */}
              <div className="bg-primary-container p-8 rounded-lg flex flex-col transform md:scale-105 relative z-20 shadow-xl">
                <div className="absolute -top-4 right-8 bg-secondary-container text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recomendado</div>
                <div className="mb-8">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-primary-fixed">Level 02</span>
                  <h3 className="font-headline text-2xl font-bold text-white mt-2">Servicio Completo</h3>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 font-body text-primary-fixed">
                    <span className="material-symbols-outlined text-secondary-container text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    Todo lo Básico
                  </li>
                  <li className="flex items-start gap-3 font-body text-primary-fixed">
                    <span className="material-symbols-outlined text-secondary-container text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    Limpieza y Pulido Completo del Cuadro
                  </li>
                  <li className="flex items-start gap-3 font-body text-primary-fixed">
                    <span className="material-symbols-outlined text-secondary-container text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    Alineación de Ruedas (Estándar)
                  </li>
                  <li className="flex items-start gap-3 font-body text-primary-fixed">
                    <span className="material-symbols-outlined text-secondary-container text-sm mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                    Ajustes de Rodamientos
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="font-headline text-3xl font-bold text-white mb-6">$95<span className="text-sm font-normal text-primary-fixed">/servicio</span></p>
                  <Button variant="primary" className="w-full">Agendar Servicio</Button>
                </div>
              </div>

              {/* Pro Race Prep */}
              <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col transition-all hover:translate-y-[-8px] duration-300">
                <div className="mb-8">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-outline">Nivel 03</span>
                  <h3 className="font-headline text-2xl font-bold text-primary mt-2">Tuning de Competencia</h3>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Todo lo del Mantenimiento Completo
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Desmonte y Desengrase Completo
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Purga de Frenos Hidráulicos
                  </li>
                  <li className="flex items-start gap-3 font-body text-tertiary">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                    Servicio de Buje y Eje Central
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="font-headline text-3xl font-bold text-on-surface mb-6">$180<span className="text-sm font-normal text-outline">/servicio</span></p>
                  <Button variant="secondary" className="w-full">Agendar Servicio</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certified Workshop Section */}
        <section className="px-8 py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
                <div className="space-y-4">
                  <Image
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    alt="Herramientas profesionales de mecánica de bicicletas organizadas en taller"
src="https://img.asmedia.epimg.net/resizer/v2/LGCWMSLC3NCUNIG6NYACCRL5UY.jpg?auth=3a328e6c8c11649cd1e39e6c4759d4ebe8cabb0a7f037656241b6bf4de658689&width=1200&height=675&smart=true"
                    width={300}
                    height={256}
                  />
                  <div className="bg-tertiary p-6 rounded-lg text-white">
                    <h4 className="font-headline text-xl font-bold mb-2">Park Tool Master Kit</h4>
                    <p className="text-xs opacity-70">Surgical precision for every bolt.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-secondary-container p-6 rounded-lg text-white">
                    <h4 className="font-headline text-xl font-bold mb-2">Shimano Certified</h4>
                    <p className="text-xs opacity-90">Factory-authorized diagnostic equipment.</p>
                  </div>
                  <Image
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    alt="Detalles mecánicos precisos de transmisión de bicicleta de alta gama"
src="https://www.lugaresdeaventura.com/sites/default/files/inline-images/mtb.jpg"
                    width={300}
                    height={256}
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <span className="font-label text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Estándares del Taller</span>
                <h2 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">Maestría en Cada Revolución.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-surface-container-high w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">engineering</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-bold text-on-surface">Mecánicos Certificados</h4>
                      <p className="font-body text-tertiary mt-2">Nuestro equipo posee certificaciones avanzadas de Shimano S-TEC y SRAM Technical Academy, especializados en bicicletas de alto rendimiento.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-surface-container-high w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <div>
                      <h4 className="font-headline text-xl font-bold text-on-surface">Ajuste Basado en Datos</h4>
                      <p className="font-body text-tertiary mt-2">Usamos telemetría de suspensión y sensores de par digital para asegurar que tu bicicleta esté calibrada exactamente para tu peso y estilo de conducción.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section: Bento Grid Layout */}
        <section className="px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 bg-primary p-12 rounded-lg text-white flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <h2 className="font-headline text-3xl font-bold mb-6">Programa tu Servicio</h2>
                  <p className="opacity-80 leading-relaxed font-body">Reserva tu horario en línea y obtén un 10% de descuento en tu primer Mantenimiento Completo. Experimenta la diferencia de la calibración Andina.</p>
                </div>
                <div className="mt-12 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-secondary-container">call</span>
                    <span className="font-headline">+593 2 225-Trail</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary-container">location_on</span>
                    <span className="font-headline">Quito, Ecuador</span>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <span className="material-symbols-outlined text-[200px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    construction
                  </span>
                </div>
              </div>
              
              <div className="lg:col-span-8 bg-surface-container-low p-12 rounded-lg">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">Nombre Completo</label>
                    <input 
                      className="w-full bg-surface-variant border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 rounded-t-sm px-4 py-3 font-body text-on-surface" 
                      placeholder="Andrés Montaña" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">Dirección de Email</label>
                    <input 
                      className="w-full bg-surface-variant border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 rounded-t-sm px-4 py-3 font-body text-on-surface" 
                      placeholder="andres@sendero.com" 
                      type="email" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">Modelo de Bicicleta</label>
                    <input 
                      className="w-full bg-surface-variant border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 rounded-t-sm px-4 py-3 font-body text-on-surface" 
                      placeholder="ej. Santa Cruz Hightower" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">Nivel Preferido</label>
                    <select className="w-full bg-surface-variant border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 rounded-t-sm px-4 py-3 font-body text-on-surface">
                      <option>Mantenimiento Completo (Recomendado)</option>
                      <option>Servicio Básico</option>
                      <option>Preparación de Carrera Pro</option>
                      <option>Construcción Personalizada / Consulta</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-label text-xs font-bold uppercase tracking-widest text-outline">Notas del Servicio</label>
                    <textarea 
                      className="w-full bg-surface-variant border-0 border-b-2 border-transparent focus:border-secondary focus:ring-0 rounded-t-sm px-4 py-3 font-body text-on-surface" 
                      placeholder="Infórmanos sobre cualquier problema específico..." 
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button variant="primary" type="submit" className="w-full md:w-auto">
                      Confirmar Reserva
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
