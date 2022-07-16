import { MediaType } from 'express';
import { CollectionConfig } from 'payload/types';
import { CallToAction, Content, CTAGrid, Image, ImageCollage, ImageContentCollage, ImageGrid, ImageStatCollage, Slider, Spacer, Statistics, StickyContent, StudySlider } from '../blocks';
import {
  CallToActionType,
  ContentType,
  CTAGridType,
  ImageCollageType,
  ImageContentCollageType,
  ImageGridType,
  ImageStatCollageType,
  ImageType,
  SliderType,
  SpacerType,
  StatisticsType,
  StickyContentType,
  StudySliderType,
} from '../blocks/types';
import { slug, meta } from '../fields';
import { MetaType } from '../fields/types';
import { CategoryType } from './types';

export type Layout =
  | CallToActionType
  | ContentType
  | CTAGridType
  | ImageType
  | ImageCollageType
  | ImageContentCollageType
  | ImageGridType
  | ImageStatCollageType
  | SliderType
  | SpacerType
  | StatisticsType
  | StickyContentType
  | StudySliderType;

export type Type = {
  title: string;
  featuredImage: MediaType;
  previewImages: {
    image: MediaType;
  }[];
  client?: string;
  location?: string;
  categories?: CategoryType[];
  slug: string;
  meta: MetaType;
};

const Study: CollectionConfig = {
  slug: 'studies',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'layout',
      label: 'Study Layout',
      type: 'blocks',
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
    {
      name: 'previewImages',
      label: 'Preview Images',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    slug,
    meta,
  ],
};

export default Study;
