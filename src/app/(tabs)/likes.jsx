import React from "react";
import styles from "@styles/global";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Likes = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Likes!</Text>
      </View>
    </SafeAreaView>
  );
};
export default Likes;