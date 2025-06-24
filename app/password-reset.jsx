import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function PasswordReset() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          Reset {"\n"}Password!
        </Text>
        <Text style={styles.simpleText}>Please enter yout new password and then confirm it.</Text>
        <Text></Text>
        <TextInput style={styles.textInput} placeholder="Enter Password" secureTextEntry />
        <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry />
        <TouchableOpacity onPress={() => {
          router.navigate("login");
        }} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
