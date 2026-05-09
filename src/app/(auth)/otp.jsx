import React, { useRef, useState } from 'react'
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
import { useRouter } from 'expo-router'
import { BASE_URL } from '../../../services/config'
import { useLocalSearchParams } from 'expo-router'

const OTP = () => {
  const showMessage = message => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    } else {
      Alert.alert('', message)
    }
  }

  const clearOtpInputs = () => {
    setOtp('')
    input1.current?.clear()
    input2.current?.clear()
    input3.current?.clear()
    input4.current?.clear()
    input1.current?.focus()
  }

  const router = useRouter()
  const { email } = useLocalSearchParams()
  const input1 = useRef(null)
  const input2 = useRef(null)
  const input3 = useRef(null)
  const input4 = useRef(null)

  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleOtpChange = (value, index) => {
    let newOtp = otp.split('')
    newOtp[index] = value
    setOtp(newOtp.join(''))
  }

  const resendOtp = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/resend-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      return await res.json()
    } catch (err) {
      console.log('Resend OTP error:', err.message)
      return null
    }
  }

  const handleVerify = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${BASE_URL}/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          otp: otp
        })
      })

      const data = await res.json()

      console.log('OTP RESPONSE:', data)

      if (!data.success) {
        const msg = data.message || data.error?.[0]

        // 🚨 OTP expired case
        if (msg === 'OTP expired') {
          Alert.alert(
            'OTP Expired',
            'Your OTP has expired. Do you want to resend it?',
            [
              {
                text: 'Resend OTP',
                onPress: async () => {
                  const resendResponse = await resendOtp()

                  if (resendResponse?.success) {
                    // ✅ CLEAR OLD OTP HERE
                    clearOtpInputs()

                    // ✅ DISAPPEARING MESSAGE (3–4 sec)
                    showMessage('A new OTP has been sent to your email')
                  } else {
                    showMessage(
                      resendResponse?.error?.[0] || 'Failed to resend OTP'
                    )
                  }
                }
              },
              { text: 'Cancel', style: 'cancel' }
            ]
          )
          return
        }

        showMessage(msg)
        return
      }

      router.replace('/login')
    } catch (err) {
      console.log('Network error:', err.message)
      setErrorMessage('Network error. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>OTP {'\n'}Verify!</Text>
        <Text style={styles.simpleText}>
          Enter the 4-digit code we have sent to your email.
        </Text>
        <Text></Text>
        <View style={styles.otpBoxesContainer}>
          <TextInput
            style={styles.otpTextInput}
            keyboardType='numeric'
            maxLength={1}
            ref={input1}
            onChangeText={text => {
              handleOtpChange(text, 0)
              if (text.length === 1) input2.current.focus()
            }}
          />
          <TextInput
            style={styles.otpTextInput}
            keyboardType='numeric'
            maxLength={1}
            ref={input2}
            onChangeText={text => {
              handleOtpChange(text, 1)
              if (text.length === 1) input3.current.focus()
              if (text.length === 0) input1.current.focus()
            }}
          />
          <TextInput
            style={styles.otpTextInput}
            keyboardType='numeric'
            maxLength={1}
            ref={input3}
            onChangeText={text => {
              handleOtpChange(text, 2)
              if (text.length === 1) input4.current.focus()
              if (text.length === 0) input2.current.focus()
            }}
          />
          <TextInput
            style={styles.otpTextInput}
            keyboardType='numeric'
            maxLength={1}
            ref={input4}
            onChangeText={text => {
              handleOtpChange(text, 3)
              if (text.length === 0) input3.current.focus()
            }}
          />
        </View>
        <TouchableOpacity onPress={handleVerify} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            {loading ? 'Verifying...' : 'Verify'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default OTP
