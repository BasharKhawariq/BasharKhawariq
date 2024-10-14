/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        textGlow: {
          "0%, 100%": {
            opacity: 1,
            filter: "drop-shadow(0 0 10px rgba(99, 102, 241, 0.8))",
          },
          "50%": {
            opacity: 0.8,
            filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 1))",
          },
        },
      },
      animation: {
        textGlow: "textGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
