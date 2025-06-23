"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import artDentLogo from '@/components/img/img_logo.png';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../theme-toggle';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/faq', label: 'FAQ' },
  { href: '/reservar-cita', label: 'Reservar Cita' },
];

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-sm text-foreground shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }} transition={{ type: 'spring', stiffness: 400 }}>
              <Image 
                src={artDentLogo} 
                alt="ArtDent Logo" 
                width={40} 
                height={40} 
              />
          </motion.div>
          <h1 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            ArtDent
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }} className="relative">
                <Link
                  href={item.href}
                  className={cn(
                    "text-base font-medium transition-colors duration-200 hover:text-primary py-2",
                    pathname === item.href ? "text-primary font-semibold" : "text-foreground/70"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild>
                    <Link href="/admin/login">
                      <LogIn className="mr-2 h-4 w-4" />
                      Iniciar Sesión
                    </Link>
                </Button>
            </motion.div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
