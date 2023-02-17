import mixins from './mixins';

const theme = {
  bp: {
    mobileS: `min-width: 320px`,
    mobileM: `min-width: 400px`,
    mobileL: `min-width: 480px`,
    tabletS: `min-width: 600px`,
    tabletL: `min-width: 768px`,
    desktopXS: `min-width: 900px`,
    desktopS: `min-width: 1024px`,
    desktopM: `min-width: 1200px`,
    desktopL: `min-width: 1400px`,
  },

  colors: {
    orange: '#FF9514',
    orangePressed: '#FFA83D',
    white: '#FFFFFF',
    white2: '#f3f3f4',
    black: '#111111',
    black2: 'rgba(17, 17, 17, 0.5)',
    black3: '#000000',
    black4: 'rgba(0, 0, 0, 0.1)',
    grey: '#575757',
    gray2: '#c4c4c4',
    gray3: '#333333',
    gray4: '#e0e0e0',
    gray5: '#DEDEDE',
  },

  mixins,
};

export default theme;
