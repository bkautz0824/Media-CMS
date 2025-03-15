// config/server.js


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  bootstrap: async (strapi) => {
    // Just extracting the setPublicPermissions function from your register-schema file
    // if (strapi.config.environment === 'development') {
    //   try {
    //     await registerSchemas(strapi);
    //   } catch (error) {
    //     console.error('Bootstrap error:', error);
    //   }
    // }
  },
});