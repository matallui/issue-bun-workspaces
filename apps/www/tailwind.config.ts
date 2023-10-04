import type { Config } from "tailwindcss";

import baseConfig from "@mono/tailwind-config";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
