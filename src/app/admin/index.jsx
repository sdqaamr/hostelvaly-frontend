import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import styles from '@styles/admin'
import { colors } from '@constants/global'

const AdminPanel = () => {
  const router = useRouter()

  // Later: fetch from backend / token
  const adminName = 'Siddiqa'

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ===== HEADER ===== */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcomeText}>Hi, {adminName} 👋</Text>

            <Text style={styles.roleTextHeading}>Administrator</Text>
          </View>

          <TouchableOpacity
            style={styles.profileContainer}
            onPress={() => router.push('/admin/profile')}
          >
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=47' }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', marginBottom: 24 }}>
          <Text style={{ fontSize: 14, color: '#64748B' }}>
            Monitor activity, manage resources, and keep the platform running
            smoothly!
          </Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Feather name='users' size={18} color={colors.primary} />
            <Text style={styles.statValue}>120</Text>
            <Text style={styles.statLabel}>Total Users</Text>
          </View>

          <View style={styles.statBox}>
            <Feather name='home' size={18} color='#16A34A' />
            <Text style={styles.statValue}>34</Text>
            <Text style={styles.statLabel}>Hostels </Text>
          </View>

          <View style={styles.statBox}>
            <Feather name='calendar' size={18} color='#F59E0B' />
            <Text style={styles.statValue}>58</Text>
            <Text style={styles.statLabel}>Bookings </Text>
          </View>
        </View>

        {/* ===== ACTION CARDS ===== */}
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/admin/users')}
          >
            <Feather name='users' size={26} color={colors.primary} />
            <Text style={styles.cardText}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/admin/hostels')}
          >
            <Feather name='home' size={26} color={colors.primary} />
            <Text style={styles.cardText}>Manage Hostels</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/admin/bookings')}
          >
            <Feather name='calendar' size={26} color={colors.primary} />
            <Text style={styles.cardText}>Bookings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/admin/visits')}
          >
            <Feather name='map-pin' size={26} color={colors.primary} />
            <Text style={styles.cardText}>Visit Requests</Text>
          </TouchableOpacity>
        </View>

        {/* ===== QUICK TOOLS ===== */}
        <View style={styles.quickToolsContainer}>
          <Text style={styles.sectionTitle}>Quick Tools</Text>

          <View style={styles.quickToolsRow}>
            <TouchableOpacity
              style={styles.quickTool}
              onPress={() => router.push('/admin/analytics')}
            >
              <Feather name='bar-chart-2' size={23} color={colors.primary} />
              <Text style={styles.quickToolText}>Analytics</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.quickTool}
              onPress={() => router.push('/admin/settings')}
            >
              <Feather name='settings' size={22} color={colors.primary} />
              <Text style={styles.quickToolText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== LOGOUT ===== */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.replace('/login')}
        >
          <Feather name='log-out' size={18} color='#fff' />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AdminPanel
