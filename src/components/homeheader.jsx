import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import LogoText from "./LogoText";
import GenderPill from "./GenderPill";
import SortbyPill from "./SortbyPill";
import { colors } from "@constants/global";

const HomeHeader = ({ openSortBottomSheet, openGenderBottomSheet }) => {
  return (
    <View style={{ alignSelf: "center" }}>
      <View style={styles.homeHeaderContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={22} color="black" />
          <Text>Pakistan </Text>
        </View>
        <View style={styles.logotextAndSearchContainer}>
          <LogoText />

          <TouchableOpacity
            style={{
              height: 52,
              width: 52,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              marginBottom: 23,
              marginTop: 3,
            }}
          >
            <Image
              source="https://wallpapers.com/images/file/cute-profile-picture-bxmwah5el6rxxp8g.jpg"
              style={{ height: 50, width: 50 }}
              contentFit="cover"
              contentPosition="center"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryButtonsContainer}>
          <View style={{ flexDirection: "row", position: "relative" }}>
            <TouchableOpacity style={styles.searchButton}>
              <Feather style={styles.searchIcon} name="search" />
            </TouchableOpacity>
            <TextInput
              maxLength={30}
              style={{
                paddingVertical: 7.6,
                width: 240,
                borderRadius: 9,
                borderColor: "black",
                borderWidth: 0.7,
                position: "absolute",
                left: 10,
                zIndex: 1,
                alignSelf: "center",
                paddingLeft: 42,
                paddingRight: 3,
                fontSize: 15,
                backgroundColor: "white",
              }}
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
