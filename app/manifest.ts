import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Roundi - Delivery Management Platform',
    short_name: 'Roundi',
    description: 'Transform your delivery operations with Roundi. Track orders, manage riders, and delight customers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#162318',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
