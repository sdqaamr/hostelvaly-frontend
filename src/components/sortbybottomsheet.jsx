import React, { useMemo, useCallback } from "react";
import styles from "@styles/global";
import { View, Text } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";

const SortbyBottomSheet = ({ bottomSheetRef, closeBottomSheet }) => {
  const sortOptions = [
    { id: 1, name: "Price - Low to High " },
    { id: 2, name: "Price - High to Low " },
    { id: 3, name: "Rating - High to Low " },
    { id: 4, name: "Rating - Low to High " },
    { id: 5, name: "Distance - Near to Far " },
    { id: 6, name: "Distance - Far to Near " },
  ];
  const snapPoints = useMemo(() => ["25%", "58%", "60%"], []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={3}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      index={-1}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.scheduleContainer}>
        <View style={styles.cardsHeadingContainer}>
          <Text style={styles.cardsHeadingText}>Sort by:{"  "}</Text>
          <AntDesign
            onPress={closeBottomSheet}
            name="close"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.sortItemsContainer}>
          {sortOptions.map((option) => {
            return (
              <View key={option.id} style={styles.sortTextContainer}>
                <Text style={styles.sortText}>{option.name}</Text>
              </View>
            );
          })}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
export default SortbyBottomSheet;
