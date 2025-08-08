import React, { useMemo, useCallback, useState } from "react";
import styles from "@styles/global";
import { colors } from "@constants/global";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import SvgComponent from "@assets/images/SVG/WhatsApp";
import AntDesign from "@expo/vector-icons/AntDesign";
import CalendarComponent from "./Calendar";

const ScheduleBottomSheet = ({ bottomSheetRef, closeBottomSheet }) => {
  const snapPoints = useMemo(() => ["25%", "60%", "70%"], []);
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
      keyboardBehavior="interactive"
      keyboardBlurBehavior="restore"
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.scheduleContainer}>
        <View>
          <View style={styles.cardsHeadingContainer}>
            <Text style={styles.cardsHeadingText}>Schedule Visit{"  "}</Text>
            <AntDesign
              onPress={closeBottomSheet}
              name="close"
              size={24}
              color="white"
            />
          </View>
          <View style={styles.scheduleInnerContainer}>
            <BottomSheetTextInput
              style={styles.bookingDetailsTextInput}
              placeholder="Full Name"
            />
            <BottomSheetTextInput
              style={styles.bookingDetailsTextInput}
              placeholder="Phone Number"
            />
            <CalendarComponent style={styles.scheduleTextInput} />
            <BottomSheetTextInput
              style={styles.bookingDetailsTextInput}
              placeholder="Write a Note (optional)"
            />
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
                thumbColor={isEnabled ? colors.switchEnabled : colors.switchDisabled}
                ios_backgroundColor={colors.secondary}
                style={styles.switch}
              />
            </View>
            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.primaryButtonText}>Schedule </Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};
export default ScheduleBottomSheet;