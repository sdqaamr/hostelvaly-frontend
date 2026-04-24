import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "@styles/global";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { testBackend } from "../../services/api";

const Splash = () => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("onboarding");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  console.log("Splash screen rendered");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/HostelValy.png")}
        style={styles.splashLogo}
        contentFit="contain"
        contentPosition="center"
      />
      <View style={styles.logoDescriptionContainer}>
        <Text style={styles.onboardingTitle}>A Hostel-Searching Mobile Application{" "}</Text>
      </View>
    </View>
  );
};
export default Splash;
