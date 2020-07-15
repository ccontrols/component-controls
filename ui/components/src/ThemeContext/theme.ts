import { Theme, ThemeUIStyleObject, useThemeUI } from 'theme-ui';
const text =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

const ActionItemStyle: ThemeUIStyleObject = {
  color: 'background',
  backgroundColor: 'action',
  //safari fix:
  WebkitTextFillColor: 'initial',
  px: 2,
  py: 1,
  lineHeight: 1,
  borderRadius: 1,
  display: 'inline-block',
  boxShadow: (t: Theme) =>
    `${t.colors?.shadow} 0 1px 3px 1px, ${t.colors?.shadow} 0 0 0 1px`,
  border: (t: Theme) => `1px solid ${t.colors?.action}`,
};

export type ControlsTheme = {
  actionbar: Record<string, ThemeUIStyleObject>;
  toolbar: Record<string, ThemeUIStyleObject>;
  actioncontainer: ThemeUIStyleObject | Record<string, ThemeUIStyleObject>;
  blockcontainer: Record<string, ThemeUIStyleObject>;
  blockpagecontainer: Record<string, ThemeUIStyleObject>;
  linkheading: Record<string, ThemeUIStyleObject>;
  searchinput: Record<string, ThemeUIStyleObject>;
  subtitle: ThemeUIStyleObject;
  subheading: ThemeUIStyleObject;
  syntaxhighlight: Record<string, ThemeUIStyleObject>;
  tabs: Record<string, ThemeUIStyleObject>;
  tag: Record<string, ThemeUIStyleObject>;
  titledimage: Record<string, ThemeUIStyleObject>;
  value: Record<string, ThemeUIStyleObject>;
  zoom: ThemeUIStyleObject;
  editpage: Record<string, ThemeUIStyleObject>;
  pagecontainer: ThemeUIStyleObject;
  propstable: Record<string, ThemeUIStyleObject>;
  story: Record<string, ThemeUIStyleObject>;
  colormode: Record<string, ThemeUIStyleObject>;
  header: ThemeUIStyleObject;
  navmenu: Record<string, ThemeUIStyleObject>;
  pagination: Record<string, ThemeUIStyleObject>;
  sidebar: Record<string, ThemeUIStyleObject>;
  skiplinks: Record<string, ThemeUIStyleObject>;
  app: ThemeUIStyleObject;
  sidecontext: Record<string, ThemeUIStyleObject>;
  appsidebar: Record<string, ThemeUIStyleObject>;
  appheader: Record<string, ThemeUIStyleObject>;
  appfooter: Record<string, ThemeUIStyleObject>;
  categorylist: Record<string, ThemeUIStyleObject>;
  pagelist: Record<string, ThemeUIStyleObject>;
  categorypage: Record<string, ThemeUIStyleObject>;
  documentitem: Record<string, ThemeUIStyleObject>;
  taglist: Record<string, ThemeUIStyleObject>;
  appsidebarpage: Record<string, ThemeUIStyleObject>;
  container: Record<string, ThemeUIStyleObject>;
  documentslist: Record<string, ThemeUIStyleObject>;
} & Theme;
export const theme: ControlsTheme = {
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    muted: '#69768C',
    accent: '#f49342',
    darken: '#00044c',
    gray: '#f6f6f6',
    sidebar: '#f6f6f6',
    header: '#edebe8',
    highlight: '#d9f2f1',
    action: '#3B817D',
    selected: '#027AC5',
    shadow: 'rgba(0, 0, 0, 0.1)',
    accentPalette0: '#8338ec',
    accentPalette1: '#fb5607',
    accentPalette2: '#ff006e',
    accentPalette3: '#ffbe0b',
    accentPalette4: '#3a86ff',
    accentPalette5: '#4ecdc4',

    palette0: '#4caf50',
    palette1: '#2196f3',
    palette2: '#ff9800',
    palette3: '#f44336',
    palette4: '#dc004e',
    palette5: '#1976d2',
    modes: {
      dark: {
        primary: '#d5c0f1',
        secondary: '#b4e1fa',
        highlight: '#b7ecec',
        muted: '#c9cacf',
        background: '#38404a',
        sidebar: '#000',
        text: '#d3d4db',
        header: '#111111',
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
    thin: 300,
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
      fontWeight: 'thin',
      fontSize: 3,
      lineHeight: '1.6rem',
      '&.active': {
        fontWeight: 'bold',
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
    slider: {
      label: {
        paddingLeft: 1,
        paddingRight: 1,
        fontSize: 0,
        whiteSpace: 'nowrap',
      },
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
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
      my: 4,
    },
    h2: {
      ...heading,
      fontSize: 5,
      my: 3,
    },
    h3: {
      ...heading,
      my: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
      my: 3,
    },
    h5: {
      ...heading,
      fontSize: 1,
      my: 2,
    },
    h6: {
      ...heading,
      fontSize: 0,
      my: 2,
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
      color: 'red',
    },
    img: {
      maxWidth: '100%',
    },
    p: {
      fontSize: 3,
      my: 4,
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
      p: {
        m: 0,
      },
      pre: {
        mt: 2,
        mb: 0,
      },
    },
    th: {
      border: 'none',
      px: 2,
      pl: 3,
    },
    //@ts-ignore
    tbody: {
      'tr:last-of-type': {
        borderBottom: 0,
      },
    },
    thead: {
      borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
      backgroundColor: 'header',
      color: 'text',
    },
    td: {
      py: 3,
      px: 3,
      borderBottom: 0,
    },
    tdgroup: {
      lineHeight: '24px',
      background: '#fafbfc',
      whiteSpace: 'nowrap',
      py: 3,
      fontWeight: 'bold',
      fontFamily: 'monospace',
      flexDirection: 'row',
      alignItems: 'center',
    },
    tr: {
      borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
    },
  },
  actionbar: {
    container: {
      position: 'relative',
    },
    inner: {
      position: 'absolute',
      display: 'flex',
      width: '100%',
      flexDirection: 'row-reverse',
      marginLeft: 'auto',
    },
    item: {
      mt: 1,
      fontSize: 1,
      a: ActionItemStyle,
      button: ActionItemStyle,
    },
  },
  toolbar: {
    inner: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      mr: 1,
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
      pb: 2,
      visibility: 'hidden',
      ':hover': {
        visibility: 'visible',
      },
    },
    titleblock: { flexDirection: 'row', alignItems: 'center' },
    expandicon: { ml: 2, pb: 2 },
  },
  blockpagecontainer: {
    container: {},
    inforow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titlerow: {
      my: 4,
    },
    createdbox: {
      container: {
        display: 'flex',
        flexDirection: ['column', 'row'],
        alignItems: ['flex-end', 'baseline'],
      },
      separator: {
        visibility: ['hidden', 'visible'],
        height: [0],
        mr: [0, 1],
      },
    },
  },
  linkheading: {
    container: {
      width: '100%',
      scrollMarginTop: '5rem',
    },
    inner: {
      position: 'relative',
      display: 'flex',
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
      visibility: 'hidden',
      ':hover': {
        visibility: 'visible',
      },
    },
  },
  searchinput: {
    popover: {
      minWidth: 300,
      maxHeight: 400,
      overflowY: 'auto',
    },
    list: { p: 2, listStyle: 'none' },
    item: {
      p: 2,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'shadow',
      },
      '&.active': {
        backgroundColor: 'shadow',
        fontWeight: 'bold',
        color: 'primary',
        border: (t: Theme) => `1px solid ${t?.colors?.primary}`,
      },
    },
  },
  subtitle: {
    color: 'muted',
    fontWeight: 'body',
    pb: 2,
  },
  subheading: {
    fontWeight: 'body',
    pb: 1,
  },
  syntaxhighlight: {
    highlight: {
      pl: 1,
      backgroundColor: 'highlight',
      borderLeft: (t: Theme) => `4px solid ${t.colors?.primary}`,
    },
    normal: {},
    title: {
      fontWeight: 'bold',
      pl: 2,
    },
  },
  tabs: {
    '.react-tabs': {
      WebkitTapHighlightColor: 'transparent',
    },
    '.react-tabs__tab-list': {
      margin: '0 0 10px',
      padding: 0,
    },
    '.react-tabs__tab': {
      fontSize: 2,
      fontWeight: 'bold',
      display: 'inline-block',
      borderBottom: 'none',
      bottom: -1,
      position: 'relative',
      listStyle: 'none',
      padding: '4px 10px',
      ml: 1,
      mr: 1,
      cursor: 'pointer',
      color: 'muted',
      a: {
        textDecoration: 'inherit',
        color: 'inherit',
      },
      ':focus': {
        boxShadow: '0 0 5px hsl(208, 99%, 50%)',
        borderColor: 'hsl(208, 99%, 50%)',
        outline: 'none',
        ':after': {
          content: '""',
          position: 'absolute',
          height: '5px',
          left: '-4px',
          right: '-4px',
          bottom: '-5px',
          background: '#fff',
        },
      },
    },
    '.react-tabs__tab--selected': {
      borderBottom: (t: Theme) => `3px solid ${t?.colors?.primary}`,
      color: 'primary',
    },
    '.react-tabs__tab--disabled': {
      color: 'muted',
      cursor: 'default',
    },
    '.react-tabs__tab-panel': {
      display: 'none',
    },
    '.react-tabs__tab-panel--selected': {
      display: 'block',
    },
  },
  tag: {
    default: {
      display: 'inline-block',
      px: 1,
      borderRadius: 5,
    },
    rightmargin: {
      mr: 1,
      display: 'inline-block',
      px: 1,
    },
    leftmargin: {
      ml: 1,
      display: 'inline-block',
      px: 1,
    },
  },
  titledimage: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {},
    title: {
      color: 'muted',
      py: 2,
      fontSize: 1,
    },
  },
  value: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    label: {
      fontSize: 0,
      color: 'muted',
      mr: 1,
      lineHeight: 'heading',
    },
    value: {
      fontSize: 2,
      lineHeight: 'heading',
    },
  },
  zoom: {
    position: 'relative',
    transformOrigin: 'top left',
    transition: 'transform .2s',
  },
  editpage: {
    container: {
      lineHeight: 'heading',
    },
    inner: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      pl: 1,
      fontSize: 2,
      fontWeight: 'bold',
    },
  },
  pagecontainer: {
    bg: 'background',
    color: 'text',
    fontFamily: 'body',
    flex: '1 0 auto',
    py: 4,
    px: 5,
    margin: 'auto',
    width: '100%',
    position: 'relative',
    maxWidth: '1000px',
    blog: { maxWidth: '1200px' },
    story: { maxWidth: '1200px' },
    doc: { maxWidth: '1200px' },
    page: { maxWidth: '1200px' },
    full: { maxWidth: 'unset', p: 0 },
  },
  propstable: {
    name: {
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
    },
    defaultvalue: {
      maxWidth: 400,
      whiteSpace: 'pre-wrap',
    },
    control: {
      maxWidth: 300,
    },
    description: {
      container: {
        display: 'flex',
        flexDirection: 'column',
      },
      type: {
        color: 'muted',
        letterSpacing: '0.10em',
        whiteSpace: 'pre-wrap',
        margin: 0,
      },
    },
  },
  story: {
    container: {
      px: 4,
      py: 3,
    },
    wrapper: {
      all: 'unset',
    },
  },
  colormode: {
    container: {},
    outericon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    innericon: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '100%',
    },
  },
  header: {
    top: 0,
    left: 'auto',
    right: 0,
    zIndex: 10,
    position: 'sticky',
    backgroundColor: 'background',
    px: 2,
    mb: 1,
    justifyContent: `space-between`,
    flexDirection: 'row',
    alignItems: 'center',
    boxShadow: (t: Theme) => `0 1px 3px 1px ${t.colors?.shadow}`,
  },
  navmenu: {
    link: {
      width: '100%',
      px: 3,
      py: 1,
      background: 'none',
      textDecoration: 'none',
      cursor: 'pointer',
      color: '#333',
    },
    itemcontainer: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    iteminner: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    labelcontainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelicon: {
      mr: 2,
    },
    labeltext: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    expandicon: {
      ml: 2,
    },
  },
  pagination: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      p: 2,
    },
    pagecontainer: {},
    link: {
      textDecoration: 'none',
    },
    prev: {
      display: 'flex',
      flexDirection: 'column',
      py: 2,
    },
    next: {
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      py: 2,
    },

    label: {
      fontSize: 1,
      color: 'muted',
      pb: 2,
    },
    linktitle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: 3,
      color: 'primary',
      fontWeight: 'bold',
    },
    pagetitle: {
      px: 3,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      maxWidth: '300px',
    },
  },
  sidebar: {
    default: {
      overflowX: 'hidden',
      position: 'sticky',
      top: '5rem',
      maxHeight: '100vh',
      overflowY: 'auto',
      backgroundColor: 'background',
    },
    responsive: {
      overflowX: 'hidden',
      backgroundColor: 'background',
      top: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: 9999,
      position: 'absolute',
    },
    inner: {
      a: {
        '&.active': {
          borderLeft: (t: Theme) => `4px solid ${t?.colors?.accent}`,
          fontWeight: 'bold',
        },
        ':hover': {
          backgroundColor: 'shadow',
        },
      },
    },
    headercontainer: {
      pb: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    heading: {
      pl: 2,
    },
  },
  skiplinks: {
    container: {
      display: 'flex',
      border: (t: Theme) => `1px solid ${t.colors?.primary}`,
      clip: `react(0 0 0 0)`,
      width: '0.01em',
      height: '0.01em',
      whiteSpace: 'nowrap',
      padding: 0,
      overflow: `hidden`,
      position: `absolute`,
      flexDirection: 'column',
      '&:focus-within': {
        padding: 3,
        position: `fixed`,
        top: `50px`,
        left: `15px`,
        backgroundColor: `background`,
        zIndex: 15,
        width: `auto`,
        height: `auto`,
        clip: `auto`,
        textDecoration: `none`,
      },
    },
    item: {},
  },

  app: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  sidecontext: {
    container: {
      px: 3,
      borderLeft: (t: Theme) => `1px solid ${t.colors?.shadow}`,
    },
    nav: { display: 'flex', flexDirection: 'column' },
    navlink: {
      fontSize: 1,
      fontWeight: 'body',
    },
    toggle: {
      position: 'fixed',
      right: '1rem',
      bottom: '3rem',
      backgroundColor: 'gray',
    },
  },
  appsidebar: {
    sidebar: {
      borderRight: (t: Theme) => `1px solid ${t.colors?.shadow}`,
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      px: 2,
    },
    heading: { textAlign: 'left', py: 2, px: 3 },
    filtercontainer: { py: 2, px: 3 },
  },
  appheader: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: `secondary`,
      a: {
        color: `secondary`,
        ':hover': { color: `accent` },
        fontWeight: 'bold',
      },
      py: 3,
    },
  },
  appfooter: {
    container: {
      p: 3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    copyright: {},
    inner: {
      alignItems: `center`,
      color: `text`,
      fontWeight: `heading`,
      a: { color: `text` },
    },
  },
  categorylist: {
    pagecontainer: { maxWidth: '1000px' },
    list: {},
    item: { my: 2 },
  },
  pagelist: {
    container: { maxWidth: '1000px' },
  },
  categorypage: {
    pagecontainer: { maxWidth: '1000px' },
    titlecontainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    listcontainer: { my: 3 },
    mdxcontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  documentitem: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      py: 2,
      p: {
        mt: 0,
        mb: 2,
      },
    },
    titlerow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    info: {
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      inner: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      date: {
        color: 'muted',
      },
      comma: { mr: 2 },
      by: { mr: 1 },
      author: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
  },
  taglist: {
    container: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  },
  appsidebarpage: {
    allsidebar: {
      display: 'grid',
      flex: 1,
      minHeight: '100vh',
      gridTemplateColumns: ['1fr', '1fr', '300px 1fr 250px'],
      position: 'relative',
    },
    navsidebar: {
      display: 'grid',
      flex: 1,
      minHeight: '100vh',
      gridTemplateColumns: ['1fr', '1fr', '300px 1fr'],
      position: 'relative',
    },
    contextsidebar: {
      display: 'grid',
      flex: 1,
      minHeight: '100vh',
      gridTemplateColumns: ['1fr', '1fr', '1fr 300px'],
      position: 'relative',
    },
  },
  container: {
    container: {},
    pagination: { py: 4 },
    author: { ml: [0, 2] },
  },
  documentslist: {
    container: {},
    sortrow: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      pb: 3,
    },
    sortlabel: { width: 'unset', pr: 2 },
    sortselect: { minWidth: '300px' },
    list: {
      listStyle: 'none',
      p: 0,
    },
    listitem: {
      borderBottom: (t: Theme) => ` 1px solid  ${t.colors?.shadow}`,
    },
  },
};

export const useTheme = (): Theme => {
  const { theme: currentTheme } = useThemeUI();
  return currentTheme || theme;
};

const paletteColorCount = 6;

export const getPaletteColor = (index: number): string =>
  //@ts-ignore
  theme.colors[`palette${index % paletteColorCount}`];

export const getAccentPaletteColor = (index: number): string =>
  //@ts-ignore
  theme.colors[`accentPalette${index % paletteColorCount}`];
