/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                flip: "0.5s linear flipping"
            },
            keyframes: {
                flipping: {
                    "0%, 100%": { transform: "rotateX(0deg)" },
                    "50%": { transform: "rotateX(90deg)" }
                }
            }
        }
    },
    plugins: []
};
