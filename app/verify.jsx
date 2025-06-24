import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Verify() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>
          Verified!
        </Text>
        <Text style={styles.verifyText}>Your account has been verified successfully</Text>
        <Text></Text>
        
        <TouchableOpacity onPress={() => {
          router.navigate("home");
        }} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
