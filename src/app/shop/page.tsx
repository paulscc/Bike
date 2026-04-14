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

            {/* Individual Bicycle Catalog */}
            <div className="mt-32">
              <div className="mb-16">
                <h2 className="font-headline text-4xl font-bold mb-4">Catálogo Individual</h2>
                <p className="text-on-surface-variant">Bicicletas disponibles en stock</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mountain Bike 1 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Mountain Bike Specialized Epic Pro"
                      src="https://images.pexels.com/photos/35615236/pexels-photo-35615236.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Specialized Epic Pro</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Mountain Bike - Full Suspension</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$4,999</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Road Bike 1 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Road Bike Trek Madone SLR"
                      src="https://images.pexels.com/photos/8755668/pexels-photo-8755668.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Trek Madone SLR</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Road Bike - Carbon Fiber</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$6,499</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Electric Bike 1 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Electric Bike Giant Trance X+"
                      src="https://images.pexels.com/photos/35615323/pexels-photo-35615323.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Giant Trance X+</h3>
                    <p className="text-on-surface-variant text-sm mb-2">E-Bike - Electric Mountain</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$5,299</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Urban Bike 1 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Urban Bike Cannondale Quick"
                      src="https://images.pexels.com/photos/8926961/pexels-photo-8926961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Cannondale Quick</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Urban Bike - Hybrid</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$899</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Mountain Bike 2 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Mountain Bike Santa Cruz Bronson"
                      src="https://images.pexels.com/photos/16998814/pexels-photo-16998814.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Santa Cruz Bronson</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Mountain Bike - Enduro</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$5,799</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Road Bike 2 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Road Bike Specialized Tarmac"
                      src="https://images.pexels.com/photos/34251794/pexels-photo-34251794.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Specialized Tarmac</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Road Bike - Race Ready</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$3,999</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Electric Bike 2 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Electric Bike Specialized Turbo Vado"
                      src="https://images.pexels.com/photos/18584076/pexels-photo-18584076.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Specialized Turbo Vado</h3>
                    <p className="text-on-surface-variant text-sm mb-2">E-Bike - Urban Commuter</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$3,499</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Urban Bike 2 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Urban Bike Giant Escape 3"
                      src="https://images.pexels.com/photos/7635132/pexels-photo-7635132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Giant Escape 3</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Urban Bike - Fitness</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$699</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Mountain Bike 3 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Mountain Bike Yeti SB150"
                      src="https://images.pexels.com/photos/30912844/pexels-photo-30912844.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Yeti SB150</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Mountain Bike - Trail</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$6,299</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Road Bike 3 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Road Bike Pinarello Dogma F12"
                      src="https://images.pexels.com/photos/35615236/pexels-photo-35615236.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Pinarello Dogma F12</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Road Bike - Professional</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$8,999</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Electric Bike 3 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Electric Bike Bosch eBike"
                      src="https://images.pexels.com/photos/8755668/pexels-photo-8755668.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Bosch eBike System</h3>
                    <p className="text-on-surface-variant text-sm mb-2">E-Bike - All Mountain</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$4,299</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Urban Bike 3 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Urban Bike Scott Sub Cross"
                      src="https://images.unsplash.com/photo-1507035895485-5a1c6cd6a8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Scott Sub Cross</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Urban Bike - Gravel</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$1,299</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Mountain Bike 4 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Mountain Bike Rocky Mountain Instinct"
                      src="https://images.unsplash.com/photo-1558622733-3c8c5f2d6c0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Rocky Mountain Instinct</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Mountain Bike - All Mountain</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$4,799</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Road Bike 4 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Road Bike Cervelo S5"
                      src="https://images.unsplash.com/photo-1548191261-391df0ba5c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Cervelo S5</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Road Bike - Aero</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$5,499</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Electric Bike 4 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Electric Bike Haibike XDURO"
                      src="https://images.unsplash.com/photo-1571068316344-57298a98148a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Haibike XDURO</h3>
                    <p className="text-on-surface-variant text-sm mb-2">E-Bike - Trekking</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$3,899</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
                </div>

                {/* Urban Bike 4 */}
                <div className="bg-surface-container-low rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt="Urban Bike Marin Fairfax"
                      src="https://images.unsplash.com/photo-1507035895485-5a1c6cd6a8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      fill
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline text-lg font-bold mb-2">Marin Fairfax</h3>
                    <p className="text-on-surface-variant text-sm mb-2">Urban Bike - Commuter</p>
                    <p className="font-headline text-2xl font-bold text-primary mb-3">$799</p>
                    <Button variant="primary" size="sm" className="w-full">Ver Detalles</Button>
                  </div>
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
