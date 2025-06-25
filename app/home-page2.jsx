import React from "react";
import styles from "../src/styles/global";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import HomeHeader from '../src/components/homeheader';
import RecommendedHostels from '../src/components/recommendedhostels';
import LiveViewedHostels from '../src/components/liveviewedhostels';
import TabIcons from '../src/components/tabicons';
import VisitorsFeedback from '../src/components/visitorsfeedback';
import CurrentStay from '../src/components/currentstay';

export default function HomePage2() {
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
      <TabIcons />
    </SafeAreaView>
  );
}