import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
  Image,
  View,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Components
import InputText from '../../Components/Form/InputText'
import Button, { ButtonType } from '../../Components/Button'

// Asset
import Images from '../../Images'

// Styles
import styles from '../Styles/Auth/LoginScreenStyle'
import { apply } from '../../Themes/OsmiProvider'

// Define validation form schema
const Schema = Yup.object().shape({
  phone: Yup.string()
    .required('Nomor HP wajib diisi.')
})

const LoginScreen = props => {
  const { navigation } = props

  /**
   * Render form function
   * @param formProps
   * @private
   */
  const _renderForm = ({ values, setFieldValue, errors, handleSubmit }) => {
    const setValue = useCallback(setFieldValue, [])

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={60}
        style={apply('flex full px-5')}
      >
        <View style={styles.inputWrapper}>
          <InputText
            placeholder='Masukkan nomor HP'
            name='phone'
            keyboardType='phone-pad'
            value={values.phone}
            error={errors.phone}
            setFieldValue={setValue}
          />
        </View>

        <View style={[styles.inputWrapper, apply('items-center')]}>
          <Button
            type={ButtonType.PRIMARY}
            title='Masuk'
            onPress={(e) => {handleSubmit(e)}}
          />

          <Text style={[styles.desc, apply('my-8')]}>Belum punya akun?</Text>

          <Button
            type={ButtonType.SECONDARY}
            title='Daftar Sekarang'
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

  /**
   * Formik submit handler
   * @param values
   * @param actions
   * @returns {Promise<boolean>}
   * @private
   */
  const _handleSubmit = async (values, actions) => {
    actions.setSubmitting(false)

    const dataToSend = {
      sign_in: {
        phone: values.phone
      }
    }

    navigation.navigate("VerifOTP", { phone: values.phone })

    return false
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={apply('pt-32')}>
        <View style={apply('flex items-center justify-end mb-10')}>
          <Image source={Images.appLogo} />

          <View style={apply('full items-center mt-4')}>
            <Text style={styles.title}>HelpDesk IT</Text>
            <Text style={styles.desc}>Masuk</Text>
          </View>
        </View>

        <View style={apply('flex full')}>
          <Formik
            onSubmit={_handleSubmit}
            validationSchema={Schema}
            validateOnChange={false}
            initialValues={{ phone: '' }}
          >
            {formProps => _renderForm(formProps)}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
