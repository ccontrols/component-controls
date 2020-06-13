import { Theme, useThemeUI } from 'theme-ui';
const text =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

export const theme: Theme = {
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    muted: '#e6e6e6',
    accent: '#f49342',
    darken: '#00044c',
    gray: '#f6f6f6',
    sidebar: '#f6f6f6',
    header: '#edebe8',
    highlight: '#d9f2f1',
    action: '#3B817D',
    selected: '#027AC5',
    fadedText: '#69768C',
    shadow: 'rgba(0, 0, 0, 0.1)',
    modes: {
      dark: {
        primary: '#9c6ade',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#e6e6e6',
        background: '#38404a',
        sidebar: '#000',
        text: '#d3d4db',
        header: '#111111',
        fadedText: '#c9cacf',
        selected: '#b3d9ff',
        action: '#d9f2f1',
        shadow: 'rgba(211, 212, 219, 0.1)',
      },
    },
  },
  fonts: {
    body: text,
    heading:
      'medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 42, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  buttons: {
    primary: {
      color: '#333',
      backgroundColor: '#f3f3f3',
      borderRadius: '5px',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset',
    },
    secondary: {
      backgroundColor: 'action',
    },
  },
  cards: {
    primary: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
  },
  links: {
    nav: {
      fontWeight: 300,
      fontSize: '14px',
      lineHeight: '1.6rem',
      '&.active': {
        fontWeight: 700,
        color: 'primary',
      },
    },
  },
  forms: {
    checkbox: {
      cursor: 'pointer',
      border: (t: Theme) => `1px solid ${t?.colors?.text}`,
      '&:focus': {
        backgroundColor: 'transarent',
        boxShadow: (t: Theme) => `0 0 0 2px ${t?.colors?.primary}`,
        outline: 'none',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
      fontSize: 6,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    a: {
      color: 'primary',
      transition: `all 0.3s ease-in-out`,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    img: {
      maxWidth: '100%',
    },
    p: {
      fontSize: 3,
      py: 2,
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    ol: {
      fontSize: 3,
    },
    ul: {
      fontSize: 3,
      py: 2,
    },
    table: {
      margin: 0,
      borderCollapse: 'collapse',
      fontSize: '14px',
      lineHeight: '20px',
      textAlign: 'left',
      width: '100%',
      borderSpacing: 0,
    },
    th: {
      border: 'none',
      padding: '10px 0 10px 20px',
    },
    //@ts-ignore
    tbody: {
      'tr:last-of-type': {
        borderBottom: 0,
      },
    },
    thead: {
      borderBottom: '1px solid #999',
      backgroundColor: 'header',
      color: 'text',
    },
    td: {
      padding: '16px 20px',
      borderBottom: 0,
    },
    tdgroup: {
      lineHeight: '24px',
      background: '#fafbfc',
      whiteSpace: 'nowrap',
      padding: '16px 20px',
      fontWeight: 700,
      fontFamily: 'monospace',
    },
    tr: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    },
  },
  actionbar: {
    container: {
      position: 'relative',
    },
    inner: {
      position: 'absolute',
      width: '100%',
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
    },
    item: {
      mt: 1,
      fontSize: 1,
    },
  },
  actioncontainer: {
    borderRadius: '4px',
    boxShadow: (t: Theme) => `0px 1px 3px 0px ${t.colors?.shadow}`,
    border: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
    display: 'flex',
    flexDirection: 'column',
  },
  blockcontainer: {
    container: {
      position: 'relative',
      mt: 4,
      mb: 4,
      width: '100%',
      scrollMarginTop: '5rem',
    },
    inner: {
      flexDirection: 'row',
      alignItems: 'center',
      ':hover': {
        a: {
          visibility: 'visible',
        },
      },
    },
    link: {
      position: 'absolute',
      left: -4,
      px: 2,
      visibility: 'hidden',
      ':hover': {
        visibility: 'visible',
      },
    },
  },
  subtitle: {
    color: 'fadedText',
    fontWeight: 400,
    paddingBottom: 1,
  },
  subheading: {
    fontWeight: 400,
  },
  title: {
    fontWeight: 800,
    pb: 4,
  },
  tag: {
    display: 'inline-block',
    px: 1,
  },
  zoom: {
    position: 'relative',
    transformOrigin: 'top left',
    transition: 'transform .2s',
  },
};

export const useTheme = (): Theme => {
  const { theme: currentTheme } = useThemeUI();
  return currentTheme || theme;
};
