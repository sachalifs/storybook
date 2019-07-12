import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const Button = ({ children, buttonType, onClick }) => (
  <button onClick={onClick} className={buttonType}>{children}</button>
);

Button.defaultProps = {
  buttonType: 'primary'
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;