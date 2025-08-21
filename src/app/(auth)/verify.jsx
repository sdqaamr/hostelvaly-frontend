import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Verify = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Verified!</Text>
        <Text style={styles.verifyText}>
          Your account has been verified successfully
        </Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/home");
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Verify;
