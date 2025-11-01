import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Image } from "expo-image";
import { colors } from "@constants/global";

const ListReview = () => {
  return (
    <>
      <TouchableOpacity style={styles.listCard}>
        <View style={styles.listImgContainer}>
          <Image
            source="https://live.staticflickr.com/2412/2157511492_27d9598ffb_b.jpg"
            style={styles.listImage}
            contentFit="cover"
          />
        </View>
        <View>
          <Text style={styles.cardsHeadingText}>Al-Fateh Girls Hostel </Text>
          <View>
            <View style={styles.flexDirection}>
              <View style={styles.reviewsRatingContainer}>
                <FontAwesome name="star" size={17} color={colors.ratingStar} />
                <FontAwesome name="star" size={17} color={colors.ratingStar} />
                <FontAwesome name="star" size={17} color={colors.ratingStar} />
                <FontAwesome name="star" size={17} color={colors.ratingStar} />
                <FontAwesome name="star-o" size={17} color="gray" />
              </View>
            </View>

            <Text style={{ width: 250 }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias
              rerum perferendis...{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default ListReview;
