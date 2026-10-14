/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The site uses plain <img>, not next/image. Turning the optimizer off removes the
  // /_next/image endpoint, which has unpatched advisories in Next 14 (see architecture.md).
  images: { unoptimized: true },
};
export default nextConfig;
