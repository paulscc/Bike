import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 border-t border-white/5">
        <div className="space-y-6">
          <div className="text-xl font-bold text-white font-headline uppercase tracking-tighter italic">
            The Kinetic Trail
          </div>
          <p className="text-emerald-100/60 max-w-xs leading-relaxed">
Soluciones de alto rendimiento para ciclistas de gran altitud. Los Andes son nuestro campo de pruebas.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h5 className="text-orange-500 font-bold uppercase text-xs tracking-widest font-headline">Navegar</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Tienda
                </Link>
              </li>
              <li>
                <Link href="/workshop" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Taller
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-orange-500 font-bold uppercase text-xs tracking-widest font-headline">Conectar</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-emerald-100/60 hover:text-orange-400 transition-transform hover:translate-x-1 block">
                  Strava
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <h5 className="text-orange-500 font-bold uppercase text-xs tracking-widest font-headline">Boletín</h5>
          <div className="flex gap-2">
            <input
              className="bg-emerald-900/50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 w-full"
              placeholder="Únete al grupo"
              type="email"
            />
            <button className="bg-orange-500 text-white p-3 rounded-lg flex items-center justify-center scale-95 active:scale-90 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <p className="text-[10px] text-emerald-100/40 font-body uppercase tracking-widest">
            © 2024 The Kinetic Trail Quito. Diseñado para los Andes.
          </p>
        </div>
      </div>
      
      <div className="px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-emerald-100/40 font-body text-xs tracking-normal">
          © 2024 The Kinetic Trail Quito. Diseñado para los Andes.
        </p>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-emerald-100/40" style={{ fontVariationSettings: "'FILL' 1" }}>
            pedal_bike
          </span>
          <span className="material-symbols-outlined text-emerald-100/40" style={{ fontVariationSettings: "'FILL' 1" }}>
            precision_manufacturing
          </span>
          <span className="material-symbols-outlined text-emerald-100/40" style={{ fontVariationSettings: "'FILL' 1" }}>
            landscape
          </span>
        </div>
      </div>
    </footer>
  );
}
