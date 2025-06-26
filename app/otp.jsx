import React, { useRef } from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function OTP() {
  const router = useRouter();
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          OTP {"\n"}Verify!
        </Text>
        <Text style={styles.simpleText}>Enter the 4-digit code we have sent to your email.</Text>
        <Text></Text>
        <View style={styles.otpBoxesContainer}>
            <TextInput
              style={styles.otpTextInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input1}
              onChangeText={text => {
                if (text.length === 1) input2.current.focus();
              }}
            />
            <TextInput
              style={styles.otpTextInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input2}
              onChangeText={text => {
                if (text.length === 1) input3.current.focus();
                if (text.length === 0) input1.current.focus();
              }}
            />
            <TextInput
              style={styles.otpTextInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input3}
              onChangeText={text => {
                if (text.length === 1) input4.current.focus();
                if (text.length === 0) input2.current.focus();
              }}
            />
            <TextInput
              style={styles.otpTextInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input4}
              onChangeText={text => {
                if (text.length === 0) input3.current.focus();
              }}
            />
        </View>
        <TouchableOpacity onPress={() => {
          router.navigate("verify");
        }} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
