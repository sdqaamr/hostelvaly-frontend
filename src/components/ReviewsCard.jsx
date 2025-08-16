import React from "react";
import styles from "@styles/global";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@constants/global";
import { Image } from "expo-image";

const ReviewsCard = () => {
  return (
    <View style={styles.reviewsCard}>
      <View style={styles.reviewsCardContentContainer}>
        <Image
          source="https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/girl-1024.png"
          contentFit="cover"
          style={styles.reviewsUserImg}
        />
        <View style={styles.reviewsContentContainer}>
          <Text style={styles.cardsHeadingText}>Person's Name </Text>
          <View style={styles.reviewsRatingContainer}>
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="staro" size={16} color="gray" />
          </View>
          <Text styl={styles.reviewsCommentText}>
            lorem, ipsum jon dolor sit amet dolo elit. Commodi...
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ReviewsCard;