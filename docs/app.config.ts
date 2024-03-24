import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;
export default defineConfig({
    ssr: false,
    server: {
        preset: 'github-pages'
    },
    extensions: ["mdx", "md"],
    vite: {
        plugins: [
            mdx.withImports({})({
                jsx: true,
                jsxImportSource: "solid-js",
                providerImportSource: "solid-mdx"
            })
        ]
    }
});
