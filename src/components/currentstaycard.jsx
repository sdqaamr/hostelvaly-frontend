import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";

const CurrentStayCard = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.currentCard}>
        <Image
          source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
          style={styles.currentCardImage}
        />
        <View style={styles.cardImgIconsContainer}>
          <TouchableOpacity>
            <View style={styles.cardImgIconRoundContainer}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                style={styles.likeIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.stayButton}>
          <Text>On Going Stay </Text>
        </View>
        <View style={styles.viewingPeopleContainer}>
          <Ionicons
            name="eye"
            size={18}
            color="white"
            style={styles.selfAlignment}
          />
          <Text style={[styles.primaryButtonText, styles.selfAlignment]}>
            {" "}
            43 People Viewing Now{" "}
          </Text>
        </View>
        <View style={styles.nameAndLocContainer}>
          <View>
            <Text style={styles.cardsHeadingText}>Al-Fateh Girls Hostel </Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={20} color="gray" />
              <Text style={styles.cardsSimpleText}>
                Near Central Park, Faisalabad{" "}
              </Text>
            </View>
          </View>
        </View>
        <Text> </Text>
        <View style={styles.currentCardsCategoryButtonContainer}>
          <Text style={styles.cardsSimpleText}>Joined on: 1-July-2024 </Text>
        </View>
        <View style={styles.currentCardsCategoryButtonContainer}>
          <TouchableOpacity style={styles.cardsCategoryButton}>
            <AntDesign name="star" size={18} color={colors.ratingStar} />
            <Text>4.8 </Text>
          </TouchableOpacity>
          <View style={styles.currentDaysLeftButton}>
            <Text>20 Days Left!</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            alert("Schedule visit feature is coming soon!");
            // router.navigate("/");
          }}
        >
          <Text style={styles.cardsPrimaryButton}>RESCHEDULE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate("property-details");
          }}
        >
          <Text style={styles.cardsSecondaryButton}>CHECK OUT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default CurrentStayCard;
