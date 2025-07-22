import React from "react";
import styles from "@styles/global";
import { Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function GenderPill(props) {
  const { openGenderBottomSheet } = props;
  return (
      <TouchableOpacity style={styles.categoryButton} onPress={openGenderBottomSheet}>
        <Text style={styles.categoryButtonText}>Gender</Text>
        <Entypo name="chevron-small-down" size={24} color="gray" />
      </TouchableOpacity>
  );
}
