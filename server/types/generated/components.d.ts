import type { Schema, Struct } from '@strapi/strapi';

export interface ArraysStringArray extends Struct.ComponentSchema {
  collectionName: 'components_arrays_string_arrays';
  info: {
    displayName: 'string-array';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface PageFullDetails extends Struct.ComponentSchema {
  collectionName: 'components_page_full_details';
  info: {
    description: '';
    displayName: 'Full Details';
  };
  attributes: {
    cta: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'section.collection', false>;
    intro: Schema.Attribute.Text;
    outcomes: Schema.Attribute.Component<'section.collection', false>;
    what: Schema.Attribute.Component<'section.section', false>;
    why: Schema.Attribute.Component<'section.section', false>;
  };
}

export interface SectionCollection extends Struct.ComponentSchema {
  collectionName: 'components_section_collections';
  info: {
    description: '';
    displayName: 'collection';
  };
  attributes: {
    items: Schema.Attribute.Component<'arrays.string-array', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'Section with description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'arrays.string-array', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'arrays.string-array': ArraysStringArray;
      'page.full-details': PageFullDetails;
      'section.collection': SectionCollection;
      'section.section': SectionSection;
    }
  }
}
