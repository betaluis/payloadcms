import { CollectionConfig } from 'payload/types';
import { MediaType } from './types';
import {
  CallToAction,
  Content,
  CTAGrid,
  Image,
  ImageCollage,
  ImageContentCollage,
  ImageGrid,
  ImageStatCollage,
  Slider,
  Spacer,
  Statistics,
  StickyContent,
  StudySlider,
} from '../blocks';
import { CallToActionType, ImageType, ContentType } from '../blocks/types';

import { slug, meta } from '../fields';

export type Layout = CallToActionType | ContentType | ImageType;

export type Type = {
  title: string;
  slug: string;
  image?: MediaType;
  layout: Layout[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Content Above Image',
          value: 'contentAboveImage',
        },
        {
          label: 'Content Left of Image',
          value: 'contentLeftOfImage',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.heroType === 'contentAboveImage'
          || siblingData?.heroType === 'contentLeftOfImage',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        CTAGrid,
        Image,
        ImageCollage,
        ImageContentCollage,
        ImageGrid,
        ImageStatCollage,
        Slider,
        Spacer,
        Statistics,
        StickyContent,
        StudySlider,
      ],
    },
    meta,
    slug,
  ],
};

export default Page;
