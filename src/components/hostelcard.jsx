import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function HostelCard({ openBottomSheet }) {
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
          <TouchableOpacity>
            <View style={styles.cardImgIconRoundContainer}>
              <Octicons name="share-android" style={styles.shareIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.nameAndLocContainer}>
          <View>
            <Text style={styles.cardsHeadingText}>Aroma Hostel </Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={20} color="gray" />
              <Text style={styles.cardsSimpleText}>Islamabad </Text>
            </View>
          </View>
          <View style={styles.cardsPriceContainer}>
            <Text style={styles.cardsSimpleText}>Starts from </Text>
            <Text>
              <Text style={styles.cardsHeadingText}>Rs 18000 </Text>
              <Text style={styles.cardsSimpleText}>/mo* </Text>
            </Text>
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
          <TouchableOpacity>
            <View style={styles.cardsCategoryButton}>
              <MaterialCommunityIcons
                name="bed-queen"
                size={24}
                color="#8100d1"
              />
              <Text style={styles.cardsCategoryButtonText}>Single </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.cardsCategoryButton}>
              <MaterialCommunityIcons
                name="bed-queen"
                size={24}
                color="#8100d1"
              />
              <Text style={styles.cardsCategoryButtonText}>Double </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={styles.cardsSmallButton}>
            <Text style={styles.cardsCategoryButtonText}> + 2 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openBottomSheet} // open the bottom sheet on press
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
}
