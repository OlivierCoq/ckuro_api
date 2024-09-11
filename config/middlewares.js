module.exports = [
  { name: "strapi::logger" },
  { name: "strapi::errors" },
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https:"],
  //         "img-src": [
  //           "'self'",
  //           "data:",
  //           "blob:",
  //           "market-assets.strapi.io",
  //           "res.cloudinary.com",
  //         ],
  //         "media-src": [
  //           "'self'",
  //           "data:",
  //           "blob:",
  //           "market-assets.strapi.io",
  //           "res.cloudinary.com",
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'ckuro-creative-projects.s3.us-east-2.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'ckuro-creative-projects.s3.us-east-2.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'http://localhost:3000', 'http://localhost:3001', 'https://ckuro-creative-projects.s3.us-east-2.amazonaws.com'],
    }
  },
  { name: "strapi::poweredBy" },
  { name: "strapi::query" },
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  { name: "strapi::session" },
  { name: "strapi::favicon" },
  { name: "strapi::public" },
];
