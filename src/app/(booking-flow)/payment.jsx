import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Payment = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
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
              <Text style={styles.propertyDetailsHeaderText}>
                Payment{" "}
              </Text>
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
            <Text style={styles.smallGrayFont}>Booking </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={styles.fontPadding}
            />
            <Text style={styles.smallGrayFont}>Checkout </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Payment </Text>
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
                
                <View>
                  <View style={styles.locationContainer}>
                  <Ionicons name="location-outline" size={20} color="gray" />
                  <Text style={styles.cardsSimpleText}> Islamabad </Text>
                </View>
                  <View style={styles.locationContainer}>
                    <EvilIcons name="calendar" size={22} color="gray" />
                    <Text style={styles.cardsSimpleText}>
                      5-8-25 to 5-10-25{" "}
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <Feather name="home" size={20} color="gray" />
                    <Text style={styles.cardsSimpleText}> Cooler Room Type </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.servicesContainer}></View>
            <View style={styles.paymentButton}>
              <View style={styles.paymentButtonTextContainer}>
                <View style={styles.flexDirection}>
                  <Text>Total Amount </Text>
                  <TouchableOpacity>
                    <Entypo
                      name="chevron-small-down"
                      size={22}
                      color="black"
                      style={styles.fontPadding}
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
                    style={styles.fontPadding}
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
                    style={styles.fontPadding}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutFooterContainer}>
        <TouchableOpacity
          onPress={() => {
            router.navigate("home-page2");
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Payment;
