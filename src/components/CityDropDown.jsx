import React, { useState } from "react";
import styles from "@styles/global";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const cities = [
  { label: "Abbottabad", value: "abbottabad" },
  { label: "Faisalabad", value: "Faisalabad" },
  { label: "Gujranwala", value: "gujranwala" },
  { label: "Islamabad", value: "islamabad" },
  { label: "Karachi", value: "karachi" },
  { label: "Lahore", value: "lahore" },
  { label: "Multan", value: "multan" },
  { label: "Peshawar", value: "peshawar" },
  { label: "Quetta", value: "quetta" },
  { label: "Rawalpindi", value: "rawalpindi" },
  { label: "Sialkot", value: "sialkot" },
  { label: "Swat", value: "swat" },
];

const CityDropDown = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <View style={styles.citySelector}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedCity(value)}
        items={cities}
        placeholder={{ label: "Select a city ", value: null }}
        placeholderTextColor="black"
        style={styles.dropDown}
        value={selectedCity}
      />
    </View>
  );
};

export default CityDropDown;
