const {lighten, rgba, desaturate} = require('polished')
const {colors: colorPrimitives, typography} = require('@primer/primitives')
const {lineHeights} = typography
const {black, white, pink, gray, blue, green, orange, purple, red, yellow} = colorPrimitives

const colors = {
  bodytext: gray[9],
  black,
  white,
  gray,
  blue,
  green,
  orange,
  purple,
  red,
  yellow,
  pink,
  blackfade15: 'rgba(27, 31, 35, 0.15)',
  blackfade20: 'rgba(27, 31, 35, 0.20)',
  blackfade30: 'rgba(27,31,35,0.3)',
  blackfade35: 'rgba(27, 31, 35, 0.35)',
  blackfade50: 'rgba(27, 31, 35, 0.5)',
  whitefade15: 'rgba(255, 255, 255, 0.15)',
  whitefade50: 'rgba(255, 255, 255, 0.50)',
  state: {
    error: red[5],
    failure: red[5],
    pending: yellow[7],
    queued: yellow[7],
    success: green[5],
    unknown: gray[4]
  },

  border: {
    blackFade: rgba(black, 0.15),
    blue: blue[5],
    blueLight: blue[2],
    grayLight: lighten(0.03, gray[2]),
    gray: gray[2],
    grayDark: gray[3],
    grayDarker: gray[7],
    green: green[4],
    greenLight: desaturate(0.4, green[3]),
    purple: purple[5],
    red: red[5],
    redLight: desaturate(0.6, red[3]),
    white,
    whiteFade: rgba(white, 0.15),
    yellow: desaturate(0.6, yellow[3])
  },
  counter: {
    bg: 'rgba(27, 31, 35, 0.08)'
  },
  filterList: {
    hoverBg: '#eaecef'
  },
  text: {
    gray: gray[6],
    grayLight: gray[5],
    grayDark: gray[9],
    red: red[6]
  },
  bg: {
    gray: gray[1],
    grayLight: gray[0],
    disabled: '#F3F4F6'
  },
  accent: orange[5],
  labels: {
    gray: gray[2],
    grayText: gray[9],
    grayDark: gray[5],
    grayDarkText: gray[9],
    blue: blue[5],
    blueText: blue[5],
    orange: orange[5],
    orangeText: orange[6],
    green: green[5],
    greenText: green[6],
    red: red[6],
    redText: red[6],
    yellow: yellow[6],
    yellowText: yellow[9],
    pink: pink[4],
    pinkText: pink[6],
    purple: purple[4],
    purpleText: [5]
  }
}

export {colors, black, white, pink, gray, blue, green, orange, purple, red, yellow, lineHeights};