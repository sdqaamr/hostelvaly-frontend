import React, { useRef, useEffect, useState } from "react";
import styles from "@styles/global";
import { View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeHeader from "@components/HomeHeader";
import RecommendedHostels from "@components/RecommendedHostels";
import ViewedHostels from "@components/ViewedHostels";
import ScheduleBottomSheet from "@components/ScheduleBottomSheet";
import SortbyBottomSheet from "@components/SortbyBottomSheet";
import { usePathname } from "expo-router";

const Home = () => {
  const pathname = usePathname();
  const [bottomSheetKey, setBottomSheetKey] = useState(0);
  useEffect(() => {
    if (pathname === "/home") {
      bottomSheetRef.current?.close?.();
      sortBottomSheetRef.current?.close?.();
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

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader openSortBottomSheet={openSortBottomSheet} />
          <RecommendedHostels openBottomSheet={openBottomSheet} />
          <ViewedHostels />
          <View style={styles.extraPadding} />
        </View>
      </ScrollView>
      <ScheduleBottomSheet
        key={`schedule-${bottomSheetKey}`}
        bottomSheetRef={bottomSheetRef}
        closeBottomSheet={closeBottomSheet}
      />
      <SortbyBottomSheet
        key={`sort-${bottomSheetKey}`}
        bottomSheetRef={sortBottomSheetRef}
        closeBottomSheet={closeSortBottomSheet}
      />
    </GestureHandlerRootView>
  );
};
export default Home;
