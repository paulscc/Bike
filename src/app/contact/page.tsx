import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header currentPage="contact" />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover grayscale opacity-40"
              alt="Ciudad de Quito con edificios modernos y el volcán Pichincha al fondo"
src="https://tiendabi.com/cdn/shop/articles/crop-man-riding-bicycle-sunset-scaled_ab1b3394-665a-4704-8f98-679a1ec2c048.jpg?v=1699389771&width=1600"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="font-label font-bold text-secondary uppercase tracking-[0.3em] mb-4 block">Basecamp Quito</span>
              <h1 className="font-headline text-7xl md:text-8xl font-black text-primary leading-none tracking-tighter mb-6">
                CONECTA <br/>CON LA <span className="text-secondary">CIMA.</span>
              </h1>
              <p className="text-xl text-tertiary font-medium max-w-xl">
                Diseñado para los Andes, servido en el corazón de la ciudad. Visita nuestro taller insignia en Quito para mantenimiento de élite y guías de senderos.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Contact Layout */}
        <section className="container mx-auto px-6 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form Card */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl shadow-sm p-10">
              <h2 className="font-headline text-3xl font-bold text-primary mb-8">Enviar un Mensaje</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="font-label text-xs font-bold text-tertiary uppercase tracking-wider mb-2 block">Nombre del Piloto</label>
                    <input 
                      className="w-full bg-surface-variant border-none focus:ring-2 focus:ring-secondary-container rounded-lg p-4 text-on-surface" 
                      placeholder="Tu Nombre" 
                      type="text" 
                    />
                  </div>
                  <div className="relative">
                    <label className="font-label text-xs font-bold text-tertiary uppercase tracking-wider mb-2 block">Email Seguro</label>
                    <input 
                      className="w-full bg-surface-variant border-none focus:ring-2 focus:ring-secondary-container rounded-lg p-4 text-on-surface" 
                      placeholder="email@direccion.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="font-label text-xs font-bold text-tertiary uppercase tracking-wider mb-2 block">Transmisión</label>
                  <textarea 
                    className="w-full bg-surface-variant border-none focus:ring-2 focus:ring-secondary-container rounded-lg p-4 text-on-surface" 
                    placeholder="Consulta sobre construcciones, reparaciones o senderos..." 
                    rows={5}
                  />
                </div>
                <Button 
                  variant="primary" 
                  size="lg" 
                  type="submit"
                  className="w-full kinetic-gradient"
                >
                  Iniciar Transmisión
                  <span className="material-symbols-outlined">send</span>
                </Button>
              </form>
            </div>

            {/* Info Stack */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Shop Hours */}
              <div className="bg-primary text-white rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container">schedule</span>
                    Horarios de Servicio
                  </h3>
                  <div className="space-y-4 font-label">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="opacity-70">Lun — Vie</span>
                      <span className="font-bold">08:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="opacity-70">Sábado</span>
                      <span className="font-bold">09:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Domingo</span>
                      <span className="text-secondary-container font-bold italic uppercase tracking-tighter">En las Sendas</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-xs opacity-60 uppercase tracking-widest">Soporte Urgente</p>
                  <p className="text-2xl font-headline font-bold">+593 2-255-001</p>
                </div>
              </div>

              {/* Location Quick Card */}
              <div className="bg-surface-container-high rounded-xl p-8 border-l-8 border-secondary">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-4xl text-secondary">location_on</span>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">Sede Quito</h3>
                    <p className="text-tertiary">Av. de los Granados & Eloy Alfaro<br/>Sector El Batán, Quito 170135</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 mt-4 text-secondary font-bold hover:underline"
                    >
                      Obtener Ruta Beta
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto px-6 mt-20">
          <div className="rounded-xl overflow-hidden shadow-2xl relative">
            <div className="bg-surface-container-highest w-full h-[500px]">
              {/* Map Placeholder with Location Data */}
              <Image
                className="w-full h-full object-cover"
                alt="Mapa topográfico aéreo mostrando la cuadrícula urbana de Quito con contornos montañosos"
src="https://www.lugaresdeaventura.com/sites/default/files/2024-07/mountain-bike-portada-lugares-de-aventura.jpg"
                fill
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              
              {/* Map Pin UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-secondary p-2 rounded-full shadow-lg border-4 border-white animate-bounce">
                  <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    pedal_bike
                  </span>
                </div>
                <div className="mt-2 bg-white px-4 py-2 rounded-full shadow-xl text-xs font-black uppercase tracking-tighter text-primary">
                  The Kinetic Trail HQ
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social & Community */}
        <section className="container mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between group hover:bg-secondary transition-colors duration-500">
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-tertiary group-hover:text-white/70">Instagram</p>
                <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white">@kinetictrail_uio</h4>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-white">photo_camera</span>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between group hover:bg-secondary transition-colors duration-500">
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-tertiary group-hover:text-white/70">Club Strava</p>
                <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white">Kinetic Trail Quito</h4>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-white">speed</span>
            </div>
            
            <div className="bg-surface-container-low p-8 rounded-xl flex items-center justify-between group hover:bg-secondary transition-colors duration-500">
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-tertiary group-hover:text-white/70">Escritorio del Taller</p>
                <h4 className="font-headline text-xl font-bold text-primary group-hover:text-white">tech@kinetictrail.ec</h4>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary group-hover:text-white">engineering</span>
            </div>
          </div>
        </section>
      </main>

      {/* FAB for Maintenance (Contextual for Contact Page) */}
      <div className="fixed bottom-8 right-8 z-40">
        <Button 
          variant="primary" 
          className="bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-2xl flex items-center gap-3 group transition-all hover:pr-6"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            calendar_month
          </span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-headline font-bold uppercase tracking-tight whitespace-nowrap">
            Reservar Servicio
          </span>
        </Button>
      </div>

      <Footer />
    </div>
  );
}
