import React from "react";
import styles from "../../styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import RecommendedHostels from "@components/RecommendedHostels";
import Reviews from "@components/Reviews";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";

const PropertyDetails = () => {
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
              <Text style={styles.propertyDetailsHeaderText}>
                Property Details{" "}
              </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.smallGrayFont}>Home </Text>
            <Entypo
              name="chevron-small-right"
              size={20}
              color="gray"
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Details </Text>
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
                Al-Fateh Girls Hostel{" "}
              </Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={20} color="gray" />
                <Text style={styles.cardsSimpleText}>
                  {" "}
                  Near Central Park, Faisalabad{" "}
                </Text>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Description </Text>
              <Text style={styles.contentDescriptionContainer}>
                This hostel offers a secure and comfortable living environment
                for female students. Its convenient location provides{" "}
                <Text style={styles.readMoreText}>Read more... </Text>
              </Text>
            </View>

            <View style={styles.nameAndLocContainer}>
              <Text style={styles.previewContainer}>Preview </Text>
            </View>
            <View style={styles.propertyImgContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Image
                  source="https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220"
                  style={styles.propertyImg}
                  contentFit="cover"
                />
                <Image
                  source="https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=auto/https://assets.about.me/background/users/g/i/r/girlshostel_1675415923_596.jpg"
                  style={styles.propertyImg}
                  contentFit="cover"
                />
                <Image
                  source="https://3.bp.blogspot.com/-kYgwcka_6vo/T9nof81gAeI/AAAAAAAAAFs/QeRcpeBttvg/s1600/Room+2+bed+6.JPG"
                  style={styles.propertyImg}
                  contentFit="cover"
                />
              </ScrollView>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Available Room Types </Text>
              <View style={styles.roomTypesContainer}>
                <View style={styles.bookingDetailsContainer}>
                  <View style={styles.roomTypesHeading}>
                    <View style={styles.roomTypeButtonContainer}>
                      <Text>AC Rooms </Text>
                    </View>
                    <Text>
                      PKR 20000<Text style={styles.grayText}>/mo* </Text>
                    </Text>
                  </View>
                  <Text style={styles.roomTypeDescription}>
                    Stay cool and comfortable with efficient air conditioning
                    for a relaxing environment.{" "}
                  </Text>
                  <Text style={styles.availabilityText}>
                    8 rooms are available to book{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.roomTypesContainer}>
                <View style={styles.bookingDetailsContainer}>
                  <View style={styles.roomTypesHeading}>
                    <View style={styles.roomTypeButtonContainer}>
                      <Text>Cooler Rooms </Text>
                    </View>
                    <Text>
                      PKR 14000<Text style={styles.grayText}>/mo* </Text>
                    </Text>
                  </View>
                  <Text style={styles.roomTypeDescription}>
                    Enjoy a refreshing breeze with an energy-saving cooler,
                    perfect for warm weather.{" "}
                  </Text>
                  <Text style={styles.availabilityText}>
                    14 rooms are available to book{" "}
                  </Text>
                </View>
              </View>
              <View style={styles.roomTypesContainer}>
                <View style={styles.bookingDetailsContainer}>
                  <View style={styles.roomTypesHeading}>
                    <View style={styles.roomTypeButtonContainer}>
                      <Text>Fan Rooms </Text>
                    </View>
                    <Text>
                      PKR 8000<Text style={styles.grayText}>/mo* </Text>
                    </Text>
                  </View>
                  <Text style={styles.roomTypeDescription}>
                    A budget-friendly option with a ceiling fan to keep the air
                    flowing and your stay pleasant.{" "}
                  </Text>
                  <Text style={styles.availabilityText}>
                    5 rooms are available to book{" "}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>Contact </Text>
              <Text style={styles.contactText}>
                For queries, please call us at{" "}
                <Text style={styles.phoneNum}>+92 300 1234567</Text>. We are
                available to assist you with any questions.
              </Text>
            </View>
            <Reviews />
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
            alert("Schedule visit feature is coming soon!");
            // router.navigate("/");
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
};
export default PropertyDetails;
