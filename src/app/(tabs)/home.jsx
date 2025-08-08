import React, { useRef, useEffect, useState } from "react";
import styles from "@styles/global";
import { View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "@components/HomeHeader";
import RecommendedHostels from "@components/RecommendedHostels";
import ViewedHostels from "@components/ViewedHostels";
import ScheduleBottomSheet from "@components/ScheduleBottomSheet";
import SortbyBottomSheet from "@components/SortbyBottomSheet";
import GenderBottomSheet from "@components/GenderBottomSheet";
import { usePathname } from "expo-router";

const Home = () => {
  const pathname = usePathname();
  const [bottomSheetKey, setBottomSheetKey] = useState(0);
  useEffect(() => {
    if (pathname === "/home") {
      bottomSheetRef.current?.close?.();
      sortBottomSheetRef.current?.close?.();
      genderBottomSheetRef.current?.close?.();
      setBottomSheetKey((prev) => prev + 1);
    }
  }, [pathname]);
  const bottomSheetRef = useRef(null);
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex(3);
  };
  const closeBottomSheet = () => {
    bottomSheetRef.current?.close();
  };

  const sortBottomSheetRef = useRef(null);
  const openSortBottomSheet = () => {
    sortBottomSheetRef.current?.snapToIndex(2);
  };
  const closeSortBottomSheet = () => {
    sortBottomSheetRef.current?.close();
  };

  const genderBottomSheetRef = useRef(null);
  const openGenderBottomSheet = () => {
    genderBottomSheetRef.current?.snapToIndex(2);
  };
  const closeGenderBottomSheet = () => {
    genderBottomSheetRef.current?.close();
  };

  return (
    <SafeAreaView style={styles.safeArea2} edges={["left", "right", "top"]}>
      <GestureHandlerRootView style={styles.container}>
        <ScrollView>
          <View style={styles.container}>
            <HomeHeader
              openGenderBottomSheet={openGenderBottomSheet}
              openSortBottomSheet={openSortBottomSheet}
            />
            <RecommendedHostels openBottomSheet={openBottomSheet} />
            <ViewedHostels />
            <View style={{ padding: 10 }} />
          </View>
        </ScrollView>
        <ScheduleBottomSheet
          key={`schedule-${bottomSheetKey}`}
          bottomSheetRef={bottomSheetRef}
          closeBottomSheet={closeBottomSheet}
        />
        <GenderBottomSheet
          key={`gender-${bottomSheetKey}`}
          bottomSheetRef={genderBottomSheetRef}
          closeBottomSheet={closeGenderBottomSheet}
        />
        <SortbyBottomSheet
          key={`sort-${bottomSheetKey}`}
          bottomSheetRef={sortBottomSheetRef}
          closeBottomSheet={closeSortBottomSheet}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};
export default Home;