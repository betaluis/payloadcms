import { GlobalConfig } from 'payload/types';
import { link } from '../fields';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'link',
      label: 'Footer',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        link,
      ],
    },
  ],
};

export default Footer;
