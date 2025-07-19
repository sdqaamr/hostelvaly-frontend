import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../src/styles/global";
import Onboarding from "react-native-onboarding-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoText from "../src/components/logotext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import SvgComponent from "../assets/SVG/Onboarding4";

const CustomButton = ({ label, onPress }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 15,
      padding: 8,
      backgroundColor: "#8100d1",
      borderRadius: 8,
    }}
    onPress={onPress}
    accessible
    accessibilityRole="button"
  >
    <Text style={{ color: "#fff", fontWeight: "bold", marginHorizontal: 10 }}>
      {label}
    </Text>
  </TouchableOpacity>
);

const OnBoarding = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Onboarding
        bottomBarColor="#F0F0F0"
        onDone={() => router.navigate("/account-entry")}
        onSkip={() => router.navigate("/account-entry")}
        SkipButtonComponent={(props) => (
          <CustomButton {...props} label="Skip" />
        )}
        NextButtonComponent={(props) => (
          <CustomButton {...props} label="Next" />
        )}
        DoneButtonComponent={(props) => <CustomButton {...props} label="Go!" />}
        imageContainerStyles={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        pages={[
          {
            backgroundColor: "#F0F0F0",
            image: (
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
                  Welcome to HostelValy, a hostel-searching app for budget-friendly
                  accomodation.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#F0F0F0",
            image: (
              <View style={styles.container}>
                <View style={styles.onboardingTitleContainer}>
                  <Text style={styles.onboardingTitle}>
                    Book Hostel Anywhere
                  </Text>
                  <Text style={styles.mainTitle}>Location</Text>
                </View>
                <Image
                  source={require("../assets/images/onboarding2.png")}
                  style={styles.onboardingImg}
                  contentFit="contain"
                />
                <Text style={styles.onboardingDescription}>
                  Find the perfect accommodation near your location, anytime and
                  anywhere.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#F0F0F0",
            image: (
              <View style={styles.container}>
                <View style={styles.onboardingTitleContainer}>
                  <Text style={styles.onboardingTitle}>
                    Choose with best security
                  </Text>
                  <Text style={styles.mainTitle}>Agreement</Text>
                </View>
                <Image
                  source={require("../assets/images/onboarding3.png")}
                  contentFit="contain"
                  style={styles.onboardingImg}
                />
                <Text style={styles.onboardingDescription}>
                  Find the perfect accommodation near your location, anytime and
                  anywhere.
                </Text>
              </View>
            ),
          },
          {
            backgroundColor: "#F0F0F0",
            image: (
              <View style={styles.container}>
                <LogoText />
                <View style={{ paddingVertical: 50 }}>
                  <SvgComponent />
                </View>
                <Text style={styles.onboardingDescription}>
                  Effortless search, budget-friendly hostels near you.
                </Text>
              </View>
            ),
          },
        ]}
      />
    </SafeAreaView>
  );
};
export default OnBoarding;
