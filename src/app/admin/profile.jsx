import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import styles from '@styles/admin'
import { colors } from '@constants/global'

const AdminProfile = () => {
  const router = useRouter()

  const user = {
    fullName: 'Siddiqa',
    email: 'siddiqadurrani@gmail.com',
    phone: '+92 300 0000000',
    city: 'Multan',
    gender: 'Female',
    status: 'active',
    role: 'admin',
    profilePicture: 'https://i.pravatar.cc/150?img=47'
  }

  return (
    <SafeAreaView style={styles.profileContainer}>
      {/* ===== TOP BAR ===== */}
      <View style={styles.profileTopBar}>
        <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
          <Feather name='arrow-left' size={20} color={colors.primary} />
        </TouchableOpacity>

        <Text style={styles.profileTitle}>Profile</Text>

        <View style={{ width: 34 }} />
      </View>

      {/* ===== PROFILE CARD ===== */}
      <View style={styles.profileCardEnhanced}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.avatarLarge}
          />

          {/* Change Avatar Button */}
          <TouchableOpacity style={styles.changeAvatarBtn}>
            <Feather name='camera' size={14} color='#fff' />
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: 'row', justifyContent: 'center', gap: 5 }}
        >
          <Text style={styles.profileName}>{user.fullName}</Text>
          <Text
            style={{
              color: colors.primary,
              fontWeight: '700',
              marginTop: 10,
              fontSize: 20
            }}
          >
            (Admin)
          </Text>
        </View>
      </View>

      {/* ===== INFO CARD ===== */}
      <View style={styles.infoCardModern}>
        <InfoItem icon='mail' label='Email' value={user.email} />
        <InfoItem icon='phone' label='Phone ' value={user.phone} />
        <InfoItem icon='map-pin' label='City ' value={user.city} />
        <InfoItem icon='user' label='Gender ' value={user.gender} />
        <InfoItem icon='activity' label='Status ' value={user.status} />
      </View>

      {/* ===== ACTIONS ===== */}
      <TouchableOpacity style={styles.primaryActionBtn}>
        <Feather name='edit-3' size={18} color='#fff' />
        <Text style={styles.primaryActionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryActionBtn}>
        <Feather name='lock' size={18} color={colors.primary} />
        <Text style={styles.secondaryActionText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => router.replace('/login')}
      >
        <Feather name='log-out' size={18} color='#fff' />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const InfoItem = ({ icon, label, value }) => (
  <View style={styles.infoItemModern}>
    <View style={styles.infoLeft}>
      <View style={styles.iconCircle}>
        <Feather name={icon} size={14} color='#fff' />
      </View>

      <Text style={styles.infoLabelModern}>{label}</Text>
    </View>

    <Text style={styles.infoValueModern}>{value || 'N/A'}</Text>
  </View>
)

export default AdminProfile
