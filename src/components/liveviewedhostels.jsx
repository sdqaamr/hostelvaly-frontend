import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from '@expo/vector-icons/Ionicons';
import ViewingCard from "./ViewingCard";

const LiveViewedHostels = () => {
  return (
    <>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Most Viewed Hostel's{"  "}</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.recommendationsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsContainer}>
            <ViewingCard />
            <ViewingCard />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default LiveViewedHostels;
