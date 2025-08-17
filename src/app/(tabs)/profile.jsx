import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "@styles/global";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea2} edges={["top", "left", "right"]}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <FontAwesome name="angle-left" size={26} color="black" />
            </TouchableOpacity>
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.bookingHeaderText}>My Profile </Text>
            </View>
          </View>
          <View
            style={{
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={styles.profileImgContainer}
            >
              <Image
                source="https://wallpapers.com/images/file/cute-profile-picture-bxmwah5el6rxxp8g.jpg"
                style={styles.profileImg}
                contentFit="cover"
                contentPosition="center"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileImgEditor}
            >
              <AntDesign name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Full Name
            </Text>
            <Text style={styles.fontFifteen}>Siddiqa Durrani</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Email
            </Text>
            <Text style={styles.fontFifteen}>siddiqadurrani@gmail.com</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Status
            </Text>
            <Text style={styles.fontFifteen}>Active</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Role
            </Text>
            <Text style={styles.fontFifteen}>Admin</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Gender
            </Text>
            <Text style={styles.fontFifteen}>Female</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              Phone
            </Text>
            <Text style={styles.fontFifteen}>+923006208822</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>
          <View style={styles.profileDetailContainer}>
            <Text style={styles.profileDetailText}>
              City
            </Text>
            <Text style={styles.fontFifteen}>Multan</Text>
            <View
              style={styles.profileDescriptionBottomLine}
            />
          </View>

          <Text></Text>
          <TouchableOpacity
            style={styles.profileSaveButton}
          >
            <Text style={styles.primaryButtonText}>Save </Text>
            <FontAwesome5 name="check-circle" size={18} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mySchedulesButton}
            onPress={() => {
            router.navigate("/my-schedules");
          }}
          >
            <View style={styles.flexAndAlign}>
              <MaterialCommunityIcons name="home-city-outline" size={30} color="black" />
              <Text style={styles.myScheduleButtonText}>
                {"  "}My Properties{"  "}
              </Text>
            </View>
            <Entypo
              name="chevron-small-right"
              size={28}
              color="black"
              style={styles.fontPadding}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.mySchedulesButton}
            onPress={() => {
            router.navigate("/my-schedules");
          }}
          >
            <View style={styles.flexAndAlign}>
              <AntDesign name="calendar" size={30} color="black" />
              <Text style={styles.myScheduleButtonText}>
                {"  "}My Schedules{"  "}
              </Text>
            </View>
            <Entypo
              name="chevron-small-right"
              size={28}
              color="black"
              style={styles.fontPadding}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
            router.navigate("/home");
          }}
          >
            <View style={styles.flexAndAlign}>
              <Ionicons name="log-out-outline" size={36} color="red" />
              <Text style={styles.logoutButtonText}>
                {"  "}Logout{"  "}
              </Text>
            </View>
            <Entypo
              name="chevron-small-right"
              size={28}
              color="red"
              style={styles.fontPadding}
            />
          </TouchableOpacity>

          <View style={styles.extraPadding} />
          <View style={{ padding: 50 }} />
        </View>
      </ScrollView>

      
    </SafeAreaView>
  );
};
export default Profile;
