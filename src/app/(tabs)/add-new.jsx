import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/global";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { usePathname } from "expo-router";
import AmenitiesBottomSheet from "@components/AmenitiesBottomSheet";
import RoomTypeBottomSheet from "@components/RoomTypesBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CityDropDown from "@components/CityDropDown";

const AddNewHostel = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [bottomSheetKey, setBottomSheetKey] = useState(0);
  useEffect(() => {
    if (pathname === "/create") {
      amenitiesBottomSheetRef.current?.close?.();
      roomBottomSheetRef.current?.close?.();
      setBottomSheetKey((prev) => prev + 1);
    }
  }, [pathname]);

  const amenitiesBottomSheetRef = useRef(null);
  const openAmenitiesBottomSheet = () => {
    amenitiesBottomSheetRef.current?.snapToIndex(2);
  };
  const closeAmenitiesBottomSheet = () => {
    amenitiesBottomSheetRef.current?.close();
  };

  const roomBottomSheetRef = useRef(null);
  const openRoomBottomSheet = () => {
    roomBottomSheetRef.current?.snapToIndex(2);
  };
  const closeRoomBottomSheet = () => {
    roomBottomSheetRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.bottomPadding100}>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <FontAwesome name="angle-left" size={26} color="black" />
            </TouchableOpacity>
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.propertyDetailsHeaderText}>
                Add New Hostel{" "}
              </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.extraPadding} />
          <Text style={styles.addHostelHeadingText}>
            Enter the details of your hostel{" "}
          </Text>
          <TextInput style={styles.textInput} placeholder="Enter Hostel Name" />
          <CityDropDown />
          <TextInput style={styles.textInput} placeholder="Enter Area" />
          <TextInput style={styles.textInput} placeholder="Enter Address" />
          <TextInput style={styles.textInput} placeholder="Description" />

          <View style={styles.padding13} />

          <TouchableOpacity
            onPress={openAmenitiesBottomSheet}
            style={styles.selectFromButton}
          >
            <Text style={styles.selfAlign}>Select Amenities </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openRoomBottomSheet}
            style={styles.selectFromButton}
          >
            <Text style={styles.selfAlign}>Select Room Types </Text>
          </TouchableOpacity>

          <Text></Text>

          <Text style={styles.addHostelHeadingText}>Upload Images </Text>
          <View style={styles.mainImgUploader}>
            <Ionicons name="image-outline" size={45} color="black" />
            <Text>Upload here</Text>
          </View>
          <View style={styles.flexDirection}>
            <View style={styles.smallImgUploader}>
              <Ionicons name="image-outline" size={30} color="black" />
              <Text style={styles.smallFont}> Upload here </Text>
            </View>
            <View style={styles.smallImgUploader}>
              <Ionicons name="image-outline" size={30} color="black" />
              <Text style={styles.smallFont}> Upload here </Text>
            </View>
            <View style={styles.smallImgUploader}>
              <Ionicons name="image-outline" size={30} color="black" />
              <Text style={styles.smallFont}> Upload here </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              router.navigate("property-details");
            }}
            style={styles.primaryButton}
          >
            <Text style={styles.primaryButtonText}>Save </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <AmenitiesBottomSheet
        bottomSheetRef={amenitiesBottomSheetRef}
        closeBottomSheet={closeAmenitiesBottomSheet}
      />
      <RoomTypeBottomSheet
        key={bottomSheetKey}
        roomBottomSheetRef={roomBottomSheetRef}
        closeRoomBottomSheet={closeRoomBottomSheet}
      />
    </GestureHandlerRootView>
  );
};
export default AddNewHostel;
