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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navigation.nav-link': NavigationNavLink;
    }
  }
}
