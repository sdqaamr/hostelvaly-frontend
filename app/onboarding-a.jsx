import React from "react";
import { View, Text } from "react-native";
import styles from "../src/styles/global";
import LogoText from "../src/components/logotext";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { Pressable } from "react-native";

export default function OnboardingA() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.onboardingTitleContainer}>
          <Text style={styles.onboardingTitle}>Welcome to </Text>
          <LogoText />
        </View>
        <Image
          source={require("../assets/images/onboarding1.png")}
          contentFit="contain"
          contentPosition="center"
          style={styles.onboardingImg}
        />
        <Text style={styles.onboardingDescription}>
          Welcome to StaySphere, your app for budget-friendly accomodation.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => {
          router.navigate("onboarding-b");
        }}
      >
        <Text style={styles.onboardingButtonText}>Next </Text>
      </TouchableOpacity>
    </View>
  );
}
