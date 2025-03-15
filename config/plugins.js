module.exports = () => ({
    'users-permissions': {
      config: {
        // Generic, static permissions configuration
        permissions: {
          // Predefined content types with open access
          'api::article.article': {
            controllers: {
              find: { policies: [], middlewares: [] },
              findOne: { policies: [], middlewares: [] },
              create: { policies: [], middlewares: [] },
              update: { policies: [], middlewares: [] },
              delete: { policies: [], middlewares: [] }
            }
          },
          'api::podcast.podcast': {
            controllers: {
              find: { policies: [], middlewares: [] },
              findOne: { policies: [], middlewares: [] },
              create: { policies: [], middlewares: [] },
              update: { policies: [], middlewares: [] },
              delete: { policies: [], middlewares: [] }
            }
          },
          'api::living-list.living-list': {
            controllers: {
              find: { policies: [], middlewares: [] },
              findOne: { policies: [], middlewares: [] },
              create: { policies: [], middlewares: [] },
              update: { policies: [], middlewares: [] },
              delete: { policies: [], middlewares: [] }
            }
          },
          'api::category.category': {
            controllers: {
              find: { policies: [], middlewares: [] },
              findOne: { policies: [], middlewares: [] },
              create: { policies: [], middlewares: [] },
              update: { policies: [], middlewares: [] },
              delete: { policies: [], middlewares: [] }
            }
          },
          'api::author.author': {
            controllers: {
              find: { policies: [], middlewares: [] },
              findOne: { policies: [], middlewares: [] },
              create: { policies: [], middlewares: [] },
              update: { policies: [], middlewares: [] },
              delete: { policies: [], middlewares: [] }
            }
          }
        }
      }
    }
  });