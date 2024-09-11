/** @type {import('next').NextConfig} */
export default defineConfig({
    eslint: {
        // Disable ESLint during production builds
        ignoreDuringBuilds: true,
    },
});