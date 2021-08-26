// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { colors } from './styles';
import kittyBackground from '../assets/images/space_kitty_pattern.png';

const GlobalStyles = createGlobalStyle`
  html,body{
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Source Sans Pro, sans-serif;
    background-color: ${colors.background};
    color: ${colors.text};
  };
  #root{
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-image: url(${kittyBackground});
  }
  *{
    box-sizing: border-box;
  };
  h1,h2,h3,h4,h5,h6{
    margin: 0;
    font-weight: 600
  };
  h1 {
    font-size: 40px;
    line-height: 1;
  };
  h2 {
    font-size: 36px;
  };
  h3 {
    font-size: 30px;
  };
  h5 {
    font-size: 16px;
    text-transform: 'uppercase';
    letter-spacing: 4;
  };
`;

export default GlobalStyles;
