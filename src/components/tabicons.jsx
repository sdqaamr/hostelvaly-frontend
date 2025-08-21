import React from "react";
import styles from "@styles/global";
import { View, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabIcons = () => {
  return (
    <View style={styles.tabIconsContainer}>
      <TouchableOpacity>
        <Entypo name="home" style={styles.tabIcons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="building" style={styles.tabIcons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="heart-plus-outline"
          style={styles.tabIcons}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="message1" style={styles.tabIcons} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6 name="user" style={styles.tabIcons} />
      </TouchableOpacity>
    </View>
  );
};
export default TabIcons;
