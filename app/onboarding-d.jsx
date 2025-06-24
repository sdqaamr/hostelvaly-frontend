import React from "react";
import { View, Text } from "react-native";
import styles from "../src/styles/global";
import LogoText from "../src/components/logotext";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import SvgComponent from "../assets/SVG/Onboarding4";

export default function OnboardingD() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <LogoText />
      <View>
        <SvgComponent />
      </View>
      <Text style={styles.onboardingDescription}>
        Effortless search, budget-friendly hostels near you.
      </Text>
      </View>
      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => {
          router.navigate("account-entry");
        }}
      >
        <Text style={styles.onboardingButtonText}>Get Started! </Text>
      </TouchableOpacity>
    </View>
  );
}
