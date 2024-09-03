// vite.config.ts
import path, { basename, dirname, resolve } from "node:path";
import { Buffer } from "node:buffer";
import { defineConfig } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue@3.4.33_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue-router@4.4._pys5xjr3bp55ggpbunlmvr2mja/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rollup@4._dzhxtinnkngnwnc46pa3y2bacu/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.12.4_rollup@4.19.0__@vueuse+core@10.11.0_vue@3.4.33_t_olgyfgjnvgotnbc477tuvgbude/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueI18n from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.19.0_vue-i18n@9.13.1_vue@3.4.33_typescript@5.5.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import LinkAttributes from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import WebfontDownload from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/index.mjs";
import Pages from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.33_vite@5.3.4_@types+node@20.14.11_terser@5.31_h7hk4h6exsyeqfeqpifytludnm/node_modules/vite-plugin-pages/dist/index.js";
import fs from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import MarkdownItShiki from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+markdown-it@1.10.3/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import tailwind from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/tailwindcss@3.4.6/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.39/node_modules/autoprefixer/lib/autoprefixer.js";
import anchor from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-anchor@8.6.7_@types+markdown-it@14.1.1_markdown-it@14.1.0/node_modules/markdown-it-anchor/dist/markdownItAnchor.js";
import GitHubAlerts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import TOC from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/markdown-it-table-of-contents@0.6.0/node_modules/markdown-it-table-of-contents/index.js";
import sharp from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/sharp@0.32.6/node_modules/sharp/lib/index.js";

// scripts/slugify.ts
import { remove } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/my-blog/node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js";
var rControl = /[\u0000-\u001F]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
function slugify(str) {
  return remove(str).replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
}

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
          const { searchParams } = new URL(`http://${req.headers.host}${req.url}`);
          const name = searchParams.get("name");
          const type = searchParams.get("type");
          if (type !== "post" && type !== "weekly")
            return;
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
            const content = await fse.readFile(`blog/post/test.md`, "utf-8");
            fse.writeFile(`blog/post/test.md`, JSON.stringify("777"));
          }
        }
        next();
      });
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "/Users/Shared/Previously Relocated Items/Security/myProjiect/my_blog/my-blog";
var promises = [];
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
    // outDir: 'docs',
    // 打包后生成的静态资源名（[name] 会被替换为文件名，[hash] 是内容的 hash 值）
    assetsDir: "assets",
    // 打包后生成的 HTML 入口文件名
    entryFileNames: "assets/[name]-[hash].js",
    // 打包后生成的 CSS 文件名
    cssCodeSplit: true,
    rollupOptions: {
      output: {
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
    // 启用/禁用构建后的清理（删除 outDir 目录）
    cleanCss: true,
    // 启用/禁用构建后的文件大小报告
    brotliSize: false,
    // 启用 Brotli 压缩大小报告
    chunkSizeWarningLimit: 2e3
    // 警告的 chunk 大小限制（以 KB 为单位）
  },
  plugins: [
    operateBlogPlugin(),
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
          route.meta = Object.assign(
            route.meta || {},
            {
              frontmatter: {
                ...data,
                description: data.desc
              }
            }
          );
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
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: "src/typings/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
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
        md.use(await MarkdownItShiki({
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
        }));
        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: "#",
            renderAttrs: () => ({ "aria-hidden": "true" })
          })
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: `
            <div class="table-of-contents-anchor hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/></svg>
            </div>
          `
        });
        md.use(GitHubAlerts);
      },
      frontmatterPreprocess(frontmatter, options, id, defaults) {
        (() => {
          if (!id.endsWith(".md"))
            return;
          const route = basename(id, ".md");
          if (route === "index" || frontmatter.image || !frontmatter.title)
            return;
          const path2 = `og/${route}.png`;
          promises.push(
            fs.existsSync(`${id.slice(0, -3)}.png`) ? fs.copy(`${id.slice(0, -3)}.png`, `public/${path2}`) : generateOg(frontmatter.title.trim(), `public/${path2}`, frontmatter.date)
          );
          frontmatter.image = `https://mmeme.me/${encodeURIComponent(path2)}`;
          frontmatter.description = frontmatter?.desc || "";
        })();
        const head = defaults(frontmatter, options);
        return { head, frontmatter };
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      selfDestroying: true,
      // 禁用了
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
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
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
var ogSVg = fs.readFileSync("./scripts/og-template.svg", "utf-8");
async function generateOg(title, output, date) {
  if (fs.existsSync(output))
    return;
  await fs.mkdir(dirname(output), { recursive: true });
  const lines = title.trim().split(/(.{0,25})(?:\s|$)/g).filter(Boolean);
  const data = {
    line1: lines[0],
    line2: lines[1] || date,
    line3: lines[2] || date
  };
  const svg = ogSVg.replace(/\{\{([^}]+)\}\}/g, (_, name) => data[name] || "");
  console.log(`Generating ${output}`);
  try {
    await sharp(Buffer.from(svg)).resize(1200 * 1.1, 630 * 1.1).png().toFile(output);
  } catch (e) {
    console.error("Failed to generate og image", e);
  }
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9zbHVnaWZ5LnRzIiwgInBsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHklMjBSZWxvY2F0ZWQlMjBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoLCB7IGJhc2VuYW1lLCBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnbm9kZTpidWZmZXInXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuXG5pbXBvcnQgTWFya2Rvd25JdFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xuaW1wb3J0IHsgcmVuZGVyZXJSaWNoLCB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdHdvc2xhc2gnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBhbmNob3IgZnJvbSAnbWFya2Rvd24taXQtYW5jaG9yJ1xuaW1wb3J0IEdpdEh1YkFsZXJ0cyBmcm9tICdtYXJrZG93bi1pdC1naXRodWItYWxlcnRzJ1xuXG5pbXBvcnQgVE9DIGZyb20gJ21hcmtkb3duLWl0LXRhYmxlLW9mLWNvbnRlbnRzJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJy4vc2NyaXB0cy9zbHVnaWZ5J1xuaW1wb3J0IG9wZXJhdGVCbG9nUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9vcGVyYXRlLWJsb2cnXG5cbmNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgICAnQC8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlczIwMTknLCAvLyAxIGJyb3dzZXJzIGNhbiBoYW5kbGUgdGhlIGxhdGVzdCBFUyBmZWF0dXJlc1xuICAgIC8vIG91dERpcjogJ2RvY3MnLFxuICAgIC8vIFx1NjI1M1x1NTMwNVx1NTQwRVx1NzUxRlx1NjIxMFx1NzY4NFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTQwRFx1RkYwOFtuYW1lXSBcdTRGMUFcdTg4QUJcdTY2RkZcdTYzNjJcdTRFM0FcdTY1ODdcdTRFRjZcdTU0MERcdUZGMENbaGFzaF0gXHU2NjJGXHU1MTg1XHU1QkI5XHU3Njg0IGhhc2ggXHU1MDNDXHVGRjA5XG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc1MUZcdTYyMTBcdTc2ODQgSFRNTCBcdTUxNjVcdTUzRTNcdTY1ODdcdTRFRjZcdTU0MERcbiAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAvLyBcdTYyNTNcdTUzMDVcdTU0MEVcdTc1MUZcdTYyMTBcdTc2ODQgQ1NTIFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0IGNodW5rIFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2NodW5rcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2MjUzXHU1MzA1XHU1NDBFXHU3Njg0IENTUyBcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgIC8vIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIHZ1ZSB2dWUtcm91dGVyXHU1NDA4XHU1RTc2XHU2MjUzXHU1MzA1XG4gICAgICAgICAgLy8gdnVlOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgIC8vIH0sXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU5MTREXHU3RjZFXHU1MzhCXHU3RjI5XG4gICAgbWluaWZ5OiAndGVyc2VyJywgLy8gXHU0RjdGXHU3NTI4IHRlcnNlciBcdTUzOEJcdTdGMjkgSlNcbiAgICAvLyB0ZXJzZXJPcHRpb25zOiB7fSwgLy8gXHU0RjYwXHU1M0VGXHU0RUU1XHU1NzI4XHU4RkQ5XHU5MUNDXHU5MTREXHU3RjZFIHRlcnNlciBcdTc2ODRcdTkwMDlcdTk4NzlcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1Mjggc291cmNlIG1hcFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG5cbiAgICAvLyBcdTU0MkZcdTc1MjgvXHU3OTgxXHU3NTI4XHU2Nzg0XHU1RUZBXHU1NDBFXHU3Njg0XHU2RTA1XHU3NDA2XHVGRjA4XHU1MjIwXHU5NjY0IG91dERpciBcdTc2RUVcdTVGNTVcdUZGMDlcbiAgICBjbGVhbkNzczogdHJ1ZSxcblxuICAgIC8vIFx1NTQyRlx1NzUyOC9cdTc5ODFcdTc1MjhcdTY3ODRcdTVFRkFcdTU0MEVcdTc2ODRcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICBicm90bGlTaXplOiBmYWxzZSwgLy8gXHU1NDJGXHU3NTI4IEJyb3RsaSBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcdTYyQTVcdTU0NEFcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMDAsIC8vIFx1OEI2Nlx1NTQ0QVx1NzY4NCBjaHVuayBcdTU5MjdcdTVDMEZcdTk2NTBcdTUyMzZcdUZGMDhcdTRFRTUgS0IgXHU0RTNBXHU1MzU1XHU0RjREXHVGRjA5XG4gIH0sXG5cbiAgcGx1Z2luczogW1xuXG4gICAgb3BlcmF0ZUJsb2dQbHVnaW4oKSxcblxuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG5cbiAgICBQYWdlcyh7XG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgZGlyczogW1xuICAgICAgICB7IGRpcjogJ3NyYy9wYWdlcycsIGJhc2VSb3V0ZTogJycgfSxcbiAgICAgICAgLy8gZmVhdHVyZXMgZGlyIGZvciBwYWdlc1xuICAgICAgICB7IGRpcjogJ2Jsb2cnLCBiYXNlUm91dGU6ICdibG9nJyB9LFxuICAgICAgXSxcbiAgICAgIGV4dGVuZFJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSByZXNvbHZlKF9fZGlybmFtZSwgcm91dGUuY29tcG9uZW50LnNsaWNlKDEpKVxuXG4gICAgICAgIGlmICghcGF0aC5pbmNsdWRlcygncHJvamVjdHMubWQnKSAmJiBwYXRoLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgICAgIGNvbnN0IG1kID0gZnMucmVhZEZpbGVTeW5jKHBhdGgsICd1dGYtOCcpXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBtYXR0ZXIobWQpXG4gICAgICAgICAgcm91dGUubWV0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByb3V0ZS5tZXRhIHx8IHt9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmcm9udG1hdHRlcjoge1xuICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEuZGVzYyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3ZhL3VucGx1Z2luLXZ1ZS1yb3V0ZXJcbiAgICBWdWVSb3V0ZXIoe1xuICAgICAgZXh0ZW5zaW9uczogWycudnVlJywgJy5tZCddLFxuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvdHlwZWQtcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBhZGQgYW55IG90aGVyIGltcG9ydHMgeW91IHdlcmUgcmVseWluZyBvblxuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxuICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tdnVlLWNvbXBvbmVudHNcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIC8vIGFsbG93IGF1dG8gbG9hZCBtYXJrZG93biBjb21wb25lbnRzIHVuZGVyIGAuL3NyYy9jb21wb25lbnRzL2BcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICAvLyBhbGxvdyBhdXRvIGltcG9ydCBhbmQgcmVnaXN0ZXIgY29tcG9uZW50cyB1c2VkIGluIG1hcmtkb3duXG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLm1kJC9dLFxuICAgICAgZHRzOiAnc3JjL3R5cGluZ3MvY29tcG9uZW50cy5kLnRzJyxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bnBsdWdpbi91bnBsdWdpbi12dWUtbWFya2Rvd25cbiAgICBNYXJrZG93bih7XG4gICAgICB3cmFwcGVyQ29tcG9uZW50OiBpZCA9PiBpZC5pbmNsdWRlcygnL2RlbW8vJylcbiAgICAgICAgPyAnV3JhcHBlckRlbW8nXG4gICAgICAgIDogJ1dyYXBwZXJQb3N0JyxcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAoaWQsIGNvZGUpID0+IGNvZGUuaW5jbHVkZXMoJ0BsYXlvdXQtZnVsbC13aWR0aCcpXG4gICAgICAgID8gJydcbiAgICAgICAgOiAncHJvc2UgbS1hdXRvIHNsaWRlLWVudGVyLWNvbnRlbnQnLFxuXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIGFzeW5jIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3NoaWtpLnN0eWxlL2d1aWRlL1xuICAgICAgICBtZC51c2UoYXdhaXQgTWFya2Rvd25JdFNoaWtpKHtcbiAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgIGRhcms6ICdnaXRodWItZGFyaycsXG4gICAgICAgICAgICBsaWdodDogJ2NhdHBwdWNjaW4tbGF0dGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICBjc3NWYXJpYWJsZVByZWZpeDogJy0tcy0nLFxuICAgICAgICAgIHRyYW5zZm9ybWVyczogW1xuICAgICAgICAgICAgdHJhbnNmb3JtZXJUd29zbGFzaCh7XG4gICAgICAgICAgICAgIGV4cGxpY2l0VHJpZ2dlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgcmVuZGVyZXI6IHJlbmRlcmVyUmljaCgpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSkpXG5cbiAgICAgICAgbWQudXNlKGFuY2hvciwge1xuICAgICAgICAgIHNsdWdpZnksXG4gICAgICAgICAgcGVybWFsaW5rOiBhbmNob3IucGVybWFsaW5rLmxpbmtJbnNpZGVIZWFkZXIoe1xuICAgICAgICAgICAgc3ltYm9sOiAnIycsXG4gICAgICAgICAgICByZW5kZXJBdHRyczogKCkgPT4gKHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnIH0pLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIG1kLnVzZShUT0MsIHtcbiAgICAgICAgICBpbmNsdWRlTGV2ZWw6IFsxLCAyLCAzLCA0XSxcbiAgICAgICAgICBzbHVnaWZ5LFxuICAgICAgICAgIGNvbnRhaW5lckhlYWRlckh0bWw6IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1vZi1jb250ZW50cy1hbmNob3IgaGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0zIDRoMTh2Mkgzem0wIDdoMTJ2Mkgzem0wIDdoMTh2MkgzelwiLz48L3N2Zz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGAsXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWQudXNlKEdpdEh1YkFsZXJ0cylcbiAgICAgIH0sXG4gICAgICBmcm9udG1hdHRlclByZXByb2Nlc3MoZnJvbnRtYXR0ZXIsIG9wdGlvbnMsIGlkLCBkZWZhdWx0cykge1xuICAgICAgICAoKCkgPT4ge1xuICAgICAgICAgIGlmICghaWQuZW5kc1dpdGgoJy5tZCcpKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgY29uc3Qgcm91dGUgPSBiYXNlbmFtZShpZCwgJy5tZCcpXG4gICAgICAgICAgaWYgKHJvdXRlID09PSAnaW5kZXgnIHx8IGZyb250bWF0dGVyLmltYWdlIHx8ICFmcm9udG1hdHRlci50aXRsZSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIGNvbnN0IHBhdGggPSBgb2cvJHtyb3V0ZX0ucG5nYFxuICAgICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgICBmcy5leGlzdHNTeW5jKGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYClcbiAgICAgICAgICAgICAgPyBmcy5jb3B5KGAke2lkLnNsaWNlKDAsIC0zKX0ucG5nYCwgYHB1YmxpYy8ke3BhdGh9YClcbiAgICAgICAgICAgICAgOiBnZW5lcmF0ZU9nKGZyb250bWF0dGVyLnRpdGxlIS50cmltKCksIGBwdWJsaWMvJHtwYXRofWAsIChmcm9udG1hdHRlci5kYXRlIGFzIHN0cmluZykpLFxuICAgICAgICAgIClcbiAgICAgICAgICBmcm9udG1hdHRlci5pbWFnZSA9IGBodHRwczovL21tZW1lLm1lLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpfWBcbiAgICAgICAgICBmcm9udG1hdHRlci5kZXNjcmlwdGlvbiA9IGZyb250bWF0dGVyPy5kZXNjIGFzIHN0cmluZyB8fCAnJ1xuICAgICAgICB9KSgpXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkZWZhdWx0cyhmcm9udG1hdHRlciwgb3B0aW9ucylcbiAgICAgICAgcmV0dXJuIHsgaGVhZCwgZnJvbnRtYXR0ZXIgfVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHNlbGZEZXN0cm95aW5nOiB0cnVlLCAvLyBcdTc5ODFcdTc1MjhcdTRFODZcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdWaXRlc3NlJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1ZpdGVzc2UnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKCksXG4gIF0sXG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtc3NnXG4gIHNzZ09wdGlvbnM6IHtcbiAgICBzY3JpcHQ6ICdhc3luYycsXG4gICAgZm9ybWF0dGluZzogJ21pbmlmeScsXG4gICAgY3JpdHRlcnNPcHRpb25zOiB7XG4gICAgICByZWR1Y2VJbmxpbmVTdHlsZXM6IGZhbHNlLFxuICAgIH0sXG4gICAgb25GaW5pc2hlZCgpIHtcbiAgICAgIGdlbmVyYXRlU2l0ZW1hcCgpXG4gICAgfSxcbiAgfSxcblxuICBzc3I6IHtcbiAgICAvLyBUT0RPOiB3b3JrYXJvdW5kIHVudGlsIHRoZXkgc3VwcG9ydCBuYXRpdmUgRVNNXG4gICAgbm9FeHRlcm5hbDogWyd3b3JrYm94LXdpbmRvdycsIC92dWUtaTE4bi9dLFxuICB9LFxufSlcblxuY29uc3Qgb2dTVmcgPSBmcy5yZWFkRmlsZVN5bmMoJy4vc2NyaXB0cy9vZy10ZW1wbGF0ZS5zdmcnLCAndXRmLTgnKVxuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZU9nKHRpdGxlOiBzdHJpbmcsIG91dHB1dDogc3RyaW5nLCBkYXRlOiBzdHJpbmcpIHtcbiAgaWYgKGZzLmV4aXN0c1N5bmMob3V0cHV0KSlcbiAgICByZXR1cm5cblxuICBhd2FpdCBmcy5ta2RpcihkaXJuYW1lKG91dHB1dCksIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG4gIC8vIGJyZWFrbGluZSBldmVyeSAyNSBjaGFyc1xuICBjb25zdCBsaW5lcyA9IHRpdGxlLnRyaW0oKS5zcGxpdCgvKC57MCwyNX0pKD86XFxzfCQpL2cpLmZpbHRlcihCb29sZWFuKVxuXG4gIGNvbnN0IGRhdGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgbGluZTE6IGxpbmVzWzBdLFxuICAgIGxpbmUyOiBsaW5lc1sxXSB8fCBkYXRlLFxuICAgIGxpbmUzOiBsaW5lc1syXSB8fCBkYXRlLFxuICB9XG4gIGNvbnN0IHN2ZyA9IG9nU1ZnLnJlcGxhY2UoL1xce1xceyhbXn1dKylcXH1cXH0vZywgKF8sIG5hbWUpID0+IGRhdGFbbmFtZV0gfHwgJycpXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coYEdlbmVyYXRpbmcgJHtvdXRwdXR9YClcbiAgdHJ5IHtcbiAgICBhd2FpdCBzaGFycChCdWZmZXIuZnJvbShzdmcpKVxuICAgICAgLnJlc2l6ZSgxMjAwICogMS4xLCA2MzAgKiAxLjEpXG4gICAgICAucG5nKClcbiAgICAgIC50b0ZpbGUob3V0cHV0KVxuICB9XG4gIGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIG9nIGltYWdlJywgZSlcbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3NjcmlwdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL215LWJsb2cvc2NyaXB0cy9zbHVnaWZ5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3NjcmlwdHMvc2x1Z2lmeS50c1wiOy8vIHN0cmluZy5qcyBzbHVnaWZ5IGRyb3BzIG5vbiBhc2NpaSBjaGFycyBzbyB3ZSBoYXZlIHRvXG4vLyB1c2UgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gaGVyZVxuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnZGlhY3JpdGljcydcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IHJDb250cm9sID0gL1tcXHUwMDAwLVxcdTAwMUZdL2dcbmNvbnN0IHJTcGVjaWFsID0gL1tcXHN+YCFAIyQlXiYqKClcXC1fKz1bXFxde318XFxcXDs6XCInPD4sLj8vXSsvZ1xuXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiAoXG4gICAgcmVtb3ZlKHN0cilcbiAgICAgIC8vIFJlbW92ZSBjb250cm9sIGNoYXJhY3RlcnNcbiAgICAgIC5yZXBsYWNlKHJDb250cm9sLCAnJylcbiAgICAgIC8vIFJlcGxhY2Ugc3BlY2lhbCBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZShyU3BlY2lhbCwgJy0nKVxuICAgICAgLy8gUmVtb3ZlIGNvbnRpbnVvcyBzZXBhcmF0b3JzXG4gICAgICAucmVwbGFjZSgvLXsyLH0vZywgJy0nKVxuICAgICAgLy8gUmVtb3ZlIHByZWZpeGluZyBhbmQgdHJhaWxpbmcgc2VwYXJ0b3JzXG4gICAgICAucmVwbGFjZSgvXi0rfC0rJC9nLCAnJylcbiAgICAgIC8vIGVuc3VyZSBpdCBkb2Vzbid0IHN0YXJ0IHdpdGggYSBudW1iZXIgKCMxMjEpXG4gICAgICAucmVwbGFjZSgvXihcXGQpLywgJ18kMScpXG4gICAgICAvLyBsb3dlcmNhc2VcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gIClcbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvbXktYmxvZy9wbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvU2hhcmVkL1ByZXZpb3VzbHkgUmVsb2NhdGVkIEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9teS1ibG9nL3BsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzXCI7aW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tICdub2RlOmNoaWxkX3Byb2Nlc3MnXG5pbXBvcnQgeyBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCBwcm9jZXNzIGZyb20gJ25vZGU6cHJvY2VzcydcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSdcbmltcG9ydCBmc2UgZnJvbSAnZnMtZXh0cmEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9wZXJhdGVCbG9nUGx1Z2luKCk6IFBsdWdpbk9wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ29wZXJhdGUtYmxvZy1wbHVnaW4nLFxuICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAvLyBcdTU5ODJcdTY3OUNcdTRFMERcdTY2MkZcdTVGMDBcdTUzRDFcdTZBMjFcdTVGMEZcdUZGMENcdTUyMTlcdTc2RjRcdTYzQTVcdThGRDRcdTU2REVcdUZGMENcdTRFMERcdTVFOTRcdTc1MjhcdTYzRDJcdTRFRjZcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNlcnZlci5taWRkbGV3YXJlcy51c2UoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgIGlmIChyZXEudXJsPy5zdGFydHNXaXRoKCcvY3JlYXRlTWQnKSB8fCByZXEudXJsPy5zdGFydHNXaXRoKCcvZGVsZXRlTWQnKSkge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHJlcS51cmwuc3RhcnRzV2l0aCgnL2NyZWF0ZU1kJykgPyAnY3JlYXRlJyA6ICdkZWxldGUnXG5cbiAgICAgICAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChgaHR0cDovLyR7cmVxLmhlYWRlcnMuaG9zdH0ke3JlcS51cmx9YClcbiAgICAgICAgICBjb25zdCBuYW1lID0gc2VhcmNoUGFyYW1zLmdldCgnbmFtZScpXG4gICAgICAgICAgY29uc3QgdHlwZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3R5cGUnKVxuXG4gICAgICAgICAgaWYgKHR5cGUgIT09ICdwb3N0JyAmJiB0eXBlICE9PSAnd2Vla2x5JylcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgICAgbGV0IGNvbW1hbmQgPSAnJ1xuICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICBjb21tYW5kID0gcHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ3dpbjMyJ1xuICAgICAgICAgICAgICA/IGB0b3VjaCBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGBcbiAgICAgICAgICAgICAgOiBgZWNoby4gPiBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGBcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21tYW5kID0gYHJpbXJhZiBibG9nLyR7dHlwZX0vJHtuYW1lfS5tZGBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBleGVjU3luYyhjb21tYW5kKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcS51cmw/LnN0YXJ0c1dpdGgoJy91cGRhdGVNZCcpKSB7XG4gICAgICAgICAgaWYgKGZzZS5leGlzdHNTeW5jKGBibG9nL3Bvc3QvdGVzdC5tZGApKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgZnNlLnJlYWRGaWxlKGBibG9nL3Bvc3QvdGVzdC5tZGAsICd1dGYtOCcpXG4gICAgICAgICAgICBmc2Uud3JpdGVGaWxlKGBibG9nL3Bvc3QvdGVzdC5tZGAsIEpTT04uc3RyaW5naWZ5KCc3NzcnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0KClcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwWixPQUFPLFFBQVEsVUFBVSxTQUFTLGVBQWU7QUFDM2MsU0FBUyxjQUFjO0FBQ3ZCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxx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
