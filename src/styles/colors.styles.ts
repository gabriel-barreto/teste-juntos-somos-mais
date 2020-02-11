import chroma from 'chroma-js';
import { css } from 'styled-components';

export const Colors = {
  primary: chroma('#1098F7'),
  secondary: chroma('#000000'),
  lightest: chroma('#FFFFFF'),
  lightGray: chroma('#F2EDEC'),
  mediumGray: chroma('#e0e0e0'),
  darkGray: chroma('#d3d3d3'),
  dark: chroma('#212121'),
};

export default css`
  :root {
    --primary: ${Colors.primary.hex()};
    --secondary: ${Colors.secondary.hex()};

    --dark: ${Colors.dark.hex()};
    --lightest: ${Colors.lightest.hex()};

    --light-gray: ${Colors.lightGray.hex()};
    --medium-gray: ${Colors.mediumGray.hex()};
    --dark-gray: ${Colors.darkGray.hex()};
  }
`;
