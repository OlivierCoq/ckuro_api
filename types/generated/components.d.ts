import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkRatings extends Schema.Component {
  collectionName: 'components_work_ratings';
  info: {
    displayName: 'rating_system';
    description: '';
  };
  attributes: {
    five_stars: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    four_stars: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    three_stars: Attribute.Integer &
      Attribute.Required &
      Attribute.DefaultTo<0>;
    two_stars: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    one_star: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<0>;
    average_rating: Attribute.Decimal & Attribute.DefaultTo<0>;
    num_votes: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

export interface WorkFilter extends Schema.Component {
  collectionName: 'components_work_filters';
  info: {
    displayName: 'filter';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    value: Attribute.String;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.String;
  };
}

export interface WorkArtProjectVideo extends Schema.Component {
  collectionName: 'components_work_art_project_videos';
  info: {
    displayName: 'art_project_video';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    poster_image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

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

export interface CommunityReactions extends Schema.Component {
  collectionName: 'components_community_reactions';
  info: {
    displayName: 'reactions';
  };
  attributes: {
    vote: Attribute.Enumeration<['upvote', 'downvote']>;
    number_of_votes: Attribute.Integer;
    upvotes: Attribute.Integer;
    downvotes: Attribute.Integer;
  };
}

export interface CommunityCommunityLink extends Schema.Component {
  collectionName: 'components_community_community_links';
  info: {
    displayName: 'community_link';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Text;
  };
}

export interface CommentSectionsReply extends Schema.Component {
  collectionName: 'components_comment_sections_replies';
  info: {
    displayName: 'reply';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    user: Attribute.Relation<
      'comment-sections.reply',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    body: Attribute.RichText;
    target: Attribute.String;
  };
}

export interface CommentSectionsComment extends Schema.Component {
  collectionName: 'components_comment_sections_comments';
  info: {
    displayName: 'Comment';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
    commenter: Attribute.Relation<
      'comment-sections.comment',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    replies: Attribute.Component<'comment-sections.reply', true>;
    visible: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work.ratings': WorkRatings;
      'work.filter': WorkFilter;
      'work.art-project-video': WorkArtProjectVideo;
      'navigation.nav-link': NavigationNavLink;
      'creators.social-link': CreatorsSocialLink;
      'community.reactions': CommunityReactions;
      'community.community-link': CommunityCommunityLink;
      'comment-sections.reply': CommentSectionsReply;
      'comment-sections.comment': CommentSectionsComment;
    }
  }
}
