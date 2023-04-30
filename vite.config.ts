import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    svgr(),
    react(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development"
      ),
      "process.env.API_URL": JSON.stringify(process.env.API_URL),
      preventAssignment: true,
    }),
  ],
});
