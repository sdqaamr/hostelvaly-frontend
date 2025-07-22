import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import HostelCard from "./hostelcard";

export default function RecommendedHostels({ openBottomSheet }) {
  return (
    <View>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Recommended Hostel's{"  "}</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.recommendationsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsContainer}>
            <HostelCard openBottomSheet={openBottomSheet} />
            <HostelCard openBottomSheet={openBottomSheet} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
