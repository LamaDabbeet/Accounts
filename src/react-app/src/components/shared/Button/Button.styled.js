import styled from 'styled-components'
import {button} from '../../../theme/button'
import { typography } from '../../../theme/typography';

function getHoverStyle({  variant, outline }) {
   if(outline){
       return button.outline[variant].hover
   }
    return  button.variant[variant].hover;
  }

function getThemeButtonStyle(props) {
    const {variant, outline, active } = props;
    const buttonVariantStyles = outline ? button.outline[variant]:button.variant[variant];
    const buttonStyles = button;
    let styles = {
      ...buttonStyles,
      ...buttonVariantStyles
    };
    if (outline) {
      const buttonOutlineStyles = button.outline;
      styles = {
        ...styles,
        ...buttonOutlineStyles,
        backgroundColor: 'transparent'
      };
    }
    if (active) {
      const hoverStyle = getHoverStyle(props);
      styles = {
        ...styles,
        ...hoverStyle
      };
    }
  
    return styles;
  }
  
  export const Button = styled.div`
  display: inline-flex;
  outline: none;
  text-decoration: none;
  border-radius:3px;
  padding:0.35rem 0.25rem;
  transition: all 0.2s linear;
  border: none;}
  margin-left: 1rem;
  font-weight: ${typography.medium}
  ${getThemeButtonStyle}
  :hover{
    cursor:pointer;
    ${getHoverStyle}
  }
  > span {
    display: inline-flex;
  }
`;

