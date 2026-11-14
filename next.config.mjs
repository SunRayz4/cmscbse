/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  trailingSlash:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 't3.ftcdn.net',
        pathname: '/jpg/**',
      },
      
    ],
    qualities: [75, 85],
  },
  async redirects() {
    return [
      { source: '/about-us', destination: '/our-school/about', permanent: true },
      { source: '/vision-mission', destination: '/our-school/vision-mission', permanent: true },
      { source: '/principals-message', destination: '/our-school/principal-message', permanent: true },
      { source: '/chairmans-message', destination: '/our-school/chairman-message', permanent: true },
      { source: '/school-history', destination: '/our-school/history', permanent: true },
      { source: '/infrastructure-facilities', destination: '/campus/facilities', permanent: true },
      { source: '/cbse-curriculum', destination: '/academics/curriculum', permanent: true },
      { source: '/faculty-staff', destination: '/academics/faculty', permanent: true },
      { source: '/admission-process', destination: '/admissions/process', permanent: true },
      { source: '/fee-structure', destination: '/admissions/fees', permanent: true },
      { source: '/academic-calendar', destination: '/information/academic-calendar', permanent: true },
      { source: '/school-timings', destination: '/information/school-timings', permanent: true },
      { source: '/gallery', destination: '/campus/gallery', permanent: true },
      { source: '/events-activities', destination: '/campus/events', permanent: true },
      { source: '/news-announcements', destination: '/information/news', permanent: true },
      { source: '/achievements', destination: '/campus/achievements', permanent: true },
      { source: '/mandatory-public-disclosure', destination: '/information/cbse-public-disclosure', permanent: true },
      { source: '/mandatory-documents', destination: '/information/mandatory-documents', permanent: true },
      { source: '/transfer-certificate', destination: '/information/transfer-certificate', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://images.unsplash.com https://t3.ftcdn.net; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self'",
          },
        ],
      },
    ]
  },
}

export default nextConfig
