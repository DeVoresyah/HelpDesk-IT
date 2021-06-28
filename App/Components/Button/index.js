import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

// Component
import Base from './Base'

// Styles
import styles from '../Styles/Button/indexStyle'
import { apply } from '../../Themes/OsmiProvider'

export const ButtonType = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
})

const index = props => {
  const { buttonStyle, textStyle, title, type } = props

  /**
   * Get background color based on button style
   * @returns {object}
   * @private
   */
  const _getBackgroundStyle = () => {
    switch (type) {
      case 'primary':
        return apply('bg-blue-500')

      case 'secondary':
        return apply('bg-gray-900 dark:bg-white')

      default:
        return apply('bg-blue-500')
    }
  }

  /**
   * Get text color based on button style
   * @returns {object}
   * @private
   */
  const _getTextColor = () => {
    switch (type) {
      case 'primary':
        return apply('text-white')

      case 'secondary':
        return apply('text-white dark:text-gray-900')

      default:
        return apply('text-white')
    }
  }

  return (
    <Base
      {...props}
      style={[styles.container, _getBackgroundStyle(), buttonStyle]}
    >
      {props.children ?? (
        <Text style={[styles.text, _getTextColor(), textStyle]}>{title}</Text>
      )}
    </Base>
  )
}

// Prop type warnings
index.propTypes = {
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.values(ButtonType)).isRequired
}

export default memo(index)
