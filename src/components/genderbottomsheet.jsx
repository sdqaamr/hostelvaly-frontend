import React, { useMemo, useCallback, useState } from "react";
import styles from "@styles/global";
import { View, Text } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";

const GenderBottomSheet = ({ bottomSheetRef, closeBottomSheet }) => {
  const gender = [
    { name: "Male", id: 1 },
    { name: "Female", id: 2 },
    { name: "All", id: 3 },
  ];
  const snapPoints = useMemo(() => ["25%", "35%", "40%"], []);
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
  const [isEnabled, setIsEnabled] = useState(false);
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
          <Text style={styles.cardsHeadingText}>Gender:{"  "}</Text>
          <AntDesign
            onPress={closeBottomSheet}
            name="close"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.sortItemsContainer}>
          {gender.map((option) => {
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
export default GenderBottomSheet;

// {
//   sortOptions.map((option) => (
//     <View key={option.id}>
//       <Text>{option.name}</Text>
//     </View>
//   ));
// }
