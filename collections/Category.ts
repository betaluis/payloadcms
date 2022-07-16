import { CollectionConfig } from 'payload/types';
import { slug } from '../fields';

export type Type = {
  title: string;
  slug: string;
};

const Category: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slug,
  ],
};

export default Category;
