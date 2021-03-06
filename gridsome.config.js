// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Phillip Kent Knight",
  siteUrl: "https://phillipknight.github.io",
  pathPrefix: "/gridsomephil",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./blog",
        path: "*.md",
        route: "/blog/:title",
        typeName: "BlogPost",
        refs: {
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: "Tag",
            route: "/blog/tag/:id",
            create: true
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
};
