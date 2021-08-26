const breakpoints = [480, 768, 992, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const unit = 8;
export const widths = {
  largePageWidth: 1600,
  regularPageWidth: 1100,
  textPageWidth: 800,
};
export const colors = {
  primary: '#7156d9',
  secondary: '#41d9d3',
  accent: '#f25cc1',
  background: '#F4F6F8',
  grey: {
    darker: '#424855',
    light: '#959DAA',
  },
  silver: {
    dark: '#DEE2E7',
    base: '#EBEEF0',
    lighter: '#FCFDFF',
    darker: '#CAD0D8',
  },
  pink: {
    darkest: '#661f4e',
    darker: '#832363',
    dark: '#c43997',
    base: '#f25cc1',
    light: '#ffa3e0',
    lighter: '#ffd4f1',
    lightest: '#ffe6f7',
  },
  black: {
    base: '#191C23',
    lighter: '#2F353F',
    light: '#22262E',
    dark: '#14171C',
  },
  text: '#191C23',
  textSecondary: '#5A6270',
};

export { IconRun } from '@apollo/space-kit/icons/IconRun';
export { IconView } from '@apollo/space-kit/icons/IconView';
export { IconTime } from '@apollo/space-kit/icons/IconTime';
export { IconBook } from '@apollo/space-kit/icons/IconBook';
export { IconYoutube } from '@apollo/space-kit/icons/IconYoutube';
export { IconArrowRight } from '@apollo/space-kit/icons/IconArrowRight';
export { IconDoubleArrowRight } from '@apollo/space-kit/icons/IconDoubleArrowRight';
export { ApolloIcon } from '@apollo/space-kit/icons/ApolloIcon';
export { Button } from '@apollo/space-kit/Button';
