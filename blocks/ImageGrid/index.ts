import { Block } from 'payload/types';
import { MediaType } from '../../collections/types';
import { BackgroundColorType } from '../../fields/types';
import { backgroundColor } from '../../fields';

export type Image = {
  image: MediaType;
  content?: string;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  images: Image[];
};

const ImageGrid: Block = {
  slug: 'Image Grid',
  labels: {
    singular: 'Image Grid',
    plural: 'Image Grids',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
      ],
    },
  ],
};

export default ImageGrid;
