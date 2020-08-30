const withMdxEnhanced = require('next-mdx-enhanced')
const withOptimizedImages = require('next-optimized-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
    withMdxEnhanced({
        fileExtensions: ['mdx', 'md']
    })(
        withOptimizedImages({
            env: {
                HOMEPAGE: process.env.URL || process.env.VERCEL_URL,
                GA_KEY: process.env.GA_KEY
            }
        })
    )
)
