import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ReviewsCard from "@components/ReviewsCard";

const Reviews = () => {
  return (
    <>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>User Reviews{"  "}</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.reviewskCardsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ReviewsCard />
          <ReviewsCard />
        </ScrollView>
      </View>
    </>
  );
};
export default Reviews;