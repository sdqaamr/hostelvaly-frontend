import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import LogoText from "./LogoText";
import GenderPill from "./GenderPill";
import SortbyPill from "./SortbyPill";

const HomeHeader = ({
  openSortBottomSheet,
  openGenderBottomSheet,
}) => {
  return (
    <View style={styles.homeHeaderContainer}>
      <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={22} color="black" />
        <Text>Pakistan </Text>
      </View>
      <View style={styles.logotextAndSearchContainer}>
        <LogoText />
        <TouchableOpacity style={styles.searchButton}>
          <Feather style={styles.searchIcon} name="search" />
        </TouchableOpacity>
      </View>
      <View style={styles.categoryButtonsContainer}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryButtonText}>Filters </Text>
          <FontAwesome style={styles.sliderIcon} name="sliders" />
        </TouchableOpacity>
        <GenderPill openGenderBottomSheet={openGenderBottomSheet} />
        <SortbyPill openSortBottomSheet={openSortBottomSheet} />
      </View>
    </View>
  );
};
export default HomeHeader;