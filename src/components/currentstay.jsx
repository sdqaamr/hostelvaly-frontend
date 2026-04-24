import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import CurrentStayCard from "./CurrentsStayCard";

const CurrentStay = () => {
  return (
    <View>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Your Current Stay{"  "}</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <CurrentStayCard />
      </View>
    </View>
  );
};
export default CurrentStay;
