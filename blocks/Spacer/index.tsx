import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';

export type Type = {
  blockType: 'spacer';
  blockName?: string;
  spacer: unknown;
};

export const Spacer: Block = {
  slug: 'spacer',
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { spacer } = props;

  return (
    <div>
      <RichText
        content={spacer}
      />
    </div>
  );
};

export default Spacer;
