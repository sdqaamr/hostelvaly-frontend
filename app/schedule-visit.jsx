import React, { useState} from "react";
import styles from "../src/styles/global";
import { colors } from "../src/styles/global";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeHeader from "../src/components/homeheader";
import { useRouter } from "expo-router";
import SvgComponent from "../assets/SVG/WhatsApp";

export default function ScheduleVisit() {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea2}>
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader />
          <View style={styles.scheduleContainer}>
            <View style={styles.cardsHeadingContainer}>
              <Text style={styles.cardsHeadingText}>Schedule Visit{"  "}</Text>
              <TouchableOpacity>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.scheduleInnerContainer}>
              <TextInput
                style={styles.scheduleTextInput}
                placeholder="Enter your name"
              />
              <TextInput
                style={styles.scheduleTextInput}
                placeholder="Enter phone number"
              />
              <TextInput
                style={styles.scheduleTextInput}
                placeholder="DD/MM/YYYY"
              />
              <Text> </Text>
              <Text style={styles.servicesText}>
                {"\n"}We are accepting bookings for stay duration of minimum 3
                months
              </Text>
            </View>
            <View style={styles.scheduleFooter}>
              <View style={styles.scheduleFooterUpContainer}>
                <View style={styles.whatsAppContainer}>
                  <SvgComponent />
                  <Text style={styles.whatsAppText}>
                    Get updates over WhatsApp
                  </Text>
                </View>
                <Switch
                  value={isEnabled}
                  onValueChange={() => setIsEnabled((prev) => !prev)}
                  trackColor={{ false: colors.secondary, true: colors.primary }}
                  thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                  ios_backgroundColor={colors.secondary}
                  style={styles.switch}
                />
              </View>
              <TouchableOpacity style={styles.scheduleButton}>
                <Text style={styles.primaryButtonText}>Schedule </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <RecommendedHostels /> */}
        </View>
      </ScrollView>
      {/* <TabIcons /> */}
    </SafeAreaView>
  );
}