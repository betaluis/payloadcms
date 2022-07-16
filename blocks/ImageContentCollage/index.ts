import { Block } from 'payload/types';
import { MediaType } from '../../collections/types';
import { backgroundColor, link } from '../../fields';
import { BackgroundColorType, LinkType } from '../../fields/types';

export type Image = {
  image: MediaType;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  content: unknown;
  enableCTA: boolean;
  link: LinkType;
  images: Image[];
};

const ImageContentCollage: Block = {
  slug: 'image-content-collage',
  labels: {
    singular: 'Image Content Collage',
    plural: 'Image Content Collages',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'enableCTA',
      label: 'Enable Call to Action',
      type: 'checkbox',
    },
    {
      ...link,
      admin: {
        condition: (_, siblingData) => siblingData.enableCTA,
      },
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};

export default ImageContentCollage;
