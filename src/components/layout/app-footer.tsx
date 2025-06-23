import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Star, BookOpen } from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3-2.5 2.7-2.5 2.7S21.5 12 21.5 13a24.12 24.12 0 0 1 0 10c0 1-5 3-9.5 3s-9.5-2-9.5-3z"></path><path d="m10 15 5-3-5-3z"></path></svg>
);


const VisaIcon = () => (
    <svg width="48" height="32" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-md p-1">
        <path d="M22.46.32H16.32L12.54 23.6h6.12l3.8-23.28zM31.26 7.2c-.84-3.84-4.2-6.84-8.88-6.84-4.8 0-7.86 2.52-7.86 6.12 0 2.88 2.28 4.56 3.96 5.4 1.8.96 2.52 1.56 2.52 2.4 0 1.32-1.56 1.8-3.12 1.8-2.28 0-3.24-.48-4.32-1.08l-.84.24-1.2 5.52c.84.48 2.52.84 4.56.84 5.28 0 8.28-2.52 8.28-6.48 0-3.6-2.52-4.92-4.2-5.76-1.56-.72-2.28-1.32-2.28-2.28 0-.96 1.08-1.56 2.76-1.56 1.8 0 2.64.48 3.36.84l.6-.24 1.32-5.4zM37.98 23.6h3.48L38.1 3.48h-3.36l-3 20.12h3.48l.6-4.08h2.52l.36 4.08zM10.02.32L6.12 15.12l-.96-4.56c-.48-1.8-1.56-3.12-3.12-3.84L.24 5.76 0 4.56 3.3.32h6.72z" fill="#0157a2"></path>
    </svg>
);

const MasterCardIcon = () => (
    <svg width="48" height="32" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-md p-1">
        <circle cx="15" cy="12" r="7" fill="#EB001B"></circle>
        <circle cx="23" cy="12" r="7" fill="#F79E1B"></circle>
        <path d="M20 12a7 7 0 0 1-5 6.7V5.3a7 7 0 0 1 5 6.7z" fill="#FF5F00"></path>
    </svg>
);

const AppFooter = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:flex-1">
            <div>
              <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Sobre ArtDent</h3>
              <ul className="space-y-3">
                <li><Link href="/nosotros" className="hover:text-white transition-colors text-sm">Nosotros</Link></li>
                <li><Link href="/servicios" className="hover:text-white transition-colors text-sm">Servicios</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors text-sm">Preguntas Frecuentes</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Legal</h3>
              <ul className="space-y-3">
                <li><Link href="/terminos" className="hover:text-white transition-colors text-sm">Términos y Condiciones</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors text-sm">Política de Privacidad</Link></li>
                <li className="mt-4">
                  <Link href="#" className="border border-gray-400 rounded-md p-2 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors text-sm">
                    <BookOpen className="h-5 w-5 flex-shrink-0" />
                    <span className="text-center">Libro de Reclamaciones</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Contáctanos</h3>
              <ul className="space-y-3 text-sm">
                <li><p>Av. Sonrisa 123, Miraflores, Lima</p></li>
                <li><p>(01) 555-1234</p></li>
                <li><p>contacto@artdent.com</p></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:ml-12">
             <h3 className="font-bold text-white mb-4 tracking-wide uppercase">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></Link>
              <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon /></Link>
              <Link href="#" aria-label="Youtube" className="hover:text-white transition-colors"><YoutubeIcon /></Link>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-700" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm">
            <div className="flex items-center justify-center gap-3">
                <ShieldCheck className="h-7 w-7 text-green-400"/>
                <span>Pagos 100% Seguros</span>
            </div>
             <div className="flex items-center justify-center gap-3">
                <MapPin className="h-7 w-7 text-blue-400"/>
                <span>Ubicación Conveniente</span>
            </div>
             <div className="flex items-center justify-center gap-3">
                <Star className="h-7 w-7 text-yellow-400"/>
                <span>Servicio de Calidad</span>
            </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 my-10">
            <p className="text-sm">Operamos con:</p>
            <VisaIcon />
            <MasterCardIcon />
        </div>

        <hr className="my-10 border-gray-700" />

        <div className="text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Clínica ArtDent. Todos los derechos reservados. | RUC: 20100123763</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
