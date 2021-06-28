import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native'

// Styles
import styles from '../Styles/Button/BaseStyle'
import { apply } from '../../Themes/OsmiProvider'

const Base = props => {
  const { ...restProps } = props
  const { style } = restProps

  return Platform.OS === 'ios' ? (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {props.children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
    background={TouchableNativeFeedback.Ripple(apply('white'))}
    {...props}>
      <View style={style}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  )
}

Base.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

Base.defaultProps = {
  children: null
}

export default memo(Base)
