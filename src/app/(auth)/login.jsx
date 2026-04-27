import React, { useState } from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import AntDesign from '@expo/vector-icons/AntDesign'
import GoogleIcon from '@assets/images/SVG/Google'
import { useRouter } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors } from '@constants/global'
import { loginUser } from '../../../services/api'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorList, setErrorList] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const handleLogin = async () => {
    try {
      setLoading(true)

      const res = await loginUser({ email, password })

      console.log('LOGIN RESPONSE:', res)

      if (!res.success) {
        console.log('LOGIN ERROR:', res.error)
        return
      }

      const { token, user } = res.data
      const role = user.role

      console.log('ROLE:', role)

      // 🔐 Save token later (AsyncStorage)
      // await AsyncStorage.setItem("token", token);

      // 🚦 ROLE-BASED NAVIGATION
      if (role === 'admin') {
        router.replace('../admin') // Admin panel
      } else {
        router.replace('/verify') // Student / Owner flow
      }
    } catch (err) {
      console.log('Network error:', err.message)
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
