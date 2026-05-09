import React, { useState } from 'react'
import styles from '@styles/global'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'
import SvgComponent from '@assets/images/SVG/Google'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors } from '@constants/global'
import { BASE_URL } from '../../../services/config'

const Register = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleRegister = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          confirmPassword
        })
      })

      const data = await res.json()

      console.log('REGISTER RESPONSE:', data)

      if (!data.success) {
        const errorMsg = data.error?.[0] || data.message

        ToastAndroid.show(errorMsg, ToastAndroid.SHORT)

        return
      }

      // success → go to OTP screen
      router.navigate({
        pathname: '/otp',
        params: { email: email }
      })
    } catch (err) {
      console.log('Network error:', err.message)
      setErrorMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Hello! Register to get started </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Full Name'
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(prev => !prev)}
              style={styles.eyeContainer}
              accessibilityLabel={
                showPassword ? 'Hide password' : 'Show password'
              }
            >
              <Feather
                name={showPassword ? 'eye' : 'eye-off'}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Confirm password'
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(prev => !prev)}
              style={styles.eyeContainer}
              accessibilityLabel={
                showConfirmPassword ? 'Hide password' : 'Show password'
              }
            >
              <Feather
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={handleRegister} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {loading ? 'Registering...' : 'Register'}
          </Text>
        </TouchableOpacity>
        <View style={styles.intermediateContainer}>
          <View style={styles.intermediateLine} />
          <Text style={styles.intermediateText}>or register with</Text>
          <View style={styles.intermediateLine} />
        </View>
        <View style={styles.allIconsContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome5 name='facebook' size={35} color={colors.facebook} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View>
                <SvgComponent />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <AntDesign name='apple' size={35} color='black' />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate('login')
            }}
          >
            <Text style={styles.footerText}>Login Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Register
