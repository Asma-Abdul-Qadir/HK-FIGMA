/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // Ensure JavaScript minification is enabled
    experimental: {
      optimizeCss: false, // Disable CSS minification for debugging
    },
  };
  
  export default nextConfig;
  