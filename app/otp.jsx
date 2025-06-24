import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function OTP() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          OTP {"\n"}Verify!
        </Text>
        <Text style={styles.simpleText}>Enter the 4-digit code we have sent to your email.</Text>
        <Text></Text>
        <View style={styles.otpBoxesContainer}>
            <TextInput style={styles.otpTextInput} keyboardType="numeric" />
            <TextInput style={styles.otpTextInput} keyboardType="numeric" />
            <TextInput style={styles.otpTextInput} keyboardType="numeric" />
            <TextInput style={styles.otpTextInput} keyboardType="numeric" />
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
