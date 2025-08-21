import React from "react";
import styles from "@styles/global";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RecommendedHostels from "@components/RecommendedHostels";
import ListReview from "@components/ListReview";

const Reviews = () => {
  const router = useRouter();
  return (
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
            <Text style={styles.propertyDetailsHeaderText}>My Reviews </Text>
          </View>
          <View style={styles.propertyDetailsEmptySpace} />
        </View>
        <View style={styles.hostelsListContainer}>
          <ListReview />
          <ListReview />
          <ListReview />
          <ListReview />
          <ListReview />
        </View>
        <RecommendedHostels />
        <View style={styles.extraPadding} />
      </View>
    </ScrollView>
  );
};
export default Reviews;
