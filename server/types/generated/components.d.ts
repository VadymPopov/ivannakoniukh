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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'arrays.string-array': ArraysStringArray;
    }
  }
}
