/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  sassOptions: {
    includePaths: ['./node_modules'],
    silenceDeprecations: ['legacy-js-api'],
  },
  turbopack: {
    resolveAlias: {
      '~@ibm/plex': '@ibm/plex',
      '~@carbon': '@carbon',
    },
  },
}

module.exports = nextConfig
