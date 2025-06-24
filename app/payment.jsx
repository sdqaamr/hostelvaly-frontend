import React from "react";
import styles from "../src/styles/global";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from '@expo/vector-icons/Foundation';

import { Image } from "expo-image";
import RecommendedHostels from "../src/components/recommendedhostels";
import TabIcons from "../src/components/tabicons";
import { useRouter } from "expo-router";

export default function Payment() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <FontAwesome name="angle-left" size={26} color="black" />
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.bookingHeaderText}>Payment </Text>
            </View>
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.cardsSimpleText}>Home </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={{ includeFontPadding: false }}
            />
            <Text style={styles.cardsSimpleText}>Property Details </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={{ includeFontPadding: false }}
            />
            <Text style={styles.cardsSimpleText}>Booking </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={{ includeFontPadding: false }}
            />
            <Text>Checkout </Text>
          </View>
          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.bookingImgAndDetailsContainer}>
              <Image
                source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
                style={styles.bookingImg}
                contentFit="cover"
              />
              <View style={styles.bookingImgDetailsContainer}>
                <Text style={styles.cardsHeadingText}>Aroma Hostel </Text>
                <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={20} color="gray" />
                  <Text style={styles.cardsSimpleText}> Islamabad </Text>
                </View>
                <View>
                  <View style={styles.locationContainer}>
                    <EvilIcons name="calendar" size={22} color="gray" />
                    <Text style={styles.cardsSimpleText}>
                      5-8-25 to 5-10-25{" "}
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <Feather name="home" size={20} color="gray" />
                    <Text style={styles.cardsSimpleText}> AC Room Type </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <Ionicons name="bed-outline" size={21} color="gray" />
                    <Text style={styles.cardsSimpleText}>1 Room Sharing </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.servicesContainer}></View>
            <View style={styles.paymentButton}>
              <View style={styles.paymentButtonTextContainer}>
                <View style={{ flexDirection: "row" }}>
                    <Text>
                  Total Amount{" "}
                  </Text>
                  <TouchableOpacity>
                    <Entypo
                    name="chevron-small-down"
                    size={22}
                    color="black"
                    style={{ includeFontPadding: false }}
                  />
                  </TouchableOpacity>
                </View>
                <Text>Rs. 22000</Text>
              </View>
            </View>
            <View style={styles.checkoutContainer}>
                <Text style={styles.cardsHeadingText}>Payment Methods </Text>
              </View>
            <View style={styles.bookingDetailsContainer}>
               <View style={styles.paymentMethodsContainer}>
                <Text style={styles.cardsHeadingText}>JazzCash</Text>
                <TouchableOpacity>
                    <Entypo
                    name="chevron-small-right"
                    size={28}
                    color="black"
                    style={{ includeFontPadding: false }}
                  />
                  </TouchableOpacity>
               </View>
            </View>
            <View style={styles.bookingDetailsContainer}>
               <View style={styles.paymentMethodsContainer}>
                <Text style={styles.cardsHeadingText}>Bank Transfer </Text>
                <TouchableOpacity>
                    <Entypo
                    name="chevron-small-right"
                    size={28}
                    color="black"
                    style={{ includeFontPadding: false }}
                  />
                  </TouchableOpacity>
               </View>
            </View>
          </View>
        </View>
        {/* Container */}
      </ScrollView>
    </SafeAreaView>
  );
}
