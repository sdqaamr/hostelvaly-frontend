import React from "react";
import styles from "../styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import LogoText from "./logotext";

export default function HomeHeader() {
  return (
    <View>
      <View style={styles.homeHeaderContainer}>
        {/* header started */}
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={22} color="black" />
          <Text>Pakistan </Text>
        </View>
        <View style={styles.logotextAndSearchContainer}>
          <LogoText />
          <TouchableOpacity>
            <View style={styles.searchButton}>
              <Feather style={styles.searchIcon} name="search" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Filters </Text>
              <FontAwesome style={styles.sliderIcon} name="sliders" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Gender</Text>
              <Entypo name="chevron-small-down" size={24} color="gray" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>Sort by</Text>
              <Entypo name="chevron-small-down" size={24} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
        {/* header closed */}
      </View>
    </View>
  );
}
