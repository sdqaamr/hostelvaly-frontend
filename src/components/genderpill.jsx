import React from "react";
import styles from "../styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import LogoText from "./logotext";
import { Modal } from "react-native";
import { useState } from "react";

export default function GenderPill(props) {
  const { openGenderBottomSheet } = props;
  return (
      <TouchableOpacity style={styles.categoryButton} onPress={openGenderBottomSheet}>
        <Text style={styles.categoryButtonText}>Gender</Text>
        <Entypo name="chevron-small-down" size={24} color="gray" />
      </TouchableOpacity>
  );
}
