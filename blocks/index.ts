import Content, { Component as content } from './Content';
import Image, { Component as image } from './Image';

// Block Exports
export { default as CallToAction } from './CallToAction';
export { default as Content } from './Content';
export { default as CTAGrid } from './CTAGrid';
export { default as Image } from './Image';
export { default as ImageCollage } from './ImageCollage';
export { default as ImageContentCollage } from './ImageContentCollage';
export { default as ImageGrid } from './ImageGrid';
export { default as ImageStatCollage } from './ImageStatCollage';
export { default as Slider } from './Slider';
export { default as Spacer } from './Spacer';
export { default as Statistics } from './Statistics';
export { default as StickyContent } from './StickyContent';
export { default as StudySlider } from './StudySlider';

export const collections = {
  Content,
  Image,
};

export const components = {
  content,
  image,
};
