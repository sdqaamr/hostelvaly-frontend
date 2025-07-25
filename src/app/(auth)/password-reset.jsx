import React, { useState } from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@constants/global";

const PasswordReset = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Reset {"\n"}Password!</Text>
        <Text style={styles.simpleText}>
          Please enter yout new password and then confirm it.
        </Text>
        <Text></Text>
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.eyeContainer}
              accessibilityLabel={
                showPassword ? "Hide password" : "Show password"
              }
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword((prev) => !prev)}
              style={styles.eyeContainer}
              accessibilityLabel={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              <Feather
                name={showConfirmPassword ? "eye" : "eye-off"}
                size={22}
                color={colors.eye}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.navigate("login");
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default PasswordReset;