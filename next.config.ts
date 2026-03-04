import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    cacheComponents: true,
    experimental: {
    cacheLife: {
    books: {
      stale: 1800, 
      revalidate: 120, 
      expire: 3600, 
    }
    }
  },
}

export default nextConfig
