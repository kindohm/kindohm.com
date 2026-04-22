const themes = [
  {
    name: 'catalog',
    foreground: '#121410',
    background: '#f4f5f1',
    muted: '#5f625b',
    bar: '#b9bbb2',
    link: '#243f9f',
    signal: '#d7ff35',
    hot: '#c51f50',
    cool: '#168f83',
  },
  {
    name: 'basement',
    foreground: '#e9ede0',
    background: '#11140f',
    muted: '#a0a795',
    bar: '#3a3f35',
    link: '#b9caff',
    signal: '#d7ff35',
    hot: '#ff5578',
    cool: '#32c1ad',
  },
  {
    name: 'xerox',
    foreground: '#171713',
    background: '#eff1ee',
    muted: '#60635c',
    bar: '#b5b8b0',
    link: '#006c79',
    signal: '#ecff4a',
    hot: '#c3204f',
    cool: '#205ad4',
  },
];

const theme = themes[Math.floor(Math.random() * themes.length)];

console.log('theme:', theme.name);

module.exports = {
  risks: [
    'dry mouth',
    'sudden death or dismemberment',
    'night sweats',
    'drowsiness',
    'dizziness',
    'hallucinations',
    'loud noises',
    'dry cough',
    'temporary loss of left and right',
    'unexplained soreness in one calf',
    'excessive blinking',
    'mild but persistent deja vu',
    `thinking it's Tuesday when it isn't`,
    `moments of intense nostalgia for events that never happened`,
    `saying "you too" when inappropriate`,
    `headphones catching on door handles`,
    `brief awareness of the void`,
    `questioning whether a hot dog is a sandwich`,
    `wondering where socks go`,
    `sudden interest in weather patterns`,
  ],
  theme,
  foreground: theme.foreground,
  background: theme.background,
};
