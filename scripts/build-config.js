import { parseSwiperBuildModulesEnv } from './utils/helper.js';

const envBuildModules = parseSwiperBuildModulesEnv();

export const modules = envBuildModules || [
  'virtual',
  'keyboard',
  'mousewheel',
  'navigation',
  'pagination',
  // 'scrollbar',
  // 'parallax',
  // 'zoom',
  // 'controller',
  // 'a11y',
  // 'history',
  // 'hash-navigation',
  'autoplay',
  // 'thumbs',
  'free-mode',
  'grid',
  // 'manipulation',
  'effect-fade',
  'effect-cube',
  'effect-flip',
  'effect-coverflow',
  'effect-creative',
  // 'effect-cards',
];

// Replace .swiper- class prefix in output CSS to avoid conflicts with other Swiper instances
export const cssClassPrefix = 'snpt-swiper';

export default {
  modules,
  cssClassPrefix,
};
