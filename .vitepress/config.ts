import implicitFigures from "markdown-it-image-figures";
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { generateSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Life Documentation",
    description: "Documentation for life",
    markdown: {
        config: (md) => {
            md.use(implicitFigures, {
                figcaption: "alt",
                copyAttrs: "^class$",
            });

            // @ts-expect-error The error thrown here is incorrect
            md.use(tabsMarkdownPlugin);
        },
    },
    assetsDir: "assets",
    srcDir: "docs",
    themeConfig: {
        footer: {
            copyright: "© Created by CPlusPatch (Jesse), 2024",
            message: "Licensed under Creative Commons BY-NC-SA 4.0",
        },
        logo: "logo.svg",
        editLink: {
            pattern:
                "https://github.com/cpluspatch/life-docs/edit/main/docs/:path",
        },
        search: {
            provider: "local",
        },
        sidebar: generateSidebar({
            documentRootPath: "docs",
        }),
        // https://vitepress.dev/reference/default-theme-config
    },
    lang: "en-US",
    sitemap: {
        hostname: "https://life.cpluspatch.com",
    },
    lastUpdated: true,
});
