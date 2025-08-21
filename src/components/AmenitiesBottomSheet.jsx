import React, { useMemo, useCallback, useState, useEffect } from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@constants/global";

const AmenitiesBottomSheet = ({
  bottomSheetRef,
  closeBottomSheet,
  onSelectAmenities,
}) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const gender = [
    { name: "Wi-Fi", id: 1 },
    { name: "Laundry", id: 2 },
    { name: "Mess", id: 3 },
    { name: "Common Lounge", id: 4 },
    { name: "Fire Extinguishers", id: 5 },
    { name: "CCTV", id: 6 },
    { name: "Parking", id: 7 },
    { name: "Geyser", id: 8 },
    { name: "Gym", id: 9 },
    { name: "Filtered Water", id: 10 },
    { name: "Reception", id: 11 },
    { name: "Guest Rooms", id: 12 },
  ];
  useEffect(() => {
    onSelectAmenities?.(selectedAmenities);
  }, [selectedAmenities]);
  const snapPoints = useMemo(() => ["30%", "80%", "85%"], []);
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
  const toggleAmenity = (id) => {
    setSelectedAmenities(
      (prev) =>
        prev.includes(id)
          ? prev.filter((a) => a !== id) // remove if already selected
          : [...prev, id] // add if not selected
    );
  };
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
          <Text style={styles.cardsHeadingText}>Select Amenities{"  "}</Text>
          <AntDesign
            onPress={closeBottomSheet}
            name="close"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.sortItemsContainer}>
          {gender.map((option) => {
            const isSelected = selectedAmenities.includes(option.id);
            return (
              <View key={option.id} style={styles.amenitiesTextContainer}>
                <TouchableOpacity
                  key={option.id}
                  style={styles.amenitiesTextContainer}
                  onPress={() => toggleAmenity(option.id)}
                >
                  <MaterialCommunityIcons
                    name={
                      isSelected ? "checkbox-marked" : "checkbox-blank-outline"
                    }
                    size={24}
                    color={isSelected ? colors.primary : "black"}
                  />
                  <Text style={styles.sortText}>{option.name}</Text>
                </TouchableOpacity>
                <Text style={styles.sortText}>{option.name}</Text>
              </View>
            );
          })}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
export default AmenitiesBottomSheet;
