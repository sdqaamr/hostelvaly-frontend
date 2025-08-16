import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";

const ViewingCard = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.card}>
        <Image
          source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
          style={styles.cardImage}
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
          {/* <TouchableOpacity>
            <View style={styles.cardImgIconRoundContainer}>
              <Octicons name="share-android" style={styles.shareIcon} />
            </View>
          </TouchableOpacity> */}
        </View>
        <View style={[styles.viewingPeopleContainer]}>
          <Ionicons
            name="eye"
            size={18}
            color="white"
            style={styles.selfAlignment}
          />
          <Text style={[styles.primaryButtonText, styles.selfAlignment]}>
            {" "}
            30+ People Viewing Now{" "}
          </Text>
        </View>
        <View style={styles.nameAndLocContainer}>
          <View>
            <Text style={styles.cardsHeadingText}>Aroma Hostel </Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={20} color="gray" />
              <Text style={styles.cardsSimpleText}>Islamabad </Text>
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

        <TouchableOpacity
          onPress={() => {
            alert("Schedule visit feature is coming soon!");
            // router.navigate("/");
          }}
        >
          <Text style={styles.cardsPrimaryButton}>SCHEDULE VISIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate("property-details");
          }}
        >
          <Text style={styles.cardsSecondaryButton}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ViewingCard;
