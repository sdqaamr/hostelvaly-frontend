import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "@styles/global";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { colors } from "@constants/global";

// Very small, easy Role card used only on this screen for clarity
const RoleCard = ({ label, icon, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={1}
      style={[
        styles.roleWidget,
        {
          backgroundColor: isPressed ? colors.secondary : "white",
          borderWidth: isPressed ? 0 : 1,
        },
      ]}
    >
      <AntDesign
        name={icon}
        size={40}
        color={isPressed ? "white" : colors.primary}
      />
      <Text
        style={[
          styles.widgetLabelText,
          { color: isPressed ? "white" : colors.primary },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const Onboard = () => {
  const router = useRouter();

  const goNext = (role) => {
    // navigate to next screen; role is passed as a query param (optional)
    router.push(`/home?role=${role}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.roleSelectionHeading}>Select your role{}</Text>
        <Text style={styles.simpleText}>
          Choose one to continue as an Owner or Student.
        </Text>
        <View style={styles.extraPadding} />

        <RoleCard label="Owner " icon="user" onPress={() => goNext("owner ")} />
        <RoleCard
          label="Student "
          icon="user"
          onPress={() => goNext("student ")}
        />
      </View>
    </SafeAreaView>
  );
};
export default Onboard;
