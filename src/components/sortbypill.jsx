import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const SortbyPill = (props) => {
  const { openSortBottomSheet } = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={openSortBottomSheet}
      >
        <Text style={styles.categoryButtonText}>Sort</Text>
        <Entypo name="chevron-small-down" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};
export default SortbyPill;
