module.exports = [
  { name: "strapi::logger" },
  { name: "strapi::errors" },
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  { name: "strapi::cors" },
  { name: "strapi::poweredBy" },
  { name: "strapi::query" },
  { name: "strapi::body" },
  { name: "strapi::session" },
  { name: "strapi::favicon" },
  { name: "strapi::public" },
];
