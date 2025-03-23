import type { Schema, Struct } from '@strapi/strapi';

export interface AccoladesAccolades extends Struct.ComponentSchema {
  collectionName: 'components_accolades_accolades';
  info: {
    description: '';
    displayName: 'accolades';
  };
  attributes: {
    allNba: Schema.Attribute.Integer;
    mvps: Schema.Attribute.Integer;
    rings: Schema.Attribute.Integer;
  };
}

export interface AttributesAttributes extends Struct.ComponentSchema {
  collectionName: 'components_attributes_attributes';
  info: {
    displayName: 'Attributes';
  };
  attributes: {
    athleticism: Schema.Attribute.Integer;
    defense: Schema.Attribute.Integer;
    inbetweenScoring: Schema.Attribute.Integer;
    insideScoring: Schema.Attribute.Integer;
    outsideScoring: Schema.Attribute.Integer;
    overall: Schema.Attribute.Integer;
    rebounding: Schema.Attribute.Integer;
  };
}

export interface ContentListItems extends Struct.ComponentSchema {
  collectionName: 'components_content_list_items';
  info: {
    description: '';
    displayName: 'Items';
  };
  attributes: {
    accolades: Schema.Attribute.Component<'accolades.accolades', false>;
    attributes: Schema.Attribute.Component<'attributes.attributes', true>;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    last_update: Schema.Attribute.Date;
    rank: Schema.Attribute.Integer;
    rank_history: Schema.Attribute.JSON;
    stats: Schema.Attribute.Component<'stats.stats', false>;
    subtitle: Schema.Attribute.String;
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

export interface StatsStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    description: '';
    displayName: 'stats';
  };
  attributes: {
    assists: Schema.Attribute.Decimal;
    blocks: Schema.Attribute.Decimal;
    points: Schema.Attribute.Decimal;
    rebounds: Schema.Attribute.Decimal;
    steals: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accolades.accolades': AccoladesAccolades;
      'attributes.attributes': AttributesAttributes;
      'content.list-items': ContentListItems;
      'episodes.episodes': EpisodesEpisodes;
      'stats.stats': StatsStats;
    }
  }
}
