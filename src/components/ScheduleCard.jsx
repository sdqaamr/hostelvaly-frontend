import React from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";

const HostelListCard = () => {
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
            <View style={styles.locationContainer}>
              <Ionicons name="location-outline" size={20} color="gray" />
              <Text style={styles.cardsSimpleText}>
                {" "}
                Near Central Park, Faisalabad{" "}
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <AntDesign name="calendar" size={20} color="gray" />
              <Text style={styles.cardsSimpleText}>
                {" "}
                25-8-2025 to 25-10-2025{" "}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default HostelListCard;
