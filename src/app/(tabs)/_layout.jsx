import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "@styles/global";
import { colors } from "@constants/global";
import { TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabLayout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: {
          ...styles.homeTabBar,
          height: 50 + insets.bottom,   // dynamic height
          paddingBottom: insets.bottom, // ensures it never hides under nav bar
        },
        tabBarBadgeStyle: {
          backgroundColor: colors.primary,
          color: "white",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarLabel: "Reviews",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
          tabBarBadge: "2",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={props.onPress}
              style={styles.customTabButton}
              activeOpacity={0.8}
            >
              <FontAwesome5 name="plus" size={32} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="likes"
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabLayout;
