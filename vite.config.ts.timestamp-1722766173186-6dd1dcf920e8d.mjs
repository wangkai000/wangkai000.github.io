// vite.config.ts
import path, { basename, dirname, resolve } from "node:path";
import { Buffer } from "node:buffer";
import { defineConfig } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite@5.3.4_@types+node@20.14.11_terser@5.31.3/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue@3.4.33_typescript@5.5.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__vue-router@4.4._pys5xjr3bp55ggpbunlmvr2mja/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.24.8_@nuxt+kit@3.12.4_rollup@4.19.0__rollup@4._dzhxtinnkngnwnc46pa3y2bacu/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/unplugin-auto-import@0.17.8_@nuxt+kit@3.12.4_rollup@4.19.0__@vueuse+core@10.11.0_vue@3.4.33_t_olgyfgjnvgotnbc477tuvgbude/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.19.0_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueI18n from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.19.0_vue-i18n@9.13.1_vue@3.4.33_typescript@5.5.3__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite-plugin-pwa@0.19.8_vite@5.3.4_@types+node@20.14.11_terser@5.31.3__workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import LinkAttributes from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import WebfontDownload from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.3.4_@types+node@20.14.11_terser@5.31.3_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.0_vue-router@4.4.0_vue@3.4.33_typescript@5.5.3___vue@3.4.33_typescript@5.5.3_/node_modules/unplugin-vue-router/dist/index.mjs";
import Pages from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/vite-plugin-pages@0.32.3_@vue+compiler-sfc@3.4.33_vite@5.3.4_@types+node@20.14.11_terser@5.31_h7hk4h6exsyeqfeqpifytludnm/node_modules/vite-plugin-pages/dist/index.js";
import fs from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
import matter from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/gray-matter@4.0.3/node_modules/gray-matter/index.js";
import MarkdownItShiki from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/@shikijs+markdown-it@1.10.3/node_modules/@shikijs/markdown-it/dist/index.mjs";
import { rendererRich, transformerTwoslash } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/@shikijs+twoslash@1.10.3_typescript@5.5.3/node_modules/@shikijs/twoslash/dist/index.mjs";
import tailwind from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/tailwindcss@3.4.6/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/autoprefixer@10.4.19_postcss@8.4.39/node_modules/autoprefixer/lib/autoprefixer.js";
import anchor from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/markdown-it-anchor@8.6.7_@types+markdown-it@14.1.1_markdown-it@14.1.0/node_modules/markdown-it-anchor/dist/markdownItAnchor.js";
import GitHubAlerts from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/markdown-it-github-alerts@0.3.0_markdown-it@14.1.0/node_modules/markdown-it-github-alerts/dist/index.mjs";
import TOC from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/markdown-it-table-of-contents@0.6.0/node_modules/markdown-it-table-of-contents/index.js";
import sharp from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/sharp@0.32.6/node_modules/sharp/lib/index.js";

// scripts/slugify.ts
import { remove } from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js";
var rControl = /[\u0000-\u001F]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
function slugify(str) {
  return remove(str).replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
}

// plugins/operate-blog.ts
import { execSync } from "node:child_process";
import { URL } from "node:url";
import process from "node:process";
import fse from "file:///Users/Shared/Previously%20Relocated%20Items/Security/myProjiect/my_blog/arvin/node_modules/.pnpm/fs-extra@11.2.0/node_modules/fs-extra/lib/index.js";
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
var __vite_injected_original_dirname = "/Users/Shared/Previously Relocated Items/Security/myProjiect/my_blog/arvin";
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
    target: "esnext"
    // browsers can handle the latest ES features
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
  const svg = ogSVg.replace(/\{\{([^}]+)}}/g, (_, name) => data[name] || "");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic2NyaXB0cy9zbHVnaWZ5LnRzIiwgInBsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvYXJ2aW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL2FydmluL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9hcnZpbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBwYXRoLCB7IGJhc2VuYW1lLCBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnbm9kZTpidWZmZXInXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFdlYmZvbnREb3dubG9hZCBmcm9tICd2aXRlLXBsdWdpbi13ZWJmb250LWRsJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyL3ZpdGUnXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgUGFnZXMgZnJvbSAndml0ZS1wbHVnaW4tcGFnZXMnXG5pbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJ1xuXG5pbXBvcnQgTWFya2Rvd25JdFNoaWtpIGZyb20gJ0BzaGlraWpzL21hcmtkb3duLWl0J1xuaW1wb3J0IHsgcmVuZGVyZXJSaWNoLCB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdHdvc2xhc2gnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBhbmNob3IgZnJvbSAnbWFya2Rvd24taXQtYW5jaG9yJ1xuaW1wb3J0IEdpdEh1YkFsZXJ0cyBmcm9tICdtYXJrZG93bi1pdC1naXRodWItYWxlcnRzJ1xuXG5pbXBvcnQgVE9DIGZyb20gJ21hcmtkb3duLWl0LXRhYmxlLW9mLWNvbnRlbnRzJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJy4vc2NyaXB0cy9zbHVnaWZ5J1xuaW1wb3J0IG9wZXJhdGVCbG9nUGx1Z2luIGZyb20gJy4vcGx1Z2lucy9vcGVyYXRlLWJsb2cnXG5cbmNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZCgpLCBhdXRvcHJlZml4ZXIoKV0sXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgICAnQC8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLCAvLyBicm93c2VycyBjYW4gaGFuZGxlIHRoZSBsYXRlc3QgRVMgZmVhdHVyZXNcbiAgfSxcblxuICBwbHVnaW5zOiBbXG5cbiAgICBvcGVyYXRlQmxvZ1BsdWdpbigpLFxuXG4gICAgVnVlKHtcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC5tZCQvXSxcbiAgICB9KSxcblxuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgICBkaXJzOiBbXG4gICAgICAgIHsgZGlyOiAnc3JjL3BhZ2VzJywgYmFzZVJvdXRlOiAnJyB9LFxuICAgICAgICAvLyBmZWF0dXJlcyBkaXIgZm9yIHBhZ2VzXG4gICAgICAgIHsgZGlyOiAnYmxvZycsIGJhc2VSb3V0ZTogJ2Jsb2cnIH0sXG4gICAgICBdLFxuICAgICAgZXh0ZW5kUm91dGUocm91dGUpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHJlc29sdmUoX19kaXJuYW1lLCByb3V0ZS5jb21wb25lbnQuc2xpY2UoMSkpXG5cbiAgICAgICAgaWYgKCFwYXRoLmluY2x1ZGVzKCdwcm9qZWN0cy5tZCcpICYmIHBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICAgICAgY29uc3QgbWQgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0Zi04JylcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IG1hdHRlcihtZClcbiAgICAgICAgICByb3V0ZS5tZXRhID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJvdXRlLm1ldGEgfHwge30sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGZyb250bWF0dGVyOiB7XG4gICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm91dGVcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy90eXBlZC1yb3V0ZXIuZC50cycsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICAndnVlJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICBWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcbiAgICAgICAge1xuICAgICAgICAgIC8vIGFkZCBhbnkgb3RoZXIgaW1wb3J0cyB5b3Ugd2VyZSByZWx5aW5nIG9uXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXIvYXV0byc6IFsndXNlTGluayddLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGR0czogJ3NyYy90eXBpbmdzL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICAgIGRpcnM6IFtcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcycsXG4gICAgICAgICdzcmMvc3RvcmVzJyxcbiAgICAgIF0sXG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgLy8gYWxsb3cgYXV0byBsb2FkIG1hcmtkb3duIGNvbXBvbmVudHMgdW5kZXIgYC4vc3JjL2NvbXBvbmVudHMvYFxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnLCAnbWQnXSxcbiAgICAgIC8vIGFsbG93IGF1dG8gaW1wb3J0IGFuZCByZWdpc3RlciBjb21wb25lbnRzIHVzZWQgaW4gbWFya2Rvd25cbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luL3VucGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDb21wb25lbnQ6IGlkID0+IGlkLmluY2x1ZGVzKCcvZGVtby8nKVxuICAgICAgICA/ICdXcmFwcGVyRGVtbydcbiAgICAgICAgOiAnV3JhcHBlclBvc3QnLFxuICAgICAgd3JhcHBlckNsYXNzZXM6IChpZCwgY29kZSkgPT4gY29kZS5pbmNsdWRlcygnQGxheW91dC1mdWxsLXdpZHRoJylcbiAgICAgICAgPyAnJ1xuICAgICAgICA6ICdwcm9zZSBtLWF1dG8gc2xpZGUtZW50ZXItY29udGVudCcsXG5cbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgYXN5bmMgbWFya2Rvd25JdFNldHVwKG1kKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vc2hpa2kuc3R5bGUvZ3VpZGUvXG4gICAgICAgIG1kLnVzZShhd2FpdCBNYXJrZG93bkl0U2hpa2koe1xuICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgZGFyazogJ2dpdGh1Yi1kYXJrJyxcbiAgICAgICAgICAgIGxpZ2h0OiAnY2F0cHB1Y2Npbi1sYXR0ZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGZhbHNlLFxuICAgICAgICAgIGNzc1ZhcmlhYmxlUHJlZml4OiAnLS1zLScsXG4gICAgICAgICAgdHJhbnNmb3JtZXJzOiBbXG4gICAgICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKHtcbiAgICAgICAgICAgICAgZXhwbGljaXRUcmlnZ2VyOiB0cnVlLFxuICAgICAgICAgICAgICByZW5kZXJlcjogcmVuZGVyZXJSaWNoKCksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSlcblxuICAgICAgICBtZC51c2UoYW5jaG9yLCB7XG4gICAgICAgICAgc2x1Z2lmeSxcbiAgICAgICAgICBwZXJtYWxpbms6IGFuY2hvci5wZXJtYWxpbmsubGlua0luc2lkZUhlYWRlcih7XG4gICAgICAgICAgICBzeW1ib2w6ICcjJyxcbiAgICAgICAgICAgIHJlbmRlckF0dHJzOiAoKSA9PiAoeyAnYXJpYS1oaWRkZW4nOiAndHJ1ZScgfSksXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgbWQudXNlKFRPQywge1xuICAgICAgICAgIGluY2x1ZGVMZXZlbDogWzEsIDIsIDMsIDRdLFxuICAgICAgICAgIHNsdWdpZnksXG4gICAgICAgICAgY29udGFpbmVySGVhZGVySHRtbDogYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW9mLWNvbnRlbnRzLWFuY2hvciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTMgNGgxOHYySDN6bTAgN2gxMnYySDN6bTAgN2gxOHYySDN6XCIvPjwvc3ZnPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCxcbiAgICAgICAgfSlcblxuICAgICAgICBtZC51c2UoR2l0SHViQWxlcnRzKVxuICAgICAgfSxcbiAgICAgIGZyb250bWF0dGVyUHJlcHJvY2Vzcyhmcm9udG1hdHRlciwgb3B0aW9ucywgaWQsIGRlZmF1bHRzKSB7XG4gICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgaWYgKCFpZC5lbmRzV2l0aCgnLm1kJykpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICBjb25zdCByb3V0ZSA9IGJhc2VuYW1lKGlkLCAnLm1kJylcbiAgICAgICAgICBpZiAocm91dGUgPT09ICdpbmRleCcgfHwgZnJvbnRtYXR0ZXIuaW1hZ2UgfHwgIWZyb250bWF0dGVyLnRpdGxlKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgY29uc3QgcGF0aCA9IGBvZy8ke3JvdXRlfS5wbmdgXG4gICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIGZzLmV4aXN0c1N5bmMoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgKVxuICAgICAgICAgICAgICA/IGZzLmNvcHkoYCR7aWQuc2xpY2UoMCwgLTMpfS5wbmdgLCBgcHVibGljLyR7cGF0aH1gKVxuICAgICAgICAgICAgICA6IGdlbmVyYXRlT2coZnJvbnRtYXR0ZXIudGl0bGUhLnRyaW0oKSwgYHB1YmxpYy8ke3BhdGh9YCwgKGZyb250bWF0dGVyLmRhdGUgYXMgc3RyaW5nKSksXG4gICAgICAgICAgKVxuICAgICAgICAgIGZyb250bWF0dGVyLmltYWdlID0gYGh0dHBzOi8vbW1lbWUubWUvJHtlbmNvZGVVUklDb21wb25lbnQocGF0aCl9YFxuICAgICAgICAgIGZyb250bWF0dGVyLmRlc2NyaXB0aW9uID0gZnJvbnRtYXR0ZXI/LmRlc2MgYXMgc3RyaW5nIHx8ICcnXG4gICAgICAgIH0pKClcbiAgICAgICAgY29uc3QgaGVhZCA9IGRlZmF1bHRzKGZyb250bWF0dGVyLCBvcHRpb25zKVxuICAgICAgICByZXR1cm4geyBoZWFkLCBmcm9udG1hdHRlciB9XG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXB3YVxuICAgIFZpdGVQV0Eoe1xuICAgICAgc2VsZkRlc3Ryb3lpbmc6IHRydWUsIC8vIFx1Nzk4MVx1NzUyOFx1NEU4NlxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbJ2Zhdmljb24uc3ZnJywgJ3NhZmFyaS1waW5uZWQtdGFiLnN2ZyddLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1ZpdGVzc2UnLFxuICAgICAgICBzaG9ydF9uYW1lOiAnVml0ZXNzZScsXG4gICAgICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIGljb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaW50bGlmeS9idW5kbGUtdG9vbHMvdHJlZS9tYWluL3BhY2thZ2VzL3VucGx1Z2luLXZ1ZS1pMThuXG4gICAgVnVlSTE4bih7XG4gICAgICBydW50aW1lT25seTogdHJ1ZSxcbiAgICAgIGNvbXBvc2l0aW9uT25seTogdHJ1ZSxcbiAgICAgIGZ1bGxJbnN0YWxsOiB0cnVlLFxuICAgICAgaW5jbHVkZTogW3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdsb2NhbGVzLyoqJyldLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZlYXQtYWdlbmN5L3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcbiAgICBXZWJmb250RG93bmxvYWQoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgc3NnT3B0aW9uczoge1xuICAgIHNjcmlwdDogJ2FzeW5jJyxcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXG4gICAgfSxcbiAgICBvbkZpbmlzaGVkKCkge1xuICAgICAgZ2VuZXJhdGVTaXRlbWFwKClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXG4gIH0sXG59KVxuXG5jb25zdCBvZ1NWZyA9IGZzLnJlYWRGaWxlU3luYygnLi9zY3JpcHRzL29nLXRlbXBsYXRlLnN2ZycsICd1dGYtOCcpXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlT2codGl0bGU6IHN0cmluZywgb3V0cHV0OiBzdHJpbmcsIGRhdGU6IHN0cmluZykge1xuICBpZiAoZnMuZXhpc3RzU3luYyhvdXRwdXQpKVxuICAgIHJldHVyblxuXG4gIGF3YWl0IGZzLm1rZGlyKGRpcm5hbWUob3V0cHV0KSwgeyByZWN1cnNpdmU6IHRydWUgfSlcbiAgLy8gYnJlYWtsaW5lIGV2ZXJ5IDI1IGNoYXJzXG4gIGNvbnN0IGxpbmVzID0gdGl0bGUudHJpbSgpLnNwbGl0KC8oLnswLDI1fSkoPzpcXHN8JCkvZykuZmlsdGVyKEJvb2xlYW4pXG5cbiAgY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICBsaW5lMTogbGluZXNbMF0sXG4gICAgbGluZTI6IGxpbmVzWzFdIHx8IGRhdGUsXG4gICAgbGluZTM6IGxpbmVzWzJdIHx8IGRhdGUsXG4gIH1cbiAgY29uc3Qgc3ZnID0gb2dTVmcucmVwbGFjZSgvXFx7XFx7KFtefV0rKX19L2csIChfLCBuYW1lKSA9PiBkYXRhW25hbWVdIHx8ICcnKVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUubG9nKGBHZW5lcmF0aW5nICR7b3V0cHV0fWApXG4gIHRyeSB7XG4gICAgYXdhaXQgc2hhcnAoQnVmZmVyLmZyb20oc3ZnKSlcbiAgICAgIC5yZXNpemUoMTIwMCAqIDEuMSwgNjMwICogMS4xKVxuICAgICAgLnBuZygpXG4gICAgICAudG9GaWxlKG91dHB1dClcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBnZW5lcmF0ZSBvZyBpbWFnZScsIGUpXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvYXJ2aW4vc2NyaXB0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9teVByb2ppZWN0L215X2Jsb2cvYXJ2aW4vc2NyaXB0cy9zbHVnaWZ5LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9hcnZpbi9zY3JpcHRzL3NsdWdpZnkudHNcIjsvLyBzdHJpbmcuanMgc2x1Z2lmeSBkcm9wcyBub24gYXNjaWkgY2hhcnMgc28gd2UgaGF2ZSB0b1xuLy8gdXNlIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIGhlcmVcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2RpYWNyaXRpY3MnXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG5jb25zdCByQ29udHJvbCA9IC9bXFx1MDAwMC1cXHUwMDFGXS9nXG5jb25zdCByU3BlY2lhbCA9IC9bXFxzfmAhQCMkJV4mKigpXFwtXys9W1xcXXt9fFxcXFw7OlwiJzw+LC4/L10rL2dcblxuZXhwb3J0IGZ1bmN0aW9uIHNsdWdpZnkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHJlbW92ZShzdHIpXG4gICAgICAvLyBSZW1vdmUgY29udHJvbCBjaGFyYWN0ZXJzXG4gICAgICAucmVwbGFjZShyQ29udHJvbCwgJycpXG4gICAgICAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgLnJlcGxhY2UoclNwZWNpYWwsICctJylcbiAgICAgIC8vIFJlbW92ZSBjb250aW51b3Mgc2VwYXJhdG9yc1xuICAgICAgLnJlcGxhY2UoLy17Mix9L2csICctJylcbiAgICAgIC8vIFJlbW92ZSBwcmVmaXhpbmcgYW5kIHRyYWlsaW5nIHNlcGFydG9yc1xuICAgICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpXG4gICAgICAvLyBlbnN1cmUgaXQgZG9lc24ndCBzdGFydCB3aXRoIGEgbnVtYmVyICgjMTIxKVxuICAgICAgLnJlcGxhY2UoL14oXFxkKS8sICdfJDEnKVxuICAgICAgLy8gbG93ZXJjYXNlXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICApXG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL2FydmluL3BsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvbXlQcm9qaWVjdC9teV9ibG9nL2FydmluL3BsdWdpbnMvb3BlcmF0ZS1ibG9nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSUyMFJlbG9jYXRlZCUyMEl0ZW1zL1NlY3VyaXR5L215UHJvamllY3QvbXlfYmxvZy9hcnZpbi9wbHVnaW5zL29wZXJhdGUtYmxvZy50c1wiO2ltcG9ydCB7IGV4ZWNTeW5jIH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJ1xuaW1wb3J0IHsgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgcHJvY2VzcyBmcm9tICdub2RlOnByb2Nlc3MnXG5pbXBvcnQgdHlwZSB7IFBsdWdpbk9wdGlvbiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZnNlIGZyb20gJ2ZzLWV4dHJhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVyYXRlQmxvZ1BsdWdpbigpOiBQbHVnaW5PcHRpb24ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdvcGVyYXRlLWJsb2ctcGx1Z2luJyxcbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU0RTBEXHU2NjJGXHU1RjAwXHU1M0QxXHU2QTIxXHU1RjBGXHVGRjBDXHU1MjE5XHU3NkY0XHU2M0E1XHU4RkQ0XHU1NkRFXHVGRjBDXHU0RTBEXHU1RTk0XHU3NTI4XHU2M0QyXHU0RUY2XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzZXJ2ZXIubWlkZGxld2FyZXMudXNlKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICBpZiAocmVxLnVybD8uc3RhcnRzV2l0aCgnL2NyZWF0ZU1kJykgfHwgcmVxLnVybD8uc3RhcnRzV2l0aCgnL2RlbGV0ZU1kJykpIHtcbiAgICAgICAgICBjb25zdCBhY3Rpb24gPSByZXEudXJsLnN0YXJ0c1dpdGgoJy9jcmVhdGVNZCcpID8gJ2NyZWF0ZScgOiAnZGVsZXRlJ1xuXG4gICAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwoYGh0dHA6Ly8ke3JlcS5oZWFkZXJzLmhvc3R9JHtyZXEudXJsfWApXG4gICAgICAgICAgY29uc3QgbmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ25hbWUnKVxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0eXBlJylcblxuICAgICAgICAgIGlmICh0eXBlICE9PSAncG9zdCcgJiYgdHlwZSAhPT0gJ3dlZWtseScpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICAgIGxldCBjb21tYW5kID0gJydcbiAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgY29tbWFuZCA9IHByb2Nlc3MucGxhdGZvcm0gIT09ICd3aW4zMidcbiAgICAgICAgICAgICAgPyBgdG91Y2ggYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgXG4gICAgICAgICAgICAgIDogYGVjaG8uID4gYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29tbWFuZCA9IGByaW1yYWYgYmxvZy8ke3R5cGV9LyR7bmFtZX0ubWRgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXhlY1N5bmMoY29tbWFuZClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXEudXJsPy5zdGFydHNXaXRoKCcvdXBkYXRlTWQnKSkge1xuICAgICAgICAgIGlmIChmc2UuZXhpc3RzU3luYyhgYmxvZy9wb3N0L3Rlc3QubWRgKSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IGZzZS5yZWFkRmlsZShgYmxvZy9wb3N0L3Rlc3QubWRgLCAndXRmLTgnKVxuICAgICAgICAgICAgZnNlLndyaXRlRmlsZShgYmxvZy9wb3N0L3Rlc3QubWRgLCBKU09OLnN0cmluZ2lmeSgnNzc3JykpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbmV4dCgpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1osT0FBTyxRQUFRLFVBQVUsU0FBUyxlQUFlO0FBQ3JjLFNBQVMsY0FBYztBQUN2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxh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
