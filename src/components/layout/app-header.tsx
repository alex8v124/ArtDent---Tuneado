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
            ArtDent Info Center
          </h1>
        </Link>
        <nav>
          {/* Navigation links can be added here if needed */}
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
