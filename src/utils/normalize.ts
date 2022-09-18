import { Dimensions } from 'react-native';
import { PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 720;

function normalize(size: number, based: 'width' | 'height' = 'width') {
  const newSize = (based === 'height') ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/**
 * for width pixel
 * @param size number
 * @returns number
 */
export const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

/**
 * for height pixel
 * @param size number
 * @returns number
 */
export const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

/**
 * for font pixel
 * @param size number
 * @returns number
 */
export const fontPixel = (size: number) => {
  return heightPixel(size);
};

/**
 * for Margin and Padding vertical pixel
 * @param size number
 * @returns number
 */
export const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};

/**
 * for Margin and Padding horizontal pixel
 * @param size number
 * @returns number
 */
export const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};
