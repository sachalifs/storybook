import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const COLORS = [
  'red',
  'blue',
  'purple',
  'mystic',
  'silver'
]

function format(firstName, lastName) {
  const firstLetter = firstName.length > 0 ? firstName[0].toUpperCase() : '?'
  const secondLetter = lastName.length > 0 ? lastName[0].toUpperCase() : '?'
  return firstLetter + secondLetter
}

const UserAvatar = ({ firstName, lastName, color }) => (
  <div className={`userAvatar ${color}`}>
    {format(firstName, lastName)}
  </div>
)

UserAvatar.defaultProps = {
  firstName: '',
  lastName: '',
  color: COLORS[0]
}

UserAvatar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  color: PropTypes.oneOf(COLORS)
}

export default UserAvatar;