import { Block } from 'payload/types';
import { BackgroundColorType } from '../../fields/types';
import { StudyType } from '../../collections/types';
import { backgroundColor } from '../../fields';

export type Type = {
  backgroundColor: BackgroundColorType;
  studies: StudyType[],
}

const StudySlider: Block = {
  slug: 'study-slider',
  labels: {
    singular: 'Study Slider',
    plural: 'Study Sliders',
  },
  fields: [
    backgroundColor,
    {
      name: 'studies',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
};

export default StudySlider;
