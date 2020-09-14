const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
    env: {
        HOMEPAGE: process.env.URL || process.env.VERCEL_URL,
    },
    webpack: (config, {
        isServer
    }) => {
        if (!isServer) {
            config.node = {
                fs: "empty",
            };
        }

        config.module.rules = [
            ...config.module.rules,
            {
                test: /\.(ttf)$/i,
                loader: "file-loader",
            },
            {
                test: /\.(frag|vert|glsl)$/i,
                loader: "glsl-shader-loader",
            },
            {
                test: /\.mdx?$/,
                use: ["babel-loader", "@mdx-js/loader"],
            },
        ];

        return config;
    },
});