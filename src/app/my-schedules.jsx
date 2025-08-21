import React from "react";
import styles from "@styles/global";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RecommendedHostels from "@components/RecommendedHostels";
import ScheduleCard from "@components/ScheduleCard";

const MySchedules = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea2}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <FontAwesome name="angle-left" size={26} color="black" />
            </TouchableOpacity>
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.propertyDetailsHeaderText}>
                My Schedules{" "}
              </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.hostelsListContainer}>
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
          </View>

          <RecommendedHostels />
          <View style={styles.extraPadding}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MySchedules;
