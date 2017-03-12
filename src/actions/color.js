import types from './types/color';

export function randomizeColor(color) {
  return {
    type: types.RANDOMIZE_COLOR,
    color
  }
}