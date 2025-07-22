import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function SortbyPill(props) {
  const { openSortBottomSheet } = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={openSortBottomSheet}
      >
        <Text style={styles.categoryButtonText}>Sort by</Text>
        <Entypo name="chevron-small-down" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
