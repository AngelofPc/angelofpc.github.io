// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
import { getColor, lighten, mode } from '@chakra-ui/theme-tools';

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    primary: {
      400: '#e63946',
      // 400: '#cc100f',
    },
    secondary: {
      400: '#1d3557',
      900: '#05090f',
      // 400: '#2b40d1',
    },
    honeydew: {
      400: '#f1faee',
    },
    powderblue: {
      400: '#a8dadc',
    },
  },
  components: {
    Button: {
      baseStyle: {
        '>.chakra-button__icon': {
          fontSize: '24px',
        },
      },
      variants: {
        gradient: (props) => {
          const { theme, fromcolor, tocolor } = props;
          const lgFrom = getColor(theme, fromcolor);
          const lgTo = getColor(theme, tocolor);
          const bgColor = getColor(theme, mode('white', 'gray.800')(props));

          return {
            border: '3px solid',
            borderColor: 'transparent',
            borderRadius: 'full',
            background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
            linear-gradient(135deg, ${lgFrom}, ${lgTo}) border-box`,
            '> *': {
              background: `linear-gradient(135deg, ${lgFrom}, ${lgTo})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
            },
            _hover: {
              background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, 
              linear-gradient(315deg, ${lgFrom}, ${lgTo}) border-box`,
              '> *': {
                background: `linear-gradient(315deg, ${lgFrom}, ${lgTo})`,
                backgroundClip: 'text',
              },
            },
          };
        },
      },
    },
  },
  // fonts: {
  //   heading: 'Montserrat',
  //   body: 'Montserrat',
  // },
});

export default theme;
