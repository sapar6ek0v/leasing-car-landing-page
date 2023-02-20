import mixins from './mixins';

const theme = {
  bp: {
    mobileS: `min-width: 320px`,
    mobileL: `min-width: 480px`,
    mobileX: `min-width: 576px`,
    tabletL: `min-width: 768px`,
    desktopXS: `min-width: 992px`,
    desktopS: `min-width: 1024px`,
    desktopM: `min-width: 1200px`,
    desktopL: `min-width: 1440px`,
  },

  colors: {
    green: '#77de8d',
    red: '#D53234',
    orange: '#FF9514',
    orange2: '#ffd5a1',
    orange3: '#ffead0',
    orangePressed: '#FFA83D',
    white: '#FFFFFF',
    white2: '#f3f3f4',
    white3: 'rgba(255, 255, 255, 0.6)',
    white4: 'rgba(255, 255, 255, 0.3)',
    white5: '#fffaf3',
    pinkWhite: '#ffd5a1',
    black: '#111111',
    black2: 'rgba(17, 17, 17, 0.5)',
    black3: '#000000',
    black4: 'rgba(0, 0, 0, 0.1)',
    black5: '#1e1e1e',
    black6: 'rgba(0, 0, 0, 0.5)',
    gray: '#575757',
    gray2: '#c4c4c4',
    gray3: '#333333',
    gray4: '#e0e0e0',
    gray5: '#DEDEDE',
    gray6: 'rgba(88, 88, 88, 0.3)',
    gray7: '#303030',
    gray8: '#4c4c4c',
    gray9: '#4b4b4b',
    gray10: '#666666',
    gray11: '#f3f3f4',
    gray12: '#bcbcbc',
    gray13: '#fafafb',
    gray14: '#e7e7e7',
    gray15: '#828282',
    gray16: '#a0a0a0',
    gray17: '#EAEAEB',
    gray18: '#F1F1F1',
    darkBrown: 'rgba(51, 51, 51, 0.04)',
    darkBrown2: 'rgba(51, 51, 51, 0.12)',
  },

  mixins,
};

export default theme;
