import { createTheme } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    black: true;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    section: CSSProperties;
    infoLink: CSSProperties;
    copyright: CSSProperties;
  }

  interface TypographyVariantsOptions {
    section?: CSSProperties;
    infoLink?: CSSProperties;
    copyright?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    section: true;
    infoLink: true;
    copyright: true;
  }
}

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: '64px',
      lineHeight: '64px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '50px',
      lineHeight: '50px',
      fontWeight: '700',
    },
    h3: {
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: '800',
      '@media (min-width:1024px)': {
        fontSize: '24px',
        lineHeight: '28px',
      },
    },
    section: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '800',
    },
    infoLink: {
      fontSize: '17px',
      lineHeight: '25px',
      fontWeight: '300',
      borderBottom: 'solid 1px',
    },
    copyright: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '300',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
          section: 'h2',
          infoLink: 'span',
          copyright: 'span',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          font: 'inherit',
          fontSize: '20px',
          lineHeight: '18px',
          color: 'white',
          borderRadius: '0',
          textTransform: 'none',
          variants: [
            {
              props: { variant: 'black' },
              style: {
                background: 'black',
              },
            },
          ],
        },
      },
    },
  },
});
