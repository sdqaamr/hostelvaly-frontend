import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Image } from "expo-image";
import RecommendedHostels from "../src/components/recommendedhostels";
import TabIcons from "../src/components/tabicons";
import { useRouter } from "expo-router";
import VisitorsFeedback from "../src/components/visitorsfeedback";

export default function PropertyDetails() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <FontAwesome name="angle-left" size={26} color="black" />
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.propertyDetailsHeaderText}>
                Property Details{" "}
              </Text>
            </View>
            <View style={styles.propertyDetailsHeaderIcons}>
              <MaterialCommunityIcons
                name="cards-heart-outline"
                style={styles.propertyDetailsLike}
              />
              <Octicons
                name="share-android"
                style={styles.propertyDetailsShare}
              />
            </View>
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.cardsSimpleText}>Home </Text>
            <Entypo
              name="chevron-small-right"
              size={22}
              color="gray"
              style={{ includeFontPadding: false }}
            />
            <Text>Property Details</Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.propertyImgContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
                  style={styles.propertyImg}
                  contentFit="cover"
                />
                <Image
                  source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
                  style={styles.propertyImg}
                  contentFit="cover"
                />
              </ScrollView>
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
            <View style={styles.propertyRatingContainer}>
              <Text style={styles.cardsHeadingText}>
                <AntDesign name="star" size={16} color="#FCD003" /> 8.5 rating{" "}
              </Text>
              <Text style={styles.cardsSimpleText}> (1234 reviews)</Text>
            </View>
            <View style={styles.servicesContainer}>
              <Text style={styles.cardsHeadingText}>
                {"  "}Amenities & Services{"  "}
              </Text>
              <View style={styles.servicesInnerContainer}>
                <View style={styles.servicesContentContainer}>
                  <Ionicons name="fast-food" size={24} color="black" />
                  <Text style={styles.servicesText}>Food</Text>
                </View>
                <View style={styles.servicesContentContainer}>
                  <Feather name="wifi" size={24} color="black" />
                  <Text style={styles.servicesText}>WIFI</Text>
                </View>
                <View style={styles.servicesContentContainer}>
                  <MaterialIcons
                    name="local-laundry-service"
                    size={24}
                    color="black"
                  />
                  <Text style={styles.servicesText}>Laundry </Text>
                </View>
                <View style={styles.servicesContentContainer}>
                  <MaterialIcons name="garage" size={24} color="black" />
                  <Text style={styles.servicesText}>Parking </Text>
                </View>
              </View>
              <View style={styles.servicesInnerContainer}>
                <View style={styles.servicesContentContainer}>
                  <MaterialIcons name="air" size={24} color="black" />
                  <Text style={styles.servicesText}>AC</Text>
                </View>
                <View style={styles.servicesContentContainer}>
                  <MaterialIcons name="bed" size={24} color="black" />
                  <Text style={styles.servicesText}>Beds</Text>
                </View>
              </View>
            </View>
            <VisitorsFeedback />
            
          </View>

          <RecommendedHostels />

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.propertyDetailsLocationContainer}>
              <Entypo name="location" size={24} color="black" />
              <Text style={styles.cardsHeadingText}>Get Direction </Text>
            </View>
            <Image
              source="https://images.zameen.com/smap/400/300/33.641370278611/73.042983412743/image.jpeg?quality=80&imageformat=jpeg"
              contentFit="cover"
              style={styles.propertyDetailsGoogleMap}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.propertyDetailsButtonsContainer}>
        <TouchableOpacity
          onPress={() => {
            router.navigate("booking");
          }}
          style={styles.propertyDetailsPrimaryButton}
        >
          <Text style={styles.propertyDetailsPrimaryButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate("schedule-visit");
          }}
          style={styles.propertyDetailsSecondaryButton}
        >
          <Text style={styles.propertyDetailsSecondaryButtonText}>
            SCHEDULE VISIT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
