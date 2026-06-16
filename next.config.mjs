/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: Si usas imágenes alojadas externamente (Cloudinary, etc.), agrega aquí los dominios permitidos.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "vz-938afc4c-68d.b-cdn.net",
      },
    ],
  },
};

export default nextConfig;
