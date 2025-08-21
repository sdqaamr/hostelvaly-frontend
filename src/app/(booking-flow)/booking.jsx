import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";
import CalendarComponent from "@components/Calendar";

const Booking = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea2}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <FontAwesome name="angle-left" size={26} color="black" />
            </TouchableOpacity>
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.propertyDetailsHeaderText}>Booking </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.smallGrayFont}>Home</Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={styles.fontPadding}
            />
            <Text style={styles.smallGrayFont}>Details </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Booking </Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.relativePosition}>
              <Image
                source="https://i.dawn.com/large/2020/10/5f7c08a595ece.jpg"
                style={styles.propertyMainImage}
                contentFit="cover"
              />
              <TouchableOpacity style={styles.heartIconContainer}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  style={styles.propertyDetailsLike}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pillsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.pills}>
                  <AntDesign name="star" size={18} color={colors.ratingStar} />
                  <Text>4.8 </Text>
                </View>
                <View style={styles.pills}>
                  <Feather name="wifi" size={22} color="black" />
                  <Text>WIFI </Text>
                </View>
                <View style={styles.pills}>
                  <AntDesign name="Safety" size={22} color="black" />
                  <Text>Security </Text>
                </View>
                <View style={styles.pills}>
                  <MaterialIcons
                    name="local-laundry-service"
                    size={22}
                    color="black"
                  />
                  <Text style={styles.servicesText}>Laundry </Text>
                </View>
              </ScrollView>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>
                {"  "}Room Details{"  "}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>Select Room Type </Text>
                <View style={styles.flexDirection}>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio} />
                    <Text>AC</Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio} />
                    <Text>Fan </Text>
                  </View>
                  <View style={styles.radioContainer}>
                    <View style={styles.radio} />
                    <Text>Cooler </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>
                {"  "}Stay Duration{"  "}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>From Date </Text>
                <CalendarComponent />
              </View>
              <View style={styles.bookingDetailsContainer}>
                <Text>To Date </Text>
                <CalendarComponent />
              </View>
            </View>
          </View>
          <View style={styles.extraPadding} />
        </View>
      </ScrollView>
      <View style={styles.bookingFooterContainer}>
        <View>
          <Text style={styles.cardsSimpleText}>Total Pricing </Text>
          <Text style={styles.cardsHeadingText}>Rs. 14000/M </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.navigate("checkout");
          }}
          style={styles.bookingButton}
        >
          <Text style={styles.primaryButtonText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Booking;
