import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";

const HostelCard = ({ openBottomSheet }) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.card}>
        <Image
          source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
          style={styles.cardImage}
        />
        <View style={styles.cardImgIconsContainer}>
          <TouchableOpacity style={styles.cardImgIconRoundContainer}>
            <MaterialCommunityIcons
              name="cards-heart-outline"
              style={styles.likeIcon}
            />
          </TouchableOpacity>
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
        <View style={styles.cardIconsContainer}>
          <Feather name="wifi" size={24} color="gray" />
          <MaterialCommunityIcons
            name="food-fork-drink"
            size={24}
            color="gray"
          />
          <FontAwesome6 name="bottle-water" size={22} color="gray" />
          <MaterialIcons name="hotel" size={24} color="gray" />
        </View>
        <View style={styles.cardsCategoryButtonContainer}>
          <TouchableOpacity style={styles.cardsCategoryButton}>
            <AntDesign name="star" size={18} color={colors.ratingStar} />
            <Text>4.8 </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={openBottomSheet}>
          <Text style={styles.cardsPrimaryButton}>SCHEDULE VISIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate("(booking-flow)/property-details");
          }}
        >
          <Text style={styles.cardsSecondaryButton}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default HostelCard;
