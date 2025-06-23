
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-3.expansion.mx',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clinicalikedental.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mxn.iseie.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clinicadentalbarbastro.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'soluciondental.pe',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dentalrosel.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'saluddata.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clinicamaip.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.clinicadentalgonzalezbaquero.es',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.clinicastoma.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.clinicadentalplata.es',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'clinicajuliansaiz.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
