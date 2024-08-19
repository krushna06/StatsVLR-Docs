import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src="https://avatars.githubusercontent.com/u/168160465?s=200&v=4" width={64} height={64} />
    <span>StatsVLR v1.0.0</span>
  </div>
);

const config: DocsThemeConfig = {
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard = "https://avatars.githubusercontent.com/u/168160465?s=200&v=4";

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="This Valorant Esports API is a user-friendly tool that allows you to extract data from the website vlr.gg. With this API, you can easily access real-time information about Valorant esports, including match results, player profiles, team details, and more. Stay informed about the latest events and statistics in the world of Valorant esports using this convenient and reliable API."
        />
        <meta
          name="og:description"
          content="This Valorant Esports API is a user-friendly tool that allows you to extract data from the website vlr.gg. With this API, you can easily access real-time information about Valorant esports, including match results, player profiles, team details, and more. Stay informed about the latest events and statistics in the world of Valorant esports using this convenient and reliable API."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="statsvlr-docs.vercel.app" />
        <meta name="twitter:url" content="https://statsvlr-docs.vercel.app" />
        <meta
          name="og:title"
          content={
            title ? title + " – StatsVLR API" : "StatsVLR API"
          }
        />
        <meta name="og:image" content={socialCard} />
        <meta
          name="apple-mobile-web-app-title"
          content="StatsVLR API"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  logo,
  project: {
    link: "https://github.com/krushna06",
  },
  /*chat: {
    link: 'https://discord.com',
  },*/
  docsRepositoryBase: "https://github.com/krushna06/StatsVLR-Docs",
  footer: {
    text: (
      <span>
        Copyright {new Date().getFullYear()} ©{" "}
        <a href="https://n0step.xyz" target="_blank">
          n0step_
        </a>
        .
      </span>
    ),
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s | StatsVLR API",
    };
  },
};

export default config;
