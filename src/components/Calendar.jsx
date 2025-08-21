import React, { useState } from "react";
import { View, TextInput, Modal, TouchableOpacity, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { colors } from "@constants/global"; // customize colors as needed
import styles from "@styles/global";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(""); // format: 'YYYY-MM-DD'
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString); // example: '2025-08-03'
    setIsCalendarVisible(false);
  };

  return (
    <View>
      {/* Textbox to display selected date */}
      <TouchableOpacity onPress={() => setIsCalendarVisible(true)}>
        <TextInput
          style={styles.bookingDetailsTextInput}
          value={selectedDate}
          placeholder="Select Date"
          editable={false} // prevent manual editing
          pointerEvents="none" // allows TouchableOpacity to handle press
        />
      </TouchableOpacity>

      {/* Modal Calendar */}
      <Modal
        visible={isCalendarVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsCalendarVisible(false)}
      >
        <View style={styles.calendarContainer}>
          <View style={styles.calendar}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: colors.primary,
                },
              }}
              theme={{
                textSectionTitleColor: colors.primary,
                selectedDayBackgroundColor: colors.primary,
                todayTextColor: colors.primary,
                dayTextColor: colors.lightText,
                arrowColor: colors.primary,
                monthTextColor: colors.primary,
                textDayFontWeight: "bold",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "bold",
              }}
            />
            <TouchableOpacity onPress={() => setIsCalendarVisible(false)}>
              <Text style={styles.calendarCloseText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CalendarComponent;
