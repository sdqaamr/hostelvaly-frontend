import React, { useState } from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import SvgComponent from "@assets/images/SVG/Google";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { colors } from "@constants/global";

const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Hello! Register to get started </Text>
        <TextInput style={styles.textInput} placeholder="Full Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
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
              placeholder="Confirm password"
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
            router.navigate("otp");
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.intermediateContainer}>
          <View style={styles.intermediateLine} />
          <Text style={styles.intermediateText}>or register with</Text>
          <View style={styles.intermediateLine} />
        </View>
        <View style={styles.allIconsContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome5 name="facebook" size={35} color={colors.facebook} />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View>
                <SvgComponent />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <AntDesign name="apple1" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              router.navigate("login");
            }}
          >
            <Text style={styles.footerText}>Login Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Register;
