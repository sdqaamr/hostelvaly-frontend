import React from "react";
import styles from "@styles/global";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import HomeHeader from '@components/homeheader';
import RecommendedHostels from '@components/recommendedhostels';
import LiveViewedHostels from '@components/liveviewedhostels';
import TabIcons from '@components/tabicons';
import VisitorsFeedback from '@components/visitorsfeedback';
import CurrentStay from '@components/currentstay';

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