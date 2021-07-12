import React from "react";
import PropTypes from 'prop-types';
import * as Styled from './Button.styled';

const Button = props => {
  const p = props.variant !== 'wrapper' ? props.size : '';
  let as = props.as;
  if (!as) {
    as = props.href ? 'a' : 'button';
  }
  return (
    <Styled.Button
      as={as}
      p={p}
      onClick={e => as === 'a' && !props.href && e.preventDefault()}
      {...props}
    >
      {props.children}
    </Styled.Button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  outline: PropTypes.bool,
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  as: PropTypes.oneOf(['a', 'button']),
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',
    'xsmall'
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary','success','info','danger','warning'])
};

Button.defaultProps = {
  outline: false,
  active: false,
  children: 'Primary',
  size: 'small',
  variant: 'primary',
  as: 'button',
  disabled: false
};

export { Button };
