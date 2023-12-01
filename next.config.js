/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images-americanas.b2w.io", "acdn.mitiendanube.com","www.lojachinashop.com.br", "www.designi.com.br",  "img.freepik.com", "www.google.com"],
      },
      experimental: {
        serverComponents: true,
        serverComponentsMiddleware: true,
      },
}

module.exports = nextConfig