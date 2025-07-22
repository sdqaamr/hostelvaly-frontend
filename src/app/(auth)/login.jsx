import React, { useState } from "react";
import styles from "@styles/global";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import GoogleIcon from "@assets/SVG/Google";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>
          Welcome back! Glad to see you Again!{" "}
        </Text>
        <Text></Text>
        <TextInput style={styles.textInput} placeholder="Enter your email" />
        <View style={styles.passwordOuterContainer}>
          <View style={styles.passwordInnerContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.eyeContainer}
              accessibilityLabel={showPassword ? "Hide password" : "Show password"}
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.additionalTextContainer} onPress={() => {
          router.navigate("password-forget");
        }}>
          <Text style={styles.additionalText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          router.navigate("verify");
        }} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.intermediateContainer}>
          <View style={styles.intermediateLine} />
          <Text style={styles.intermediateText}>or login with </Text>
          <View style={styles.intermediateLine} />
        </View>
        <View style={styles.allIconsContainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <FontAwesome5 name="facebook" size={35} color="#1877F2" />
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <View>
                <GoogleIcon />
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
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => {
          router.navigate("register");
        }}>
            <Text style={styles.footerText}>Register Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
