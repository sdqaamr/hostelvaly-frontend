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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Booking() {
  const router = useRouter();
  let [sharing, setSharing] = useState(1);
  function increment() {
    setSharing(sharing + 1);
  }
  function decrement() {
    if (sharing > 1) {
      setSharing(sharing - 1);
    }
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <FontAwesome name="angle-left" size={26} color="black" />
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.bookingHeaderText}>Booking </Text>
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
            <Text style={styles.cardsSimpleText}>Property Details </Text>
            <Entypo
              name="chevron-small-right"
              size={22}
              color="gray"
              style={{ includeFontPadding: false }}
            />
            <Text>Booking </Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.bookingImgAndDetailsContainer}>
              <Image
                source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
                style={styles.bookingImg}
                contentFit="cover"
              />
              <View style={styles.bookingImgDetailsContainer}>
                <View>
                  <Text style={styles.cardsHeadingText}>Aroma Hostel </Text>
                  <View style={styles.locationContainer}>
                    <Ionicons name="location-outline" size={20} color="gray" />
                    <Text style={styles.cardsSimpleText}>Islamabad </Text>
                  </View>
                </View>
                <View style={styles.propertyRatingContainer}>
                  <Text style={styles.cardsHeadingText}>
                    <AntDesign name="star" size={16} color="#FCD003" /> 8.5
                    rating{" "}
                  </Text>
                  <Text style={styles.cardsSimpleText}> (1234 reviews)</Text>
                </View>
              </View>
            </View>

            <View style={styles.servicesContainer}>
              <Text style={styles.cardsHeadingText}>
                {"  "}User Details{"  "}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>Name</Text>
                <TextInput
                  style={styles.bookingDetailsTextInput}
                  placeholder="Enter your name"
                ></TextInput>
              </View>
              <View style={styles.bookingDetailsContainer}>
                <Text>ID Proof</Text>
                <TextInput
                  style={styles.bookingDetailsTextInput}
                  placeholder="ID Proof"
                ></TextInput>
              </View>
            </View>
            <Text style={styles.cardsHeadingText}>{"  "}Room Details</Text>
            <View style={styles.bookingDetailsContainer}>
                <View style={styles.bookingDetailsContainerDouble}>
              <View>
                <Text>Room Type</Text>
                <View style={styles.radioContainer}>
                  <View style={styles.radio} />
                  <Text>AC</Text>
                  <View style={styles.radio} />
                  <Text>Non AC </Text>
                </View>
              </View>
              <View style={styles.intermediateLine2} />
              <View style={styles.bookingDetailsContainer2}>
                <Text>Room Sharing </Text>
                <View style={styles.sharingContainer}>
                  <TouchableOpacity style={styles.operatorsContainer} onPress={increment}>
                    <Text style={styles.operators}>+</Text>
                  </TouchableOpacity>
                  <Text style={{ marginVertical: 8 }}>{sharing}</Text>
                  <TouchableOpacity style={styles.operatorsContainer} onPress={decrement}>
                    <Text style={styles.operators}>-</Text>
                  </TouchableOpacity>
                </View>
              </View>
               </View>
            </View>
            <Text>{" "}</Text>
            <Text style={styles.cardsHeadingText}>
                {"  "}Stay Duration{"  "}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>Date</Text>
                <TextInput
                  style={styles.bookingDetailsTextInput}
                  placeholder="dd-mm-yyyy to dd-mm-yyyy"
                ></TextInput>
              </View>
          </View>
          <View style={styles.extraPadding} />
        </View>
      </ScrollView>
      <View style={styles.bookingFooterContainer}>
        <View>
            <Text style={styles.cardsSimpleText}>Total Pricing </Text>
            <Text style={styles.cardsHeadingText}>Rs. 18000/M </Text>
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
}
