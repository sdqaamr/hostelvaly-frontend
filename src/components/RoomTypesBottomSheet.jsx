import React, { useMemo, useCallback, useState, useEffect } from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetTextInput,
  BottomSheetScrollView
} from "@gorhom/bottom-sheet";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@constants/global";

const RoomTypeBottomSheet = ({ roomBottomSheetRef, closeRoomBottomSheet }) => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const gender = [
    { name: "Air Conditioner", id: 1 },
    { name: "Cooler", id: 2 },
    { name: "Fan", id: 3 },
  ];
  const snapPoints = useMemo(() => ["30%", "60%", "90%"], []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
      appearsOnIndex={0}      // show backdrop at first open index
      disappearsOnIndex={-1}  // hide when sheet is closed
      pressBehavior="close"    // optional: tap backdrop to close
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
      ref={roomBottomSheetRef}
      index={-1}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
        <BottomSheetScrollView>
      <BottomSheetView style={styles.scheduleContainer}>
        <View style={styles.cardsHeadingContainer}>
          <Text style={styles.addHostelHeadingText}>
            Select Room Types Available{"  "}
          </Text>
          <AntDesign
            onPress={closeRoomBottomSheet}
            name="close"
            size={24}
            color="white"
          />
        </View>
        <View>
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
              </View>
            );
          })}
        </View>

        <View style={styles.padding13} />
        <Text style={styles.addHostelHeadingText}>Cooler Room Types </Text>
        <TextInput style={styles.textInput} placeholder="Number of Vacancies" />
        <TextInput style={styles.textInput} placeholder="Description" />
        <TextInput style={styles.textInput} placeholder="Rent PKR/month" />

        <View style={styles.padding13} />
        <Text style={styles.addHostelHeadingText}>Fan Room Types </Text>
        <TextInput style={styles.textInput} placeholder="Number of Vacancies" />
        <TextInput style={styles.textInput} placeholder="Description" />
        <TextInput style={styles.textInput} placeholder="Rent PKR/month" />
      </BottomSheetView>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};
export default RoomTypeBottomSheet;
