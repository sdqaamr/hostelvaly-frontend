import React from "react";
import styles from "@styles/global";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@constants/global";
import { Image } from "expo-image";

const FeedbackCard = () => {
  return (
    <View style={styles.feedbackCard}>
      <View style={styles.feedbackCardContentContainer}>
        <Image
          source="https://cdn2.iconfinder.com/data/icons/rcons-users-color/32/girl-1024.png"
          contentFit="cover"
          style={styles.feedbackUserImg}
        />
        <View style={styles.feedbackContentContainer}>
          <Text style={styles.cardsHeadingText}>Visitor name </Text>
          <View style={styles.feedbackRatingContainer}>
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="star" size={16} color={colors.ratingStar} />
            <AntDesign name="staro" size={16} color="gray" />
            <Text style={styles.feedbackRatingText}>4/5 rating </Text>
          </View>
          <Text styl={styles.feedbackCommentText}>
            lorem, ipsum jon dolor sit amet dolo elit. Commodi...
          </Text>
        </View>
      </View>
    </View>
  );
};
export default FeedbackCard;