import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ViewingCard from "./viewingcard";

export default function LiveViewedHostels() {
  return (
    <View>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Most Viewed Hostel's{"  "}</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
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
    </View>
  );
}
