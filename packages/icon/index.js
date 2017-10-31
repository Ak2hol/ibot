import React from 'react'
import PropTypes from 'prop-types'

import './index.styl'

/**
 * <Icon>
 *
 * @param
 *  @prop {String} name/id of icon
 *  @prop {String} [type=icon]
 *  @prop {String} [className]
 */
export default function Icon({ name = '', type, className, ...others }) {
  const prefix = type === 'mb' ? 'icon' : type
  name = name.replace(/^(icon|fa|md|ci|mb)\-/gi, '')

  return (
    <span
      className={`icon ${type} ${prefix}-${name} ${className}`}
      {...others}
    >
      { type === 'md' && name }
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  name: '',
  type: 'icon',
  className: '',
}