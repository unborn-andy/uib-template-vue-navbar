import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";

const httpsOptions = {
  key: require("fs").readFileSync("c:/Users/User/.node-red/cert/cert-key.pem"),
  cert: require("fs").readFileSync("c:/Users/User/.node-red/cert/cert.pem"),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    root: "./src",
    // base: command === "build" ? "./" : "/navbar/",
    base: "./",
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
      // hot module reload for dev server
      // hmr: {
      //   host: "192.168.0.7",
      //   protocol: "wss",
      //   clientPort: 3000,
      //   port: 443,
      // },
      // proxy: {
      //   "/navbar/": {
      //     target: "https://192.168.0.7:1880/navbar",
      //     changeOrigin: true,
      //     secure: false,
      //     ws: true,
      //     rewrite: (path) => path.replace(/^\/navbar/, "")
      //   },
        // "^/uibuilder/*": {
        //   target: "https://192.168.0.7:1880/uibuilder",
        //   changeOrigin: true,
        //   secure: false,
        //   ws: true,
        //   // rewrite: (path) => path.replace(/^\/uibuilder/, "")
        // },
        // "/*": {
        //   target: "https://192.168.0.7:1880/",
        //   changeOrigin: true,
        //   secure: false,
        //   ws: true,
        //   // rewrite: (path) => path.replace(/^\/uibuilder/, "")
        // }
      // }
    },
  };
});
