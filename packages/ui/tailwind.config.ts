import type { Config } from "tailwindcss";
import { sharedConfig } from "./shared.config";
// for now , exporting it , instead of adding a new path for the shared config
export { sharedConfig };

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  ...sharedConfig,

} satisfies Config;

export default config;
