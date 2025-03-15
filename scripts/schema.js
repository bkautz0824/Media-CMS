const baseContentTypes = {
  'author': {
    kind: 'collectionType',
    collectionName: 'authors',
    info: {
      singularName: 'author',
      pluralName: 'authors',
      displayName: 'Author'
    },
    options: {
      draftAndPublish: true
    },
    attributes: {
      name: { type: 'string', required: true },
      bio: { type: 'text' },
      avatar: { type: 'media', allowedTypes: ['images'] },
      email: { type: 'email' },
      articles: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'api::article.article',
        mappedBy: 'author'
      }
    }
  },
  'category': {
    kind: 'collectionType',
    collectionName: 'categories',
    info: {
      singularName: 'category',
      pluralName: 'categories',
      displayName: 'Category'
    },
    options: {
      draftAndPublish: true
    },
    attributes: {
      name: { type: 'string', required: true },
      description: { type: 'text' },
      slug: { type: 'uid', targetField: 'name' },
      articles: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'api::article.article',
        mappedBy: 'category'
      }
    }
  }
};

const components = {
  'episodes': {
    displayName: 'Episodes',
    category: 'podcast',
    attributes: {
      title: { type: 'string', required: true },
      description: { type: 'text' },
      release_date: { type: 'datetime', required: true },
      duration: { type: 'string' },
      spotify_url: { type: 'string' },
      youtube_url: { type: 'string' },
      show_notes: { type: 'richtext' }
    }
  },
  'list-items': {
    displayName: 'List Items',
    category: 'content',
    attributes: {
      rank: { type: 'integer', required: true },
      title: { type: 'string', required: true },
      description: { type: 'richtext' },
      stats: { type: 'json' },
      previous_rank: { type: 'integer' },
      last_updated: { type: 'datetime', required: true }
    }
  }
};

const mainContentTypes = {
  'article': {
    kind: 'collectionType',
    collectionName: 'articles',
    info: {
      singularName: 'article',
      pluralName: 'articles',
      displayName: 'Article'
    },
    options: {
      draftAndPublish: true
    },
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'uid', targetField: 'title' },
      content: { type: 'richtext', required: true },
      featured_image: { type: 'media', allowedTypes: ['images'] },
      excerpt: { type: 'text' },
      author: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::author.author',
        inversedBy: 'articles'
      },
      category: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::category.category',
        inversedBy: 'articles'
      },
      publish_date: { type: 'datetime', required: true }
    }
  },
  'podcast': {
    kind: 'collectionType',
    collectionName: 'podcasts',
    info: {
      singularName: 'podcast',
      pluralName: 'podcasts',
      displayName: 'Podcast'
    },
    options: {
      draftAndPublish: true
    },
    attributes: {
      name: { type: 'string', required: true },
      description: { type: 'text' },
      cover_image: { type: 'media', allowedTypes: ['images'] },
      episodes: {
        type: 'component',
        repeatable: true,
        component: 'podcast.episodes'
      },
      category: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::category.category'
      },
      active: { type: 'boolean', default: true }
    }
  },
  'living-list': {
    kind: 'collectionType',
    collectionName: 'living_lists',
    info: {
      singularName: 'living-list',
      pluralName: 'living-lists',
      displayName: 'Living List'
    },
    options: {
      draftAndPublish: true
    },
    attributes: {
      title: { type: 'string', required: true },
      slug: { type: 'uid', targetField: 'title' },
      description: { type: 'text' },
      items: {
        type: 'component',
        repeatable: true,
        component: 'content.list-items'
      },
      category: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::category.category'
      },
      last_updated: { type: 'datetime', required: true },
      active: { type: 'boolean', default: true }
    }
  }
};

module.exports = {
  baseContentTypes,
  components,
  mainContentTypes
};
