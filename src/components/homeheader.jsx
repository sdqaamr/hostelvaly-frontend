import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import LogoText from "./LogoText";
import SortbyPill from "./SortbyPill";

const HomeHeader = ({ openSortBottomSheet }) => {
  return (
    <View style={styles.selfAlignment}>
      <View style={styles.homeHeaderContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={22} color="black" />
          <Text>Pakistan </Text>
        </View>
        <View style={styles.logotextAndSearchContainer}>
          <LogoText />

          <TouchableOpacity style={styles.homeHeaderImgContainer}>
            <Image
              source="https://wallpapers.com/images/file/cute-profile-picture-bxmwah5el6rxxp8g.jpg"
              style={styles.homeHeaderImg}
              contentFit="cover"
              contentPosition="center"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryButtonsContainer}>
          <View style={styles.homeHeaderSearchContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <Feather style={styles.searchIcon} name="search" />
            </TouchableOpacity>
            <TextInput
              maxLength={30}
              style={styles.homeHeaderSearchTextInput}
              placeholder="Search hostels"
            />
          </View>
          <SortbyPill openSortBottomSheet={openSortBottomSheet} />
        </View>
      </View>
    </View>
  );
};
export default HomeHeader;
