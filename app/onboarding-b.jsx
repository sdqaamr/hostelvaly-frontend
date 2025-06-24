import React from "react";
import { View, Text } from "react-native";
import styles from "../src/styles/global";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import SvgComponent from "../assets/SVG/Onboarding2";
import { TouchableOpacity } from "react-native";

export default function OnboardingB() {
  const router = useRouter();
  return (
    <>
    <View style={styles.container}>
      <View style={styles.onboardingTitleContainer}>
        <Text style={styles.onboardingTitle}>Book Hostel Anywhere</Text>
        <Text style={styles.mainTitle}>
          Location
        </Text>
      </View>
      <Image
        source={require("../assets/images/onboarding2.png")}
        style={styles.onboardingImg} contentFit="contain"
      />
      <Text style={styles.onboardingDescription}>
        Find the perfect accommodation near your location, anytime and anywhere.
      </Text>
    </View>
    <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => {
          router.navigate("onboarding-c");
        }}
      >
        <Text style={styles.onboardingButtonText}>Next </Text>
      </TouchableOpacity>
    </>
  );
}