import React from "react";
import { View, Text } from "react-native";
import styles from "../src/styles/global";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function OnboardingC() {
  const router = useRouter();
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <View style={styles.onboardingTitleContainer}>
        <Text style={styles.onboardingTitle}>Choose with best security</Text>
        <Text style={styles.mainTitle}>Agreement</Text>
      </View>
      <Image
        source={require("../assets/images/onboarding3.png")} contentFit="contain"
        style={styles.onboardingImg}
      />
      <Text style={styles.onboardingDescription}>
        Find the perfect accommodation near your location, anytime and anywhere.
      </Text>
    </View>
    <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => {
          router.navigate("onboarding-d");
        }}
      >
        <Text style={styles.onboardingButtonText}>Next </Text>
      </TouchableOpacity>
    </View>
  );
}
