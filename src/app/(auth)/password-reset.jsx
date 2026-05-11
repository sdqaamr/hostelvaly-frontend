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
import { useRouter, useLocalSearchParams } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { colors } from '@constants/global'
import { BASE_URL } from '../../../services/config'

// This screen is accessed when user is not logged in and forgets their password.

const PasswordReset = () => {
  const router = useRouter()
  const { email } = useLocalSearchParams()

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [loading, setLoading] = useState(false)

  const showToast = msg => ToastAndroid.show(msg, ToastAndroid.SHORT)

  const handleResetPassword = async () => {
    // 🔴 validations
    if (!newPassword || !confirmPassword) {
      showToast('All fields are required')
      return
    }

    if (newPassword.length < 6) {
      showToast('Password must be at least 6 characters')
      return
    }

    if (newPassword !== confirmPassword) {
      showToast('Passwords do not match')
      return
    }

    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          newPassword,
          confirmPassword
        })
      })

      const data = await res.json()

      if (!data.success) {
        showToast(data.message || 'Something went wrong')
        return
      }

      // ✅ success
      showToast('Password reset successfully')

      router.replace('/login')
    } catch (err) {
      showToast('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Reset {'\n'}Password!</Text>

        <Text style={styles.simpleText}>Enter your new password below.</Text>

        {/* NEW PASSWORD */}
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter Password'
              secureTextEntry={!showPassword}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(prev => !prev)}
              style={styles.eyeContainer}
            >
              <Feather
                name={showPassword ? 'eye' : 'eye-off'}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CONFIRM PASSWORD */}
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Confirm Password'
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(prev => !prev)}
              style={styles.eyeContainer}
            >
              <Feather
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* BUTTON */}
        <TouchableOpacity
          onPress={handleResetPassword}
          style={styles.primaryButton}
          disabled={loading}
        >
          <Text style={styles.primaryButtonText}>
            {loading ? 'Updating...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PasswordReset
