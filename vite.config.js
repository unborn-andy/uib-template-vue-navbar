import { defineConfig, splitVendorChunkPlugin } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

const httpsOptions = {
  key: require("fs").readFileSync("c:/Users/User/.node-red/cert/cert-key.pem"),
  cert: require("fs").readFileSync("c:/Users/User/.node-red/cert/cert.pem"),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    root: "./src",
    base: command === "build" ? "./" : "/navbar/",
    build: {
      outDir: "../dist",
      minify: false,
      sourcemap: false,
      chunkSizeWarningLimit: 1600,
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
    },
    plugins: [createVuePlugin(), splitVendorChunkPlugin()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      https: httpsOptions,
      fs: { strict: false },
    },
  };
});
