import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const NotFound = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Unmatched Route!</Text>
        <Text style={styles.verifyText}>
          The page you're looking for doesn't exist.
        </Text>
        <Text></Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/home");
          }}
          style={styles.notFoundButton}
        >
          <Text style={styles.primaryButtonText}>Go to Home </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default NotFound;