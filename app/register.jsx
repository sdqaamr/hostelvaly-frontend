import React from "react";
import styles from "../src/styles/global";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import SvgComponent from "../assets/SVG/Google";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.loginHeading}>Hello! Register to get started </Text>
        <Text></Text>
        <TextInput style={styles.textInput} placeholder="Username" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          secureTextEntry
        />
        <TouchableOpacity onPress={() => {
          router.navigate("otp");
        }} style={styles.primaryButton}>
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
              <FontAwesome5 name="facebook" size={35} color="#1877F2" />
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
          <TouchableOpacity onPress={() => {
          router.navigate("login");
        }}>
            <Text style={styles.footerText}>Login Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
