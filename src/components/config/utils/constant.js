import {theme as defaultTheme} from '../themes'
import PropTypes from 'prop-types'
import * as styledSystem from 'styled-system'
import themeGet from '@styled-system/theme-get'
import systemPropTypes from '@styled-system/prop-types'

const {get: getKey, compose, system} = styledSystem
export const get = key => themeGet(key, getKey(defaultTheme, key))

// ---------------------------------------------------------------------------
export const getConfigProperty = (theme, ...propertyPath) => {
  // Function for getting values from themes
  const getterFunction = (...path) => getConfigProperty(theme, ...path);

  // Function for gettings values from objects while 'dereferencing' all
  // functional values
  const receiveValueSafe = (initialValue, ...path) => {
    let value = initialValue;
    for (let i = 0; value !== undefined && i < path.length; i += 1) {
      
      let tempValue = value[path[i]];

      while (typeof tempValue === 'function') {
        tempValue = tempValue(getterFunction);
      }

      value = tempValue;
    }

    return value;
  };

  const value = receiveValueSafe(theme, ...propertyPath);

  // Use default theme if property is not found in current theme
  if (value === undefined) {
    return receiveValueSafe(defaultTheme, ...propertyPath);
  }

  return value;
};

// -------------------------------------------------------------------------------------------------
// Helper for creating basic getter function for acessor's config properies
  export const makeGetter = (property) => (
    (props, accessor, ...path) =>
      getConfigProperty(props.theme, accessor, property, ...path)
  );
  export const getBoxShadow = makeGetter('boxShadow');
  export const getMargin = makeGetter('margin');
  export const getPadding = makeGetter('padding');
  export const getBorder = makeGetter('border');
  export const getBorderRadius = makeGetter('borderRadius');
  export const getFontWeight = makeGetter('fontWeight');
  export const getFontSize = makeGetter('fontSize');
  export const getFontFamily = makeGetter('fontFamily');
  export const getWidth = makeGetter('width');
  export const getHeight = makeGetter('height');
// -------------------------------------------------------------------------------------------------

export const getConcreteBreakpointSize = (props, size) => getConfigProperty(props.theme, 'screenSize', size);

export const getBreakpointSize = (props) => {
  if (props.sm || props.expandSm) {
    return getConcreteBreakpointSize(props.theme, 'sm');
  } else if (props.md || props.expandMd) {
    return getConcreteBreakpointSize(props.theme, 'md');
  } else if (props.lg || props.expandLg) {
    return getConcreteBreakpointSize(props.theme, 'lg');
  } else if (props.xl || props.expandXl) {
    return getConcreteBreakpointSize(props.theme, 'xl');
  }

  return '';
};

export const getPosition = (props) => {
  if(props.fixed){
    return 'fixed'
  } else if(props.relative){
    return 'relative'
  } else if(props.absolute){
    return 'absolute'
  } else if(props.static){
    return 'static'
  }
  return '';
};

// -------------------------------------------------------------------------------------------------

const whiteSpace = system({
    whiteSpace: {
      property: 'whiteSpace',
      cssProperty: 'whiteSpace'
    }
})

export const TYPOGRAPHY = compose(styledSystem.typography, whiteSpace)
TYPOGRAPHY.propTypes = {
    ...systemPropTypes.typography,
    whiteSpace: PropTypes.oneOf(['normal', 'nowrap', 'pre-wrap', 'pre', 'pre-line'])
  }
  
export const COMMON = compose(styledSystem.space, styledSystem.color, styledSystem.display)
COMMON.propTypes = {
...systemPropTypes.space,
...systemPropTypes.color
}

export const BORDER = compose(styledSystem.border, styledSystem.shadow)
BORDER.propTypes = {
...systemPropTypes.border,
...systemPropTypes.shadow
}
// these are 1:1 with styled-system's API now,
// so you could consider dropping the abstraction
export const LAYOUT = styledSystem.layout
export const POSITION = styledSystem.position
export const FLEX = styledSystem.flexbox
export const GRID = styledSystem.grid

TYPOGRAPHY.propTypes = systemPropTypes.typography
LAYOUT.propTypes = systemPropTypes.layout
POSITION.propTypes = systemPropTypes.position
FLEX.propTypes = systemPropTypes.flexbox
GRID.propTypes = systemPropTypes.grid
