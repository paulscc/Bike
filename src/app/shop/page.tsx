import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Shop() {
  return (
    <div className="min-h-screen">
      <Header currentPage="shop" />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover"
              alt="Tienda de bicicletas premium con exhibición de montañas y carreteras"
src="https://www.lugaresdeaventura.com/sites/default/files/2024-07/mountain-bike-portada-lugares-de-aventura.jpg"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <div className="text-white">
              <h1 className="font-headline text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
                BICICLETAS <br/><span className="text-secondary-container">EN VENTA</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-lg mb-10 leading-relaxed">
                Catálogo completo de bicicletas nuevas y usadas. Marcas líderes y accesorios exclusivos en Quito.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-headline text-4xl font-bold mb-4">Nuestras Bicicletas</h2>
              <p className="text-on-surface-variant">Encuentra tu bicicleta perfecta</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden bg-surface-container-low rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Bicicleta de montaña en terreno rocoso"
src="https://img.asmedia.epimg.net/resizer/v2/LGCWMSLC3NCUNIG6NYACCRL5UY.jpg?auth=3a328e6c8c11649cd1e39e6c4759d4ebe8cabb0a7f037656241b6bf4de658689&width=1200&height=675&smart=true"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-headline text-2xl font-bold mb-2">Bicicletas de Montaña</h3>
                  <p className="text-white/80 mb-4">Bestias de doble suspensión para sendas volcánicas</p>
                  <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">Comprar Ahora</Button>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-surface-container-low rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Bicicleta de carretera en carretera panorámica"
src="https://www.lugaresdeaventura.com/sites/default/files/inline-images/ciclismo%20carretera.jpg"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-headline text-2xl font-bold mb-2">Bicicletas de Carretera</h3>
                  <p className="text-white/80 mb-4">Cuadros ultraligeros para sprints de alta velocidad</p>
                  <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">Comprar Ahora</Button>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-surface-container-low rounded-xl">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Bicicleta urbana eléctrica moderna"
src="https://www.lugaresdeaventura.com/sites/default/files/inline-images/mtb.jpg"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-headline text-2xl font-bold mb-2">Bicicletas Urbanas</h3>
                  <p className="text-white/80 mb-4">Soluciones eléctricas ágiles para calles urbanas</p>
                  <Button variant="primary" className="bg-white text-primary hover:bg-gray-100">Comprar Ahora</Button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-on-surface-variant text-lg mb-8">Visítanos en tienda para ver todo nuestro inventario de accesorios y ropa de ciclismo</p>
              <Button variant="tertiary" size="lg">Visitar Tienda</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
