import React, { useState } from "react";
import styles from "@styles/global";
import { View, ScrollView, Text, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "@components/HomeHeader";
import RecommendedHostels from "@components/RecommendedHostels";
import LiveViewedHostels from "@components/LiveViewedHostels";
import AntDesign from "@expo/vector-icons/AntDesign";
import Reviews from "@components/Reviews";
import CurrentStay from "@components/CurrentStay";
import { colors } from "@constants/global";
import { TouchableOpacity } from "react-native";

const HomePage2 = () => {
  const insets = useSafeAreaInsets();
  const [rating, setRating] = useState(0);
  function star() {}
  return (
    <ScrollView
      style={styles.paddingBottom300}
      contentContainerStyle={styles.flexStart}
    >
      <View style={styles.home2Container}>
        <HomeHeader />
        <CurrentStay />
        <View style={styles.detailContainer}>
          <Text style={styles.cardsHeadingText}>
            {"  "}Rate Us {"  "}
          </Text>
          <View style={styles.reviewInputContainer}>
            <View style={styles.reviewsRatingContainer}>
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity key={star}>
                  <AntDesign
                    key={star}
                    name={star <= rating ? "star" : "staro"} // Filled or empty
                    size={24}
                    color={star <= rating ? colors.ratingStar : "gray"}
                    style={styles.horizontalMargin2}
                    onPress={() => setRating(star)} // Change rating on press
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              placeholder="Write a Review"
              style={styles.ratingTextInput}
            />
          </View>
        </View>

        <RecommendedHostels />
        <LiveViewedHostels />
        <Reviews />
      </View>
    </ScrollView>
  );
};

export default HomePage2;
