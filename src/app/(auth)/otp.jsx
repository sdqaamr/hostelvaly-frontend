import React, { useRef, useState } from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { BASE_URL } from '../../../services/config'
import { useLocalSearchParams } from "expo-router"

const OTP = () => {
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

  const handleVerify = async () => {
  try {
    setLoading(true);

    const res = await fetch(`${BASE_URL}/auth/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        otp: otp,
      }),
    });

    const data = await res.json();

    console.log("OTP RESPONSE:", data);

    if (!data.success) {
      setErrorMessage(data.error?.[0] || data.message);
      return;
    }

    router.replace("/login");

  } catch (err) {
    console.log("Network error:", err.message);
    setErrorMessage("Network error. Try again.");
  } finally {
    setLoading(false);
  }
};

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
