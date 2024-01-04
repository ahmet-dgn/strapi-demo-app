import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFeaturedProducts extends Schema.Component {
  collectionName: 'components_blocks_featured_products';
  info: {
    displayName: 'FeaturedProducts';
    icon: 'archive';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    products: Attribute.Relation<
      'blocks.featured-products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'expand';
  };
  attributes: {
    ImagePosition: Attribute.Enumeration<['Left', 'Right']>;
    Title: Attribute.String;
    SubTitle: Attribute.String;
    OverLineText: Attribute.String;
    Description: Attribute.Text;
    ButtonName: Attribute.String;
    Link: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface BlocksLastBlogs extends Schema.Component {
  collectionName: 'components_blocks_last_blogs';
  info: {
    displayName: 'LastBlogs';
    icon: 'underline';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface BlocksNewProducts extends Schema.Component {
  collectionName: 'components_blocks_new_products';
  info: {
    displayName: 'NewProducts';
    icon: 'layer';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    products: Attribute.Relation<
      'blocks.new-products',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface BlocksSlider extends Schema.Component {
  collectionName: 'components_blocks_sliders';
  info: {
    displayName: 'Slider';
    icon: 'landscape';
  };
  attributes: {
    Content: Attribute.Component<'content-for-blocks.slider-content', true>;
  };
}

export interface BlocksTextWithOverlayImage extends Schema.Component {
  collectionName: 'components_blocks_text_with_overlay_images';
  info: {
    displayName: 'TextWithOverlayImage';
    icon: 'layout';
  };
  attributes: {
    Title: Attribute.String;
    SubTitle: Attribute.String;
    OverLineText: Attribute.String;
    Link: Attribute.String;
    ButtonName: Attribute.String;
    Image: Attribute.Media;
    Description: Attribute.Text;
  };
}

export interface ContentForBlocksSliderContent extends Schema.Component {
  collectionName: 'components_content_for_blocks_slider_contents';
  info: {
    displayName: 'SliderContent';
    icon: 'landscape';
  };
  attributes: {
    OverLineText: Attribute.String;
    Title: Attribute.String;
    Description: Attribute.RichText;
    Link: Attribute.String;
    ButtonName: Attribute.String;
    Image: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.featured-products': BlocksFeaturedProducts;
      'blocks.hero': BlocksHero;
      'blocks.last-blogs': BlocksLastBlogs;
      'blocks.new-products': BlocksNewProducts;
      'blocks.slider': BlocksSlider;
      'blocks.text-with-overlay-image': BlocksTextWithOverlayImage;
      'content-for-blocks.slider-content': ContentForBlocksSliderContent;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
