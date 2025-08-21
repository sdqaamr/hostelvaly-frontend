import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@styles/global";
import { useRouter } from "expo-router";

const AccountEntry = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.screensImgContainer}>
          <Image
            source={require("../assets/images/onboarding1.png")}
            contentFit="contain"
            style={styles.screensImg}
          />
        </View>
        <View style={styles.accountEntryContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              router.navigate("(auth)/login");
            }}
          >
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryLightButton}
            onPress={() => {
              router.navigate("(auth)/register");
            }}
          >
            <Text style={styles.primaryLightButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerContainer}
            onPress={() => {
              router.navigate("/home");
            }}
          >
            <Text style={styles.footerText}> Continue as a guest </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AccountEntry;
