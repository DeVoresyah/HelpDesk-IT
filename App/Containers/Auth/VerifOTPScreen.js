import React, { useCallback, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../../Redux/YourRedux'
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import OtpInputs from 'react-native-otp-inputs'

// Styles
import styles from '../Styles/Auth/VerifOTPScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

const VerifOTPScreen = props => {
  const { phone = "" } = props.route?.params
  const otpRef = useRef(null)

  useEffect(() => {
    otpRef?.current?.focus()
  }, [])

  const _inputOtp = useCallback((code) => {
    if (code?.length === 6) {
      console.log("otp", code)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Kami telah mengirimkan 6 digit otp ke nomor <Text style={apply('font-bold')}>{phone}</Text>.</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
        style={apply('flex full pl-2')}
      >
        <OtpInputs
          ref={otpRef}
          keyboardType='number-pad'
          numberOfInputs={6}
          style={apply('row my-6')}
          autofillFromClipboard={false}
          handleChange={_inputOtp}
          inputStyles={styles.otpStyles}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(VerifOTPScreen)
