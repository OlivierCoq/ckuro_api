import type { Schema, Attribute } from '@strapi/strapi';

export interface NavigationNavLink extends Schema.Component {
  collectionName: 'components_navigation_nav_links';
  info: {
    displayName: 'nav_link';
  };
  attributes: {
    label: Attribute.String;
    imagery: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link: Attribute.String;
  };
}

export interface CreatorsSocialLink extends Schema.Component {
  collectionName: 'components_creators_social_links';
  info: {
    displayName: 'social_link';
  };
  attributes: {
    platform: Attribute.Enumeration<
      [
        'instagram',
        'facebook',
        'tiktok',
        'youtube',
        'spotify',
        'soundcloud',
        'x-twitter'
      ]
    >;
    link: Attribute.String;
  };
}

export interface WorkRatings extends Schema.Component {
  collectionName: 'components_work_ratings';
  info: {
    displayName: 'rating_system';
    description: '';
  };
  attributes: {
    five_stars: Attribute.Integer;
    four_stars: Attribute.Integer;
    three_stars: Attribute.Integer;
    two_stars: Attribute.Integer;
    one_star: Attribute.Integer;
  };
}

export interface WorkArtProjectVideo extends Schema.Component {
  collectionName: 'components_work_art_project_videos';
  info: {
    displayName: 'art_project_video';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation.nav-link': NavigationNavLink;
      'creators.social-link': CreatorsSocialLink;
      'work.ratings': WorkRatings;
      'work.art-project-video': WorkArtProjectVideo;
    }
  }
}
