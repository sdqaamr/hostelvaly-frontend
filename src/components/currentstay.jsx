import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import CurrentStayCard from "./CurrentStayCard";

const CurrentStay = () => {
  return (
    <View>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Your Current Stay{"  "}</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <CurrentStayCard />
      </View>
    </View>
  );
};
export default CurrentStay;