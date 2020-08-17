import {colors, white, gray, green, red, yellow, black} from './colors';
const buttons = {
    default: {
      color: {
        default: colors.text.grayDark,
        disabled: gray[4]
      },
      border: {
        default: 'rgba(27, 31, 35, 0.12)',
        active: colors.border.grayDark,
        disabled: colors.border.grayLight
      },
      bg: {
        default: white,
        hover: gray[3], // custom gray
        active: '#edeff2', //custom gray
        disabled: colors.bg.grayLight
      },
      shadow: {
        default: '0px 1px 0px rgba(27, 31, 35, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
        hover: '0px 1px 0px rgba(209, 213, 218, 0.2), inset 0px 2px 0px rgba(255, 255, 255, 0.1)',
        active: 'inset 0px 2px 0px rgba(149, 157, 165, 0.1)',
        focus: '0 0 0 3px rgba(3, 102, 214, 0.3)'
      }
    },
    primary: {
      color: {
        default: white,
        disabled: colors.whitefade50,
      },
      bg: {
        default: '#1976d2',
        focus: '#004ba0',
        hover: '#004ba0',
        active: '#1976d2', 
        disabled: '#62a0de'
      }
    },
    success: {
      color: {
        default: white,
        disabled: '#1f1f1f',
      },
      bg: {
        default: green[6],
        focus: green[5],
        hover: green[5],
        active: green[5], 
        disabled: green[3]
      }
    },
    warning: {
      color: {
        default: '#1f1f1f',
        disabled: '#1f1f1f'
      },
      bg: { // not fixed yet
        default: yellow[6],
        hover: yellow[3],
        focus: yellow[6],
        active: yellow[3],
        disabled: yellow[2]
      }
    },
    danger: {
      color: {
        default: white,
        hover: white,
        active: white,
        disabled: 'rgba(203,36,49, .5)' // custom?
      },
      border: {
        default: colors.border.gray,
        hover: 'rgba(27, 31, 35, 0.15)',
        active: 'rgba(27, 31, 35, 0.15)'
      },
      bg: {
        default: red[6],
        hover: red[5],
        active: '#be222e', // 2% darker than hover bg
        disabled: '#F3F4F6'
      },
      shadow: {
        default: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
        active: '0px 1px 0px rgba(27, 31, 35, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
        hover: '0px 1px 0px rgba(27, 31, 35, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
        focus: '0 0 0 3px rgba(203, 36, 49, 0.4)'
      }
    },
    dark: {
      color: {
        default: white,
        hover: white,
        active: white,
        disabled: 'rgba(203,36,49, .5)' // custom?
      },
      border: {
        default: colors.border.gray,
        hover: 'rgba(27, 31, 35, 0.15)',
        active: 'rgba(27, 31, 35, 0.15)'
      },
      bg: {
        default: '#3b434a',
        hover: black,
        active: '#be222e', // 2% darker than hover bg
        disabled: '#F3F4F6'
      },
      shadow: {
        default: '0px 1px 0px rgba(149, 157, 165, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
        active: '0px 1px 0px rgba(27, 31, 35, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
        hover: '0px 1px 0px rgba(27, 31, 35, 0.1), inset 0px 2px 0px rgba(255, 255, 255, 0.03)',
        focus: '0 0 0 3px rgba(203, 36, 49, 0.4)'
      }
    },
}
export {buttons};