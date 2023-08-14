/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: "custom",
        loaderFile: "./loader/loader.js",
    },
}

module.exports = nextConfig
