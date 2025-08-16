import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import { View, Text, Image, TouchableOpacity } from "react-native";
import LogoText from "@components/LogoText";
import onBoarding1 from "@assets/images/onboarding1.png";
import onBoarding2 from "@assets/images/onboarding2.png";
import onBoarding3 from "@assets/images/onboarding3.png";
import SvgComponent from "@assets/images/SVG/Onboarding4";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";
import styles from "@styles/global";
import AntDesign from '@expo/vector-icons/AntDesign';

const slides = [
  {
    key: "one",
    title: "Welcome to ",
    subtitle:
      "Welcome to HostelValy, your app for budget-friendly accommodation.",
    image: onBoarding1,
  },
  {
    key: "two",
    title: "Book Hostel Anywhere ",
    subtitle:
      "Find the perfect accommodation near your location, anytime and anywhere.",
    image: onBoarding2,
  },
  {
    key: "three",
    title: "Choose with best security ",
    subtitle:
      "Find the perfect accommodation near your location, anytime and anywhere.",
    image: onBoarding3,
  },
  {
    key: "four",
    subtitle: "Effortless search, budget-friendly hostels near you.",
    isSvg: true,
  },
];

const CustomButton = ({ label, onPress, style }) => (
  <View>
    <Text
      onPress={onPress}
      style={[
        styles.onboardingLabel,
        style,
        styles.onboardingButton
      ]}
    >
      {label}
    </Text>
  </View>
);

const Onboarding = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  return (
    <SafeAreaView style={styles.flex} edges={["bottom"]}>
      <AppIntroSlider
      ref={sliderRef}
      data={slides}
      renderItem={({ item }) => (
        <View
          style={[
            styles.onboardingContainer,
            { backgroundColor: colors.background },
          ]}
        >
          {currentIndex > 0 && (
            <TouchableOpacity
              onPress={() => sliderRef.current?.goToSlide(currentIndex - 1)}
              style={styles.onboardingBackButton}
            >
              <AntDesign name="arrowleft" size={24} color={colors.primary} />
            </TouchableOpacity>
          )}
          <View style={styles.onboardingTitleContainer}>
            <Text style={styles.onboardingTitle}>{item.title}</Text>
            {(item.key === "one" || item.key === "four") && <LogoText />}
            {item.key === "two" && (
              <Text style={styles.mainTitle}>Location</Text>
            )}
            {item.key === "three" && (
              <Text style={styles.mainTitle}>Agreement</Text>
            )}
          </View>
          {item.isSvg ? (
            <View style={styles.extraVerticalPadding}>
              <SvgComponent />
            </View>
          ) : (
            <Image source={item.image} style={styles.onboardingImg} />
          )}
          <Text style={styles.onboardingDescription}>{item.subtitle}</Text>
        </View>
      )}
      renderNextButton={(props) => <CustomButton label="Next" {...props} />}
      renderSkipButton={(props) =>
        currentIndex < slides.length - 1 ? (
          <CustomButton label="Skip" {...props} />
        ) : null
      }
      showSkipButton={currentIndex < slides.length - 1}
      renderDoneButton={(props) => <CustomButton label="Done" {...props} />}
      bottomBarColor={colors.background}
      onSlideChange={(index) => setCurrentIndex(index)}
      onDone={() => router.navigate("/account-entry")}
      onSkip={() => router.navigate("/account-entry")}
      activeDotStyle={styles.activeDotStyle}
    />
    </SafeAreaView>
  );
};
export default Onboarding;