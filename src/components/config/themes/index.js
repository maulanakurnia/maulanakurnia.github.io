import {lightTheme, darkTheme} from './mode'
import { colors, black, white, pink, gray, blue, green, orange, purple, red, yellow } from './colors';
import BaseStyles from './GlobalStyle'
import {buttons} from './buttons'
import { borderWidths, radii, fontSizes, fontWeights, space, screenSize } from './utility'

const theme = {
    // color
    colors, 
    black, 
    white, 
    pink, 
    gray, 
    blue, 
    green, 
    orange, 
    purple, 
    red, 
    yellow,

    borderWidths, 
    radii,
    fontSizes,
    fontWeights,
    space,
    screenSize,

    // Component
    buttons
};

export { theme, BaseStyles, lightTheme, darkTheme };