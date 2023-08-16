/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['jsontest.vercel.app']
    }
}

module.exports = nextConfig
