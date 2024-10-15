/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'base-white': '#f5f5f5',
        'base-black': '#333',
        'primary': "#4672A4",
        'primary-100': "#E3EBF3",
        'primary-300': "#ACC2DC",
        'primary-500': "#759AC4",
        'primary-700': "#3C618C",
        'primary-900': "#273F5B",
        'secondary': "#66BB6A",
        'secondary-100': "#E5F4E6",
        'secondary-300': "#B3DDB4",
        'secondary-500': "#80C683",
        'secondary-700': "#429446",
        'secondary-900': "#2B602D",
        'accent': "#E1F5FE",
        'accent-100': "#F0FAFF",
        'accent-300': "#91DAFB",
        'accent-500': "#41C0F9",
        'accent-700': "#079DE0",
        'accent-900': "#056590",
      },
      fontSize:{
        'h1': '2.5rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'h4': '1.25rem',
        'h5': '1rem',
        'h6': '0.875rem',
        'body': '1rem',
        'small': '0.875rem',
        'tiny': '0.75rem',
      }
    },
  },
  plugins: [],
}
