import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Auth
import LoginScreen from "../Containers/Auth/LoginScreen"
import RegisterScreen from "../Containers/Auth/RegisterScreen"
import VerifOTPScreen from "../Containers/Auth/VerifOTPScreen"

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="VerifOTP" component={VerifOTPScreen} options={{ title: "Verifikasi OTP" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
