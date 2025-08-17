import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/global";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import SvgComponent from "@assets/images/SVG/Google";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";
import { usePathname } from "expo-router";
import GenderBottomSheet from "@components/GenderBottomSheet";
import RoomTypeBottomSheet from "@components/RoomTypesBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Create = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [bottomSheetKey, setBottomSheetKey] = useState(0);
  useEffect(() => {
    if (pathname === "/create") {
      genderBottomSheetRef.current?.close?.();
      roomBottomSheetRef.current?.close?.();
      setBottomSheetKey((prev) => prev + 1);
    }
  }, [pathname]);

  const genderBottomSheetRef = useRef(null);
  const openGenderBottomSheet = () => {
    genderBottomSheetRef.current?.snapToIndex(2);
  };
  const closeGenderBottomSheet = () => {
    genderBottomSheetRef.current?.close();
  };

  const roomBottomSheetRef = useRef(null);
  const openRoomBottomSheet = () => {
  roomBottomSheetRef.current?.snapToIndex(2);
};
  const closeRoomBottomSheet = () => {
    roomBottomSheetRef.current?.close();
  };

  return (
    
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
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
            <TextInput
              style={styles.textInput}
              placeholder="Enter Hostel Name"
            />
            <TextInput style={styles.textInput} placeholder="Enter City" />
            <TextInput style={styles.textInput} placeholder="Enter Area" />
            <TextInput style={styles.textInput} placeholder="Enter Address" />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Mobile Number"
            />

            <View style={styles.padding13} />

            <TouchableOpacity
              onPress={openGenderBottomSheet}
              style={styles.selectFromButton}
            >
              <Text style={{ alignSelf: "center" }}>Select Amenities </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={openRoomBottomSheet}
              style={styles.selectFromButton}
            >
              <Text style={{ alignSelf: "center" }}>Select Room Types </Text>
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
                router.navigate("otp");
              }}
              style={styles.primaryButton}
            >
              <Text style={styles.primaryButtonText}>Add Hostel </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <GenderBottomSheet
  bottomSheetRef={genderBottomSheetRef}
  closeBottomSheet={closeGenderBottomSheet}
/>
      <RoomTypeBottomSheet
  key={bottomSheetKey}
  roomBottomSheetRef={roomBottomSheetRef}
  closeRoomBottomSheet={closeRoomBottomSheet}
/>
        </SafeAreaView>
      </GestureHandlerRootView>
  );
};
export default Create;
