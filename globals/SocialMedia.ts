import { GlobalConfig } from 'payload/types';

const SocialMedia: GlobalConfig = {
  slug: 'social-media',
  label: 'Social Media',
  fields: [
    {
      type: 'array',
      name: 'links',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              label: 'Label',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'url',
              label: 'Custom URL',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default SocialMedia;
