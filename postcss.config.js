module.exports = {
    plugins: {
        tailwindcss: {
            purge: [
                "./pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./pages/*.{js,ts,jsx,tsx,mdx}",
                "./components/**/*.{js,ts,jsx,tsx,mdx}",
                "./components/*.{js,ts,jsx,tsx,mdx}",
            ],
        },
        autoprefixer: {},
    },
};
