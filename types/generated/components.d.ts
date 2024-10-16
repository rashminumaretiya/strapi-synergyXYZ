import type { Struct, Schema } from '@strapi/strapi';

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

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    keyInsightsTitle: Schema.Attribute.String;
    keyInsightsCheck: Schema.Attribute.Boolean;
    keyInsightsList: Schema.Attribute.Component<'shared.text-section', true>;
    itemPerRow: Schema.Attribute.Integer;
  };
}

export interface SharedTextSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_sections';
  info: {
    displayName: 'text section';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SharedImageTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_titles';
  info: {
    displayName: 'image Title';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedImageTitleSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_title_sections';
  info: {
    displayName: 'image title section';
    description: '';
  };
  attributes: {
    mainTitle: Schema.Attribute.String;
    imageTitleInfo: Schema.Attribute.Component<'shared.image-title', true>;
  };
}

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

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subDescription: Schema.Attribute.Text;
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ServicesSubServiceApproachDetail
  extends Struct.ComponentSchema {
  collectionName: 'components_services_sub_service_approach_details';
  info: {
    displayName: 'Sub Service Approach Detail';
    description: '';
  };
  attributes: {
    mainTitle: Schema.Attribute.String;
    subServiceApproachInfo: Schema.Attribute.Component<
      'services.services-approach-information',
      true
    >;
  };
}

export interface ServicesServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_services_services_cards';
  info: {
    displayName: 'Services Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface ServicesServicesApproachInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_services_services_approach_informations';
  info: {
    displayName: 'Services Approach Information';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    keyInsightsInfo: Schema.Attribute.Component<'shared.text', true>;
  };
}

export interface ServicesServeiceList extends Struct.ComponentSchema {
  collectionName: 'components_services_serveice_lists';
  info: {
    displayName: 'serveice list';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    servicesListInfo: Schema.Attribute.Component<
      'services.explore-services-card',
      true
    >;
  };
}

export interface ServicesImageTitleSection extends Struct.ComponentSchema {
  collectionName: 'components_services_image_title_section_s';
  info: {
    displayName: 'Image Title Section ';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
  };
}

export interface ServicesExploreServicesCard extends Struct.ComponentSchema {
  collectionName: 'components_services_explore_services_cards';
  info: {
    displayName: 'Explore Services Card';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    color: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ServicesContentNavigatorCard extends Struct.ComponentSchema {
  collectionName: 'components_services_content_navigator_cards';
  info: {
    displayName: 'Content Navigator Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'shared.buttons', true>;
  };
}

export interface ServicesBubbleProcessInformation
  extends Struct.ComponentSchema {
  collectionName: 'components_services_bubble_process_informations';
  info: {
    displayName: 'Bubble Process Information';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subServicesBubbleDetails: Schema.Attribute.Component<
      'services.services-card',
      true
    >;
  };
}

export interface ServicesBannerContent extends Struct.ComponentSchema {
  collectionName: 'components_services_banner_contents';
  info: {
    displayName: 'Banner Content';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface OurApproachApproachCard extends Struct.ComponentSchema {
  collectionName: 'components_our_approach_approach_cards';
  info: {
    displayName: 'Approach detail';
    description: '';
  };
  attributes: {
    mainTitle: Schema.Attribute.String;
    mainCardInfo: Schema.Attribute.Component<'services.services-card', true>;
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
    description: '';
  };
  attributes: {
    reservedRightText: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    whatsAppNumber: Schema.Attribute.String;
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    contactUs: Schema.Attribute.String;
    availableTime: Schema.Attribute.String;
    availableDays: Schema.Attribute.String;
    pageLinks: Schema.Attribute.Component<'shared.buttons', true>;
    contactUsText: Schema.Attribute.String;
  };
}

export interface HomeMarketingSection extends Struct.ComponentSchema {
  collectionName: 'components_home_marketing_sections';
  info: {
    displayName: 'Marketing Section';
    description: '';
  };
  attributes: {
    marketingDetails: Schema.Attribute.Component<
      'our-approach.approach-card',
      false
    >;
    maketingInfoButton: Schema.Attribute.Component<'shared.buttons', false>;
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
    description: '';
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

export interface HomeCoreServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_home_core_services_sections';
  info: {
    displayName: 'Core Services Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    coreServicesJourneyInfo: Schema.Attribute.Component<
      'home.core-servise-jounery',
      true
    >;
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

export interface HomeBrandTransformationBox extends Struct.ComponentSchema {
  collectionName: 'components_home_brand_transformation_boxes';
  info: {
    displayName: 'Brand Transformation Box';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    brandTransformationbutton: Schema.Attribute.Component<
      'shared.buttons',
      false
    >;
  };
}

export interface HomeBannerContent extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_contents';
  info: {
    displayName: 'Banner Content';
  };
  attributes: {
    title: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface HomeApproachSection extends Struct.ComponentSchema {
  collectionName: 'components_home_approach_sections';
  info: {
    displayName: 'approach section';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    approchButton: Schema.Attribute.Component<'shared.buttons', false>;
  };
}

export interface BubblesApproachBubbles extends Struct.ComponentSchema {
  collectionName: 'components_bubbles_approach_bubbles';
  info: {
    displayName: 'approach-bubbles';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface AboutUsKeyStrengthSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_key_strength_sections';
  info: {
    displayName: 'Key Strength Section';
  };
  attributes: {
    keyStrengthTitle: Schema.Attribute.String;
    keyStrengthsInfo: Schema.Attribute.Component<
      'services.services-card',
      true
    >;
  };
}

export interface AboutUsDetailsBox extends Struct.ComponentSchema {
  collectionName: 'components_about_us_details_boxes';
  info: {
    displayName: 'Details Box';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

export interface AboutUsCollaborativeVisionBox extends Struct.ComponentSchema {
  collectionName: 'components_about_us_collaborative_vision_boxes';
  info: {
    displayName: 'Collaborative Vision Box';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    subDescription: Schema.Attribute.Text;
    collaborativeVisionButton: Schema.Attribute.Component<
      'shared.buttons',
      true
    >;
  };
}

export interface AboutUsBubbleSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_bubble_sections';
  info: {
    displayName: 'Bubble Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'>;
    bubbleInfo: Schema.Attribute.Component<'about-us.details-box', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'social-media-links.social-media-links': SocialMediaLinksSocialMediaLinks;
      'shared.text': SharedText;
      'shared.text-section': SharedTextSection;
      'shared.image-title': SharedImageTitle;
      'shared.image-title-section': SharedImageTitleSection;
      'shared.buttons': SharedButtons;
      'shared.banner': SharedBanner;
      'services.sub-service-approach-detail': ServicesSubServiceApproachDetail;
      'services.services-card': ServicesServicesCard;
      'services.services-approach-information': ServicesServicesApproachInformation;
      'services.serveice-list': ServicesServeiceList;
      'services.image-title-section': ServicesImageTitleSection;
      'services.explore-services-card': ServicesExploreServicesCard;
      'services.content-navigator-card': ServicesContentNavigatorCard;
      'services.bubble-process-information': ServicesBubbleProcessInformation;
      'services.banner-content': ServicesBannerContent;
      'our-approach.approach-card': OurApproachApproachCard;
      'main.header': MainHeader;
      'main.footer': MainFooter;
      'home.marketing-section': HomeMarketingSection;
      'home.marketing-challange': HomeMarketingChallange;
      'home.home-card': HomeHomeCard;
      'home.counting': HomeCounting;
      'home.core-servise-jounery': HomeCoreServiseJounery;
      'home.core-services-section': HomeCoreServicesSection;
      'home.brand': HomeBrand;
      'home.brand-transformation-box': HomeBrandTransformationBox;
      'home.banner-content': HomeBannerContent;
      'home.approach-section': HomeApproachSection;
      'bubbles.approach-bubbles': BubblesApproachBubbles;
      'about-us.key-strength-section': AboutUsKeyStrengthSection;
      'about-us.details-box': AboutUsDetailsBox;
      'about-us.collaborative-vision-box': AboutUsCollaborativeVisionBox;
      'about-us.bubble-section': AboutUsBubbleSection;
    }
  }
}
