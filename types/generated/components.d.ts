import type { Schema, Struct } from '@strapi/strapi';

export interface ContentListItems extends Struct.ComponentSchema {
  collectionName: 'components_content_list_items';
  info: {
    displayName: 'List Items';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    last_update: Schema.Attribute.Date;
    rank: Schema.Attribute.Integer;
    rank_history: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface EpisodesEpisodes extends Struct.ComponentSchema {
  collectionName: 'components_episodes_episodes';
  info: {
    displayName: 'episodes';
    icon: 'alien';
  };
  attributes: {
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.String;
    release_date: Schema.Attribute.Date;
    show_notes: Schema.Attribute.Blocks;
    spotify_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
    youtube_url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.list-items': ContentListItems;
      'episodes.episodes': EpisodesEpisodes;
    }
  }
}
