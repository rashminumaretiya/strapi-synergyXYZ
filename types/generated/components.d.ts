import type { Struct, Schema } from '@strapi/strapi';

export interface SharedButtons extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Buttons';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface MainHeader extends Struct.ComponentSchema {
  collectionName: 'components_main_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    isBadge: Schema.Attribute.Boolean;
  };
}

export interface MainFooter extends Struct.ComponentSchema {
  collectionName: 'components_main_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Schema.Attribute.String;
    reservedRight: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
    whatsAppNumber: Schema.Attribute.String;
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    contactUs: Schema.Attribute.String;
    availableTime: Schema.Attribute.String;
    availableDays: Schema.Attribute.String;
    pageLinks: Schema.Attribute.Component<'shared.buttons', true>;
  };
}

export interface HomeMarketingChallange extends Struct.ComponentSchema {
  collectionName: 'components_home_marketing_challanges';
  info: {
    displayName: 'marketing challange';
  };
  attributes: {
    marketingImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    marketingTitle: Schema.Attribute.String;
  };
}

export interface HomeHomeCard extends Struct.ComponentSchema {
  collectionName: 'components_home_home_cards';
  info: {
    displayName: 'home card';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images' | 'files'>;
    cardTitle: Schema.Attribute.String;
    cardDescription: Schema.Attribute.Text;
    cardSubDescription: Schema.Attribute.Text;
    cardButton: Schema.Attribute.Component<'shared.buttons', true>;
  };
}

export interface HomeCounting extends Struct.ComponentSchema {
  collectionName: 'components_home_countings';
  info: {
    displayName: 'counting';
  };
  attributes: {
    fieldNumber: Schema.Attribute.Integer;
    description: Schema.Attribute.String;
  };
}

export interface HomeCoreServiseJounery extends Struct.ComponentSchema {
  collectionName: 'components_home_core_servise_jouneries';
  info: {
    displayName: 'core-servise-jounery';
  };
  attributes: {
    Color: Schema.Attribute.String;
    servicesTitle: Schema.Attribute.String;
    servicesSubTitle: Schema.Attribute.String;
    servicesNumber: Schema.Attribute.Integer;
    servicesImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeBrand extends Struct.ComponentSchema {
  collectionName: 'components_home_brands';
  info: {
    displayName: 'brand';
  };
  attributes: {
    Title: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    brandImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SocialMediaLinksSocialMediaLinks
  extends Struct.ComponentSchema {
  collectionName: 'components_social_media_links_social_media_links';
  info: {
    displayName: 'Social Media Links';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedIn: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.buttons': SharedButtons;
      'main.header': MainHeader;
      'main.footer': MainFooter;
      'home.marketing-challange': HomeMarketingChallange;
      'home.home-card': HomeHomeCard;
      'home.counting': HomeCounting;
      'home.core-servise-jounery': HomeCoreServiseJounery;
      'home.brand': HomeBrand;
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
    }
  }
}
