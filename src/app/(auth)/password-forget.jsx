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
import { useRouter } from 'expo-router'
import { BASE_URL } from '../../../services/config'

const PasswordForget = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const showToast = msg => ToastAndroid.show(msg, ToastAndroid.SHORT)

  const handleSubmit = async () => {
    if (!email.trim()) {
      showToast('Email is required')
      return
    }

    if (!isValidEmail(email)) {
      showToast('Enter a valid email address')
      return
    }

    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      console.log('FORGOT PASSWORD RESPONSE:', data)

      if (!data.success) {
        console.log('FORGOT PASSWORD ERROR:', data.message || data.error)
        showToast(data.message || data.error?.[0] || 'Request failed')
        return
      }

      showToast('Email verified. You can reset your password.')

      router.push({
        pathname: '/password-reset',
        params: { email }
      })
    } catch (err) {
      console.log('NETWORK ERROR (forgot password):', err.message)
      showToast('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Forgot{'\n'}Password?</Text>

        <TextInput
          style={styles.textInput}
          placeholder='Email address'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {loading ? 'Sending...' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PasswordForget
