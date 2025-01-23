/** @type {import('tailwindcss').Config} */
import sharedConfig from "@template-turbo-ui/tailwind-config";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  ...sharedConfig,
  plugins: [require("@tailwindcss/forms"), ...(sharedConfig.plugins || [])],
};
