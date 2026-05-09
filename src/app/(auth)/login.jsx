import React, { useState } from 'react'
import styles from '@styles/global'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ToastAndroid,
  Platform
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'
import GoogleIcon from '@assets/images/SVG/Google'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors } from '@constants/global'
import { BASE_URL } from '../../../services/config'

const Login = () => {
  const showToast = message => {
    if (!message) return

    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      Alert.alert('', message)
    }
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const resendOtp = async email => {
    try {
      const res = await fetch(`${BASE_URL}/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await res.json()
      return data
    } catch (err) {
      console.log('Resend OTP error:', err.message)
      return null
    }
  }

  const handleLogin = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()
      console.log('LOGIN RESPONSE:', data)

      // ❌ Backend error
      if (!data.success) {
        const message = data.error?.[0] || data.message

        // 🚨 Inactive account
        if (res.status === 403) {
          Alert.alert('Account Not Verified', message, [
            {
              text: 'Verify Now',
              onPress: async () => {
                const otpResponse = await resendOtp(email)

                if (otpResponse?.success) {
                  showToast('OTP sent to your email')
                  router.push({
                    pathname: '/otp',
                    params: { email }
                  })
                } else {
                  showToast(otpResponse?.error?.[0] || 'Failed to resend OTP')
                }
              }
            },
            { text: 'Cancel', style: 'cancel' }
          ])
          return
        }

        // ❌ All other backend errors
        showToast(message)
        return
      }

      // ✅ Login success
      const { user } = data.data
      showToast('Login successful')

      if (user.role === 'admin') {
        router.replace('../admin')
      } else {
        router.replace('/verify')
      }
    } catch (err) {
      console.log('Network error:', err.message)
      showToast('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          Welcome back! Glad to see you Again!{' '}
        </Text>
        <Text></Text>
        <TextInput
          style={styles.textInput}
          placeholder='Enter your email'
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter your password'
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
                color='#888'
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.additionalTextContainer}
          onPress={() => {
            router.navigate('password-forget')
          }}
        >
          <Text style={styles.additionalText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>
        <View style={styles.intermediateContainer}>
          <View style={styles.intermediateLine} />
          <Text style={styles.intermediateText}>or login with </Text>
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
                <GoogleIcon />
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
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate('register')
            }}
          >
            <Text style={styles.footerText}>Register Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default Login
