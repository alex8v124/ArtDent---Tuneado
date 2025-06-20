import React from 'react';
import Link from 'next/link';
import ToothIcon from '@/components/icons/tooth-icon';

const AppHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ToothIcon className="h-8 w-8 text-primary-foreground group-hover:text-accent transition-colors duration-300" />
          <h1 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors duration-300">
            Centro de Información ArtDent
          </h1>
        </Link>
        <nav>
          {/* Los enlaces de navegación se pueden agregar aquí si es necesario */}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
