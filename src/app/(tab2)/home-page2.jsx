import React from "react";
import styles from "@styles/global";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import HomeHeader from "@components/HomeHeader";
import RecommendedHostels from "@components/RecommendedHostels";
import LiveViewedHostels from "@components/LiveViewedHostels";
import Reviews from "@components/Reviews";
import CurrentStay from "@components/CurrentStay";

const HomePage2 = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right", "top"]}>
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader />
          <CurrentStay />
          <RecommendedHostels />
          <LiveViewedHostels />
          <Reviews />
          <Text> </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage2;