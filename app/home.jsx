import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from '../src/components/homeheader';
import RecommendedHostels from '../src/components/recommendedhostels';
import ViewedHostels from '../src/components/viewedhostels';
import TabIcons from '../src/components/tabicons';
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
      <View style={styles.container}>
        <HomeHeader />
        <RecommendedHostels />
        <ViewedHostels />
      </View>
      </ScrollView>
      <TabIcons />
    </SafeAreaView>
  );
}