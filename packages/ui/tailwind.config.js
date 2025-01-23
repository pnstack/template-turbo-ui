/** @type {import('tailwindcss').Config} */
import sharedConfig from "@repo/tailwind-config";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  ...sharedConfig,
  plugins: [require("@tailwindcss/forms"), ...(sharedConfig.plugins || [])],
};
