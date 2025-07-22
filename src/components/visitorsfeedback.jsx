import React from "react";
import styles from "@/styles/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FeedbackCard from "./feedbackcard";

export default function VisitorsFeedback() {
  return (
    <View>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Visitor's Feedback{"  "}</Text>
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.feedbackCardsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FeedbackCard />
          <FeedbackCard />
        </ScrollView>
      </View>
    </View>
  );
}
