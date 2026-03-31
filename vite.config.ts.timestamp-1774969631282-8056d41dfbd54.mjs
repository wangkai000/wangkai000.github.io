// vite.config.ts
import path, { resolve } from "node:path";
import { defineConfig } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue@3.4.33_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue-route_ebb049f7a6af439b12cc3b3ae4a7e070/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rol_d90d6430ceb436d3413be93cccffffdd/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.12.4_rollup@4.19.0__@vueuse+core@10.11.0_vue@3._634f8d26d13946d46de4f17c88baf87e/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueI18n from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.19.0_vue-i18n@9.13.1_vue@3.4.33_typescript@5.5.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import LinkAttributes from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import WebfontDownload from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/index.mjs";
import Pages from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.33_vite@5.3.4_@types+node@20.14.11_terse_3c4a74e9d96691d440d47cc7a5cd9f4c/node_modules/vite-plugin-pages/dist/index.js";
import fs from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import MarkdownItShiki from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+markdown-it@1.10.3/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import tailwind from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/tailwindcss@3.4.6/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.39/node_modules/autoprefixer/lib/autoprefixer.js";
import GitHubAlerts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";

// plugins/operate-blog.ts
import { execSync } from "node:child_process";
import { URL } from "node:url";
import process from "node:process";
import fse from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
function operateBlogPlugin() {
  return {
    name: "operate-blog-plugin",
    configureServer(server) {
      if (process.env.NODE_ENV !== "development") {
        return;
      }
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith("/createMd") || req.url?.startsWith("/deleteMd")) {
          const action = req.url.startsWith("/createMd") ? "create" : "delete";
          const { searchParams } = new URL(
            `http://${req.headers.host}${req.url}`
          );
          const name = searchParams.get("name");
          const type = searchParams.get("type");
          if (type !== "post" && type !== "weekly") return;
          let command = "";
          if (action === "create") {
            command = process.platform !== "win32" ? `touch blog/${type}/${name}.md` : `echo. > blog/${type}/${name}.md`;
          } else {
            command = `rimraf blog/${type}/${name}.md`;
          }
          execSync(command);
        }
        if (req.url?.startsWith("/updateMd")) {
          if (fse.existsSync(`blog/post/test.md`)) {
            const content = await fse.readFile(
              `blog/post/test.md`,
              "utf-8"
            );
            fse.writeFile(
              `blog/post/test.md`,
              JSON.stringify("777")
            );
          }
        }
        next();
      });
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "/Users/Shared/Previously Relocated Items/Security/myProjiect/my_blog/my-blog";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
      "@/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  build: {
    target: "es2019",
    // 1 browsers can handle the latest ES features
    outDir: "docs",
    // 打包后生成的静态资源名（[name] 会被替换为文件名，[hash] 是内容的 hash 值）
    assetsDir: "assets",
    // 打包后生成的 CSS 文件名
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // 自定义打包后的入口文件名
        entryFileNames: "assets/[name]-[hash].js",
        // 自定义打包后的 chunk 文件名
        chunkFileNames: "chunks/[name]-[hash].js",
        // 自定义打包后的 CSS 文件名
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
        // manualChunks: {
        // vue vue-router合并打包
        // vue: ['vue', 'vue-router'],
        // },
      }
    },
    // 启用/配置压缩
    minify: "terser",
    // 使用 terser 压缩 JS
    // terserOptions: {}, // 你可以在这里配置 terser 的选项
    // 启用/禁用 source map
    sourcemap: false,
    // 启用/禁用构建后的文件大小报告
    brotliSize: false,
    // 启用 Brotli 压缩大小报告
    chunkSizeWarningLimit: 2e3
    // 警告的 chunk 大小限制（以 KB 为单位）
  },
  plugins: [
    operateBlogPlugin(),
    // visualizer({
    //   open: false, // 构建完成后自动打开报告
    //   filename: 'stats.html', // 报告文件的名称
    //   gzipSize: true, // 收集gzip大小并显示
    //   brotliSize: true, // 收集brotli大小并显示
    //   // 其他可选配置...
    // }),
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      extensions: ["vue", "md"],
      dirs: [
        { dir: "src/pages", baseRoute: "" },
        // features dir for pages
        { dir: "blog", baseRoute: "blog" }
      ],
      extendRoute(route) {
        const path2 = resolve(__vite_injected_original_dirname, route.component.slice(1));
        if (!path2.includes("projects.md") && path2.endsWith(".md")) {
          const md = fs.readFileSync(path2, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, {
            frontmatter: {
              ...data,
              description: data.desc
            }
          });
        }
        return route;
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typings/typed-router.d.ts"
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        // 正确使用VueRouterAutoImports
        VueRouterAutoImports,
        // 正确的包导入配置格式
        { from: "vue-router/auto", imports: ["useLink"] },
        {
          from: "naive-ui",
          imports: [
            { name: "useNotification", as: "useNotification" },
            { name: "default", as: "NaiveUI" }
          ]
        }
      ],
      dts: "src/typings/auto-imports.d.ts",
      dirs: ["src/composables", "src/stores"],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/typings/components.d.ts"
    }),
    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      wrapperComponent: (id) => id.includes("/demo/") ? "WrapperDemo" : "WrapperPost",
      wrapperClasses: (id, code) => code.includes("@layout-full-width") ? "" : "prose m-auto slide-enter-content",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(
          await MarkdownItShiki({
            themes: {
              dark: "github-dark",
              light: "catppuccin-latte"
            },
            defaultColor: false,
            cssVariablePrefix: "--s-",
            transformers: [
              transformerTwoslash({
                explicitTrigger: true,
                renderer: rendererRich()
              })
            ]
          })
        );
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(GitHubAlerts);
      }
      // frontmatterPreprocess(frontmatter, options, id, defaults) {
      //   (() => {
      //     if (!id.endsWith('.md'))
      //       return
      //     const route = basename(id, '.md')
      //     if (
      //       route === 'index'
      //       || frontmatter.image
      //       || !frontmatter.title
      //     ) {
      //       return
      //     }
      //     const path = `og/${route}.png`
      //     promises.push(
      //       fs.existsSync(`${id.slice(0, -3)}.png`)
      //         ? fs.copy(
      //                             `${id.slice(0, -3)}.png`,
      //                             `public/${path}`,
      //         )
      //         : generateOg(
      //           frontmatter.title!.trim(),
      //                             `public/${path}`,
      //                             frontmatter.date as string,
      //         ),
      //     )
      //     frontmatter.image = `https://mmeme.me/${encodeURIComponent(path)}`
      //     frontmatter.description
      //                   = (frontmatter?.desc as string) || ''
      //   })()
      //   const head = defaults(frontmatter, options)
      //   return { head, frontmatter }
      // },
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      selfDestroying: true,
      // 禁用了
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "",
        short_name: "\u5929\u6E3Astudio\u7684\u5C0F\u7AD9",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload()
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    // 添加naive-ui到noExternal配置，解决CommonJS模块导入问题
    noExternal: [
      "workbox-window",
      /vue-i18n/,
      "naive-ui",
      "vueuc"
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGx1Z2lucy9vcGVyYXRlLWJsb2cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGgsIHsgYmFzZW5hbWUsIGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gXCJ2aXRlLXNzZy1zaXRlbWFwXCI7XG5pbXBvcnQgTGF5b3V0cyBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWxheW91dHNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJ1bnBsdWdpbi12dWUtbWFya2Rvd24vdml0ZVwiO1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSBcIkBpbnRsaWZ5L3VucGx1Z2luLXZ1ZS1pMThuL3ZpdGVcIjtcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tIFwidml0ZS1wbHVnaW4tcHdhXCI7XG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSBcIm1hcmtkb3duLWl0LWxpbmstYXR0cmlidXRlc1wiO1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tIFwidml0ZS1wbHVnaW4td2ViZm9udC1kbFwiO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidW5wbHVnaW4tdnVlLXJvdXRlci92aXRlXCI7XG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gXCJ1bnBsdWdpbi12dWUtcm91dGVyXCI7XG5pbXBvcnQgUGFnZXMgZnJvbSBcInZpdGUtcGx1Z2luLXBhZ2VzXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzLWV4dHJhXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcblxuaW1wb3J0IE1hcmtkb3duSXRTaGlraSBmcm9tIFwiQHNoaWtpanMvbWFya2Rvd24taXRcIjtcbmltcG9ydCB7IHJlbmRlcmVyUmljaCwgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gXCJAc2hpa2lqcy90d29zbGFzaFwiO1xuaW1wb3J0IHRhaWx3aW5kIGZyb20gXCJ0YWlsd2luZGNzc1wiO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XG5pbXBvcnQgYW5jaG9yIGZyb20gXCJtYXJrZG93bi1pdC1hbmNob3JcIjtcbmltcG9ydCBHaXRIdWJBbGVydHMgZnJvbSBcIm1hcmtkb3duLWl0LWdpdGh1Yi1hbGVydHNcIjtcblxuaW1wb3J0IFRPQyBmcm9tIFwibWFya2Rvd24taXQtdGFibGUtb2YtY29udGVudHNcIjtcbmltcG9ydCBzaGFycCBmcm9tIFwic2hhcnBcIjtcbi8vIGltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICcuL3NjcmlwdHMvc2x1Z2lmeSdcbmltcG9ydCBvcGVyYXRlQmxvZ1BsdWdpbiBmcm9tIFwiLi9wbHVnaW5zL29wZXJhdGUtYmxvZ1wiO1xuaW1wb3J0IHsgU0lURSB9IGZyb20gXCJAL2NvbmZpZy9wYXJhbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIGNzczoge1xuICAgICAgICBwb3N0Y3NzOiB7XG4gICAgICAgICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgICBhbGlhczoge1xuICAgICAgICAgICAgXCJ+L1wiOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKX0vYCxcbiAgICAgICAgICAgIFwiQC9cIjogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIil9L2AsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgICB0YXJnZXQ6IFwiZXMyMDE5XCIsIC8vIDEgYnJvd3NlcnMgY2FuIGhhbmRsZSB0aGUgbGF0ZXN0IEVTIGZlYXR1cmVzXG4gICAgICAgIG91dERpcjogXCJkb2NzXCIsXG4gICAgICAgIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzUxRlx1NjIxMFx1NzY4NFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTQwRFx1RkYwOFtuYW1lXSBcdTRGMUFcdTg4QUJcdTY2RkZcdTYzNjJcdTRFM0FcdTY1ODdcdTRFRjZcdTU0MERcdUZGMENbaGFzaF0gXHU2NjJGXHU1MTg1XHU1QkI5XHU3Njg0IGhhc2ggXHU1MDNDXHVGRjA5XG4gICAgICAgIGFzc2V0c0RpcjogXCJhc3NldHNcIixcbiAgICAgICAgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU3NTFGXHU2MjEwXHU3Njg0IENTUyBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICAgICAgICAvLyBcdTgxRUFcdTVCOUFcdTRFNDlcdTYyNTNcdTUzMDVcdTU0MEVcdTc2ODRcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NCBjaHVuayBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJjaHVua3MvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgICAgICAgIC8vIFx1ODFFQVx1NUI5QVx1NEU0OVx1NjI1M1x1NTMwNVx1NTQwRVx1NzY4NCBDU1MgXHU2NTg3XHU0RUY2XHU1NDBEXG4gICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIixcbiAgICAgICAgICAgICAgICAvLyBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAgICAgICAvLyB2dWUgdnVlLXJvdXRlclx1NTQwOFx1NUU3Nlx1NjI1M1x1NTMwNVxuICAgICAgICAgICAgICAgIC8vIHZ1ZTogWyd2dWUnLCAndnVlLXJvdXRlciddLFxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAvLyBcdTU0MkZcdTc1MjgvXHU5MTREXHU3RjZFXHU1MzhCXHU3RjI5XG4gICAgICAgIG1pbmlmeTogXCJ0ZXJzZXJcIiBhcyBjb25zdCwgLy8gXHU0RjdGXHU3NTI4IHRlcnNlciBcdTUzOEJcdTdGMjkgSlNcbiAgICAgICAgLy8gdGVyc2VyT3B0aW9uczoge30sIC8vIFx1NEY2MFx1NTNFRlx1NEVFNVx1NTcyOFx1OEZEOVx1OTFDQ1x1OTE0RFx1N0Y2RSB0ZXJzZXIgXHU3Njg0XHU5MDA5XHU5ODc5XG5cbiAgICAgICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOCBzb3VyY2UgbWFwXG4gICAgICAgIHNvdXJjZW1hcDogZmFsc2UsXG5cbiAgICAgICAgLy8gXHU1NDJGXHU3NTI4L1x1Nzk4MVx1NzUyOFx1Njc4NFx1NUVGQVx1NTQwRVx1NzY4NFx1NjU4N1x1NEVGNlx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVxuICAgICAgICBicm90bGlTaXplOiBmYWxzZSwgLy8gXHU1NDJGXHU3NTI4IEJyb3RsaSBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdThCNjZcdTU0NEFcdTc2ODQgY2h1bmsgXHU1OTI3XHU1QzBGXHU5NjUwXHU1MjM2XHVGRjA4XHU0RUU1IEtCIFx1NEUzQVx1NTM1NVx1NEY0RFx1RkYwOVxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIG9wZXJhdGVCbG9nUGx1Z2luKCksXG4gICAgICAgIC8vIHZpc3VhbGl6ZXIoe1xuICAgICAgICAvLyAgIG9wZW46IGZhbHNlLCAvLyBcdTY3ODRcdTVFRkFcdTVCOENcdTYyMTBcdTU0MEVcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTYyQTVcdTU0NEFcbiAgICAgICAgLy8gICBmaWxlbmFtZTogJ3N0YXRzLmh0bWwnLCAvLyBcdTYyQTVcdTU0NEFcdTY1ODdcdTRFRjZcdTc2ODRcdTU0MERcdTc5RjBcbiAgICAgICAgLy8gICBnemlwU2l6ZTogdHJ1ZSwgLy8gXHU2NTM2XHU5NkM2Z3ppcFx1NTkyN1x1NUMwRlx1NUU3Nlx1NjYzRVx1NzkzQVxuICAgICAgICAvLyAgIGJyb3RsaVNpemU6IHRydWUsIC8vIFx1NjUzNlx1OTZDNmJyb3RsaVx1NTkyN1x1NUMwRlx1NUU3Nlx1NjYzRVx1NzkzQVxuICAgICAgICAvLyAgIC8vIFx1NTE3Nlx1NEVENlx1NTNFRlx1OTAwOVx1OTE0RFx1N0Y2RS4uLlxuICAgICAgICAvLyB9KSxcbiAgICAgICAgVnVlKHtcbiAgICAgICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgUGFnZXMoe1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogW1widnVlXCIsIFwibWRcIl0sXG4gICAgICAgICAgICBkaXJzOiBbXG4gICAgICAgICAgICAgICAgeyBkaXI6IFwic3JjL3BhZ2VzXCIsIGJhc2VSb3V0ZTogXCJcIiB9LFxuICAgICAgICAgICAgICAgIC8vIGZlYXR1cmVzIGRpciBmb3IgcGFnZXNcbiAgICAgICAgICAgICAgICB7IGRpcjogXCJibG9nXCIsIGJhc2VSb3V0ZTogXCJibG9nXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBleHRlbmRSb3V0ZShyb3V0ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSByZXNvbHZlKF9fZGlybmFtZSwgcm91dGUuY29tcG9uZW50LnNsaWNlKDEpKTtcblxuICAgICAgICAgICAgICAgIGlmICghcGF0aC5pbmNsdWRlcyhcInByb2plY3RzLm1kXCIpICYmIHBhdGguZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgXCJ1dGYtOFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIobWQpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZS5tZXRhID0gT2JqZWN0LmFzc2lnbihyb3V0ZS5tZXRhIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9udG1hdHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG4gICAgICAgIFZ1ZVJvdXRlcih7XG4gICAgICAgICAgICBleHRlbnNpb25zOiBbXCIudnVlXCIsIFwiLm1kXCJdLFxuICAgICAgICAgICAgZHRzOiBcInNyYy90eXBpbmdzL3R5cGVkLXJvdXRlci5kLnRzXCIsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huQ2FtcGlvbkpyL3ZpdGUtcGx1Z2luLXZ1ZS1sYXlvdXRzXG4gICAgICAgIExheW91dHMoKSxcblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICAgICAgQXV0b0ltcG9ydCh7XG4gICAgICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgICAgICAgICBcInZ1ZS1pMThuXCIsXG4gICAgICAgICAgICAgICAgXCJAdnVldXNlL2hlYWRcIixcbiAgICAgICAgICAgICAgICBcIkB2dWV1c2UvY29yZVwiLFxuICAgICAgICAgICAgICAgIC8vIFx1NkI2M1x1Nzg2RVx1NEY3Rlx1NzUyOFZ1ZVJvdXRlckF1dG9JbXBvcnRzXG4gICAgICAgICAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgICAgICAgICAgLy8gXHU2QjYzXHU3ODZFXHU3Njg0XHU1MzA1XHU1QkZDXHU1MTY1XHU5MTREXHU3RjZFXHU2ODNDXHU1RjBGXG4gICAgICAgICAgICAgICAgeyBmcm9tOiBcInZ1ZS1yb3V0ZXIvYXV0b1wiLCBpbXBvcnRzOiBbXCJ1c2VMaW5rXCJdIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIm5haXZlLXVpXCIsXG4gICAgICAgICAgICAgICAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJ1c2VOb3RpZmljYXRpb25cIiwgYXM6IFwidXNlTm90aWZpY2F0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCJkZWZhdWx0XCIsIGFzOiBcIk5haXZlVUlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZHRzOiBcInNyYy90eXBpbmdzL2F1dG8taW1wb3J0cy5kLnRzXCIsXG4gICAgICAgICAgICBkaXJzOiBbXCJzcmMvY29tcG9zYWJsZXNcIiwgXCJzcmMvc3RvcmVzXCJdLFxuICAgICAgICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgICAgICBDb21wb25lbnRzKHtcbiAgICAgICAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxuICAgICAgICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgICAgICAgIGR0czogXCJzcmMvdHlwaW5ncy9jb21wb25lbnRzLmQudHNcIixcbiAgICAgICAgfSksXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luL3VucGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgICAgICBNYXJrZG93bih7XG4gICAgICAgICAgICB3cmFwcGVyQ29tcG9uZW50OiAoaWQpID0+XG4gICAgICAgICAgICAgICAgaWQuaW5jbHVkZXMoXCIvZGVtby9cIikgPyBcIldyYXBwZXJEZW1vXCIgOiBcIldyYXBwZXJQb3N0XCIsXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NlczogKGlkLCBjb2RlKSA9PlxuICAgICAgICAgICAgICAgIGNvZGUuaW5jbHVkZXMoXCJAbGF5b3V0LWZ1bGwtd2lkdGhcIilcbiAgICAgICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJwcm9zZSBtLWF1dG8gc2xpZGUtZW50ZXItY29udGVudFwiLFxuXG4gICAgICAgICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGFzeW5jIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vc2hpa2kuc3R5bGUvZ3VpZGUvXG4gICAgICAgICAgICAgICAgbWQudXNlKFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBNYXJrZG93bkl0U2hpa2koe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazogXCJnaXRodWItZGFya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZ2h0OiBcImNhdHBwdWNjaW4tbGF0dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzVmFyaWFibGVQcmVmaXg6IFwiLS1zLVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZXJUd29zbGFzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGxpY2l0VHJpZ2dlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyUmljaCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIG1kLnVzZShhbmNob3IsIHtcbiAgICAgICAgICAgICAgICAvLyAgIHNsdWdpZnksXG4gICAgICAgICAgICAgICAgLy8gICBwZXJtYWxpbms6IGFuY2hvci5wZXJtYWxpbmsubGlua0luc2lkZUhlYWRlcih7XG4gICAgICAgICAgICAgICAgLy8gICAgIHN5bWJvbDogJyMnLFxuICAgICAgICAgICAgICAgIC8vICAgICByZW5kZXJBdHRyczogKCkgPT4gKHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICAgICAgICAgIC8vICAgfSksXG4gICAgICAgICAgICAgICAgLy8gfSlcblxuICAgICAgICAgICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVyOiAobGluazogc3RyaW5nKSA9PiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QobGluayksXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIG1kLnVzZShUT0MsIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluY2x1ZGVMZXZlbDogWzEsIDIsIDMsIDRdLFxuICAgICAgICAgICAgICAgIC8vICAgc2x1Z2lmeSxcbiAgICAgICAgICAgICAgICAvLyAgIGNvbnRhaW5lckhlYWRlckh0bWw6IGBcbiAgICAgICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW9mLWNvbnRlbnRzLWFuY2hvciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAvLyAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMyA0aDE4djJIM3ptMCA3aDEydjJIM3ptMCA3aDE4djJIM3pcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIC8vICAgYCxcbiAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAgICAgbWQudXNlKEdpdEh1YkFsZXJ0cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZnJvbnRtYXR0ZXJQcmVwcm9jZXNzKGZyb250bWF0dGVyLCBvcHRpb25zLCBpZCwgZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIC8vICAgKCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoIWlkLmVuZHNXaXRoKCcubWQnKSlcbiAgICAgICAgICAgIC8vICAgICAgIHJldHVyblxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IHJvdXRlID0gYmFzZW5hbWUoaWQsICcubWQnKVxuICAgICAgICAgICAgLy8gICAgIGlmIChcbiAgICAgICAgICAgIC8vICAgICAgIHJvdXRlID09PSAnaW5kZXgnXG4gICAgICAgICAgICAvLyAgICAgICB8fCBmcm9udG1hdHRlci5pbWFnZVxuICAgICAgICAgICAgLy8gICAgICAgfHwgIWZyb250bWF0dGVyLnRpdGxlXG4gICAgICAgICAgICAvLyAgICAgKSB7XG4gICAgICAgICAgICAvLyAgICAgICByZXR1cm5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgcGF0aCA9IGBvZy8ke3JvdXRlfS5wbmdgXG4gICAgICAgICAgICAvLyAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIC8vICAgICAgIGZzLmV4aXN0c1N5bmMoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgKVxuICAgICAgICAgICAgLy8gICAgICAgICA/IGZzLmNvcHkoXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBwdWJsaWMvJHtwYXRofWAsXG4gICAgICAgICAgICAvLyAgICAgICAgIClcbiAgICAgICAgICAgIC8vICAgICAgICAgOiBnZW5lcmF0ZU9nKFxuICAgICAgICAgICAgLy8gICAgICAgICAgIGZyb250bWF0dGVyLnRpdGxlIS50cmltKCksXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHB1YmxpYy8ke3BhdGh9YCxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9udG1hdHRlci5kYXRlIGFzIHN0cmluZyxcbiAgICAgICAgICAgIC8vICAgICAgICAgKSxcbiAgICAgICAgICAgIC8vICAgICApXG4gICAgICAgICAgICAvLyAgICAgZnJvbnRtYXR0ZXIuaW1hZ2UgPSBgaHR0cHM6Ly9tbWVtZS5tZS8ke2VuY29kZVVSSUNvbXBvbmVudChwYXRoKX1gXG4gICAgICAgICAgICAvLyAgICAgZnJvbnRtYXR0ZXIuZGVzY3JpcHRpb25cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgID0gKGZyb250bWF0dGVyPy5kZXNjIGFzIHN0cmluZykgfHwgJydcbiAgICAgICAgICAgIC8vICAgfSkoKVxuICAgICAgICAgICAgLy8gICBjb25zdCBoZWFkID0gZGVmYXVsdHMoZnJvbnRtYXR0ZXIsIG9wdGlvbnMpXG4gICAgICAgICAgICAvLyAgIHJldHVybiB7IGhlYWQsIGZyb250bWF0dGVyIH1cbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICAgICAgVml0ZVBXQSh7XG4gICAgICAgICAgICBzZWxmRGVzdHJveWluZzogdHJ1ZSwgLy8gXHU3OTgxXHU3NTI4XHU0RTg2XG4gICAgICAgICAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxuICAgICAgICAgICAgaW5jbHVkZUFzc2V0czogW1wiZmF2aWNvbi5zdmdcIl0sXG4gICAgICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRfbmFtZTogXCJcdTU5MjlcdTZFM0FzdHVkaW9cdTc2ODRcdTVDMEZcdTdBRDlcIixcbiAgICAgICAgICAgICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9wd2EtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvcHdhLTUxMng1MTIucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL3B3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG5cbiAgICAgICAgVnVlSTE4bih7XG4gICAgICAgICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgICAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwibG9jYWxlcy8qKlwiKV0sXG4gICAgICAgIH0pLFxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgICAgIFdlYmZvbnREb3dubG9hZCgpLFxuICAgIF0sXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgICBzc2dPcHRpb25zOiB7XG4gICAgICAgIHNjcmlwdDogXCJhc3luY1wiLFxuICAgICAgICBmb3JtYXR0aW5nOiBcIm1pbmlmeVwiLFxuICAgICAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgICAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG9uRmluaXNoZWQoKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZVNpdGVtYXAoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3NyOiB7XG4gICAgICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICAgICAgLy8gXHU2REZCXHU1MkEwbmFpdmUtdWlcdTUyMzBub0V4dGVybmFsXHU5MTREXHU3RjZFXHVGRjBDXHU4OUUzXHU1MUIzQ29tbW9uSlNcdTZBMjFcdTU3NTdcdTVCRkNcdTUxNjVcdTk1RUVcdTk4OThcbiAgICAgICAgbm9FeHRlcm5hbDogW1xuICAgICAgICAgICAgXCJ3b3JrYm94LXdpbmRvd1wiLFxuICAgICAgICAgICAgL3Z1ZS1pMThuLyBhcyBjb25zdCxcbiAgICAgICAgICAgIFwibmFpdmUtdWlcIixcbiAgICAgICAgICAgIFwidnVldWNcIixcbiAgICAgICAgXSBhcyAoc3RyaW5nIHwgUmVnRXhwKVtdLFxuICAgIH0sXG59KTtcblxuLy8gY29uc3Qgb2dTVmcgPSBmcy5yZWFkRmlsZVN5bmMoJy4vc2NyaXB0cy9vZy10ZW1wbGF0ZS5zdmcnLCAndXRmLTgnKVxuXG4vLyBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU9nKHRpdGxlOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbi8vICAgaWYgKGZzLmV4aXN0c1N5bmMob3V0cHV0KSlcbi8vICAgICByZXR1cm5cblxuLy8gICBhd2FpdCBmcy5ta2RpcihkaXJuYW1lKG91dHB1dCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4vLyAgIC8vIGJyZWFrbGluZSBldmVyeSAyNSBjaGFyc1xuLy8gICBjb25zdCBsaW5lcyA9IHRpdGxlXG4vLyAgICAgLnRyaW0oKVxuLy8gICAgIC5zcGxpdCgvKC57MCwyNX0pKD86XFxzfCQpL2cpXG4vLyAgICAgLmZpbHRlcihCb29sZWFuKVxuXG4vLyAgIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4vLyAgICAgbGluZTE6IGxpbmVzWzBdLFxuLy8gICAgIGxpbmUyOiBsaW5lc1sxXSB8fCBkYXRlLFxuLy8gICAgIGxpbmUzOiBsaW5lc1syXSB8fCBkYXRlLFxuLy8gICB9XG4vLyAgIGNvbnN0IHN2ZyA9IG9nU1ZnLnJlcGxhY2UoXG4vLyAgICAgL1xce1xceyhbXn1dKylcXH1cXH0vZyxcbi8vICAgICAoXywgbmFtZSkgPT4gZGF0YVtuYW1lXSB8fCAnJyxcbi8vICAgKVxuXG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4vLyAgIGNvbnNvbGUubG9nKGBHZW5lcmF0aW5nICR7b3V0cHV0fWApXG4vLyAgIHRyeSB7XG4vLyAgICAgYXdhaXQgc2hhcnAoQnVmZmVyLmZyb20oc3ZnKSlcbi8vICAgICAgIC5yZXNpemUoMTIwMCAqIDEuMSwgNjMwICogMS4xKVxuLy8gICAgICAgLnBuZygpXG4vLyAgICAgICAudG9GaWxlKG91dHB1dClcbi8vICAgfVxuLy8gICBjYXRjaCAoZSkge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBvZyBpbWFnZScsIGUpXG4vLyAgIH1cbi8vIH1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzXCI7aW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tIFwibm9kZTpjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcbmltcG9ydCBwcm9jZXNzIGZyb20gXCJub2RlOnByb2Nlc3NcIjtcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBmc2UgZnJvbSBcImZzLWV4dHJhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZXJhdGVCbG9nUGx1Z2luKCk6IFBsdWdpbk9wdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogXCJvcGVyYXRlLWJsb2ctcGx1Z2luXCIsXG4gICAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU0RTBEXHU2NjJGXHU1RjAwXHU1M0QxXHU2QTIxXHU1RjBGXHVGRjBDXHU1MjE5XHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHVGRjBDXHU0RTBEXHU1RTk0XHU3NTI4XHU2M0QyXHU0RUY2XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcmVxLnVybD8uc3RhcnRzV2l0aChcIi9jcmVhdGVNZFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICByZXEudXJsPy5zdGFydHNXaXRoKFwiL2RlbGV0ZU1kXCIpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHJlcS51cmwuc3RhcnRzV2l0aChcIi9jcmVhdGVNZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiZGVsZXRlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwoXG4gICAgICAgICAgICAgICAgICAgICAgICBgaHR0cDovLyR7cmVxLmhlYWRlcnMuaG9zdH0ke3JlcS51cmx9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoUGFyYW1zLmdldChcInR5cGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgIT09IFwicG9zdFwiICYmIHR5cGUgIT09IFwid2Vla2x5XCIpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tbWFuZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09IFwiY3JlYXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1hbmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MucGxhdGZvcm0gIT09IFwid2luMzJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGB0b3VjaCBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgZWNoby4gPiBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tYW5kID0gYHJpbXJhZiBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBleGVjU3luYyhjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxLnVybD8uc3RhcnRzV2l0aChcIi91cGRhdGVNZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnNlLmV4aXN0c1N5bmMoYGJsb2cvcG9zdC90ZXN0Lm1kYCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmc2UucmVhZEZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJsb2cvcG9zdC90ZXN0Lm1kYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInV0Zi04XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnNlLndyaXRlRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYmxvZy9wb3N0L3Rlc3QubWRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KFwiNzc3XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBaLE9BQU8sUUFBMkIsZUFBZTtBQUMzYyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixPQUFPLGFBQWE7QUFDcEIsU0FB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
