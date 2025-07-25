import React from "react";
import styles from "@styles/global";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import HomeHeader from "@components/HomeHeader";
import RecommendedHostels from "@components/RecommendedHostels";
import LiveViewedHostels from "@components/LiveViewedHostels";
import VisitorsFeedback from "@components/VisitorsFeedback";
import CurrentStay from "@components/CurrentStay";

const HomePage2 = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader />
          <CurrentStay />
          <RecommendedHostels />
          <LiveViewedHostels />
          <VisitorsFeedback />
          <Text> </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage2;