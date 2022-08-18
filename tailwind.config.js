module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      primary_clr: "#4f46e5",
      primary_hover_clr: "#2563eb",
      primary_focus_clr: "#1d4ed8",
    },
  },
  plugins: [],
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  // purge: {
  //   content: ["./src/views/**/*.js", "./src/components/**/*.js"],
  //   // These options are passed through directly to PurgeCSS
  // },
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   check: "url('/icons/check.svg')",
      //   landscape: "url('/images/landscape/2.jpg')",
      // }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  future: {
    purgeLayersByDefault: true,
  },
};
