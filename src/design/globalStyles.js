import { BRAND, FONTS } from './tokens';

export const globalStyles = `
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  
  body {
    background-color: ${BRAND.cream};
    color: ${BRAND.textPrimary};
    font-family: ${FONTS.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONTS.display};
  }
`;
