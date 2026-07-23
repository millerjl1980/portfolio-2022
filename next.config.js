const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform (Next 13+)
        // Replaces the manual ServerStyleSheet setup in _document.js
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;