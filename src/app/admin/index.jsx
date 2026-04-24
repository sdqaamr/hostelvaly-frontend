import React from "react";
import styles from "@styles/admin";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const AdminPanel = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {/* Header */}
        <Text style={styles.heading}>Admin Dashboard</Text>
        <Text style={styles.subHeading}>
          Manage your application efficiently
        </Text>

        {/* Cards */}
        <View style={styles.cardContainer}>

          <TouchableOpacity style={styles.card}>
            <Feather name="users" size={26} color="#1E3A8A" />
            <Text style={styles.cardText}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="home" size={26} color="#1E3A8A" />
            <Text style={styles.cardText}>Manage Hostels</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="bar-chart-2" size={26} color="#1E3A8A" />
            <Text style={styles.cardText}>Analytics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="settings" size={26} color="#1E3A8A" />
            <Text style={styles.cardText}>Settings</Text>
          </TouchableOpacity>

        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace("/login")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default AdminPanel;