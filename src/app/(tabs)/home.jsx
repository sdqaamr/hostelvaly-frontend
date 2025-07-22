import React, { useRef } from "react";
import styles from "@styles/global";
import { View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@components/homeheader";
import RecommendedHostels from "@components/recommendedhostels";
import ViewedHostels from "@components/viewedhostels";
import ScheduleBottomSheet from "@components/schedulebottomsheet";
import SortbyBottomSheet from "@components/sortbybottomsheet";
import GenderBottomSheet from "@components/genderbottomsheet";

const Home = () => {
  const bottomSheetRef = useRef(null);
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(3);
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(-1);
  };

  const sortBottomSheetRef = useRef(null);
  const openSortBottomSheet = () => {
    sortBottomSheetRef.current?.snapToIndex(2);
  };
  const closeSortBottomSheet = () => {
    sortBottomSheetRef.current?.snapToIndex(-1);
  };

  const genderBottomSheetRef = useRef(null);
  const openGenderBottomSheet = () => {
    genderBottomSheetRef.current?.snapToIndex(2);
  };
  const closeGenderBottomSheet = () => {
    genderBottomSheetRef.current?.snapToIndex(-1);
  };

  return (
    <SafeAreaView style={styles.safeArea2}>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <HomeHeader
              openGenderBottomSheet={openGenderBottomSheet}
              openSortBottomSheet={openSortBottomSheet}
            />
            <RecommendedHostels openBottomSheet={openBottomSheet} />
            <ViewedHostels />
          </View>
        </ScrollView>
        <ScheduleBottomSheet
          bottomSheetRef={bottomSheetRef}
          closeBottomSheet={closeBottomSheet}
        />
        <GenderBottomSheet
          bottomSheetRef={genderBottomSheetRef}
          closeBottomSheet={closeGenderBottomSheet}
        />
        <SortbyBottomSheet
          bottomSheetRef={sortBottomSheetRef}
          closeBottomSheet={closeSortBottomSheet}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default Home;
