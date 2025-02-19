import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                mono: ["VCR OSD Mono", "ui-monospace", "Courier New", "Courier", "monospace"],
                sans: ["Raleway", "Arial", "sans-serif"],
                accent: ["Monocode", "Courier New", "Courier", "monospace"],
            }
        },
    },
    plugins: [],
} satisfies Config;
