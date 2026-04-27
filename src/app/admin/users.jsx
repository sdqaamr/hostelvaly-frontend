import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { colors } from '@constants/global'
import styles from '@styles/admin'
import UserDetailsModal from '@components/UserDetailsModal'

/* ===== MOCK DATA (replace with API later) ===== */
const INITIAL_USERS = [
  {
    id: '1',
    name: 'Ayesha Khan',
    email: 'ayesha@gmail.com',
    status: 'active',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: '2',
    name: 'Fatima Ali',
    email: 'fatima@gmail.com',
    status: 'inactive',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: '3',
    name: 'Sara Ahmed',
    email: 'sara@gmail.com',
    status: 'blocked',
    role: 'owner',
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    id: '4',
    name: 'Hira Noor',
    email: 'hira@gmail.com',
    status: 'inactive',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: '5',
    name: 'Ayesha Ahmed',
    email: 'ayesha@gmail.com',
    status: 'active',
    role: 'owner',
    avatar: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: '6',
    name: 'Zara Noor',
    email: 'zara@gmail.com',
    status: 'inactive',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=28'
  },
  {
    id: '7',
    name: 'Laiba Yasmeen',
    email: 'laiba@gmail.com',
    status: 'inactive',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=20'
  }
]

/* ===== STATUS UI HANDLER ===== */
const getStatusUI = status => {
  switch (status) {
    case 'active':
      return { bg: '#DCFCE7', text: '#166534', label: 'ONLINE' }
    case 'inactive':
      return { bg: '#E5E7EB', text: '#374151', label: 'OFFLINE' }
    case 'blocked':
      return { bg: '#FEE2E2', text: '#991B1B', label: 'BLOCKED' }
    default:
      return {}
  }
}

const AdminUsers = () => {
  const router = useRouter()
  const [users, setUsers] = useState(INITIAL_USERS)
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  /* ===== BLOCK / UNBLOCK ===== */
  const toggleBlock = user => {
    Alert.alert(
      user.status === 'blocked' ? 'Unblock User?' : 'Block User?',
      `${user.name}`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Confirm',
          style: 'destructive',
          onPress: () => {
            setUsers(prev =>
              prev.map(u =>
                u.id === user.id
                  ? {
                      ...u,
                      status: u.status === 'blocked' ? 'inactive' : 'blocked'
                    }
                  : u
              )
            )
          }
        }
      ]
    )
  }

  /* ===== SEARCH FILTER ===== */
  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  )

  /* ===== RENDER USER ===== */
  const renderUser = ({ item }) => {
    const statusUI = getStatusUI(item.status)
    const isBlocked = item.status === 'blocked'

    return (
      <View style={styles.userCard}>
        <Image source={{ uri: item.avatar }} style={styles.userAvatar} />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>

          <View style={[styles.statusBadge, { backgroundColor: statusUI.bg }]}>
            <Text style={[styles.statusText, { color: statusUI.text }]}>
              {statusUI.label}
            </Text>
          </View>
        </View>

        <View style={styles.userActions}>
          {/* VIEW USER */}
          <TouchableOpacity
            style={styles.actionIconBtn}
            onPress={() => {
              setSelectedUser(item)
              setModalVisible(true)
            }}
          >
            <Feather name='eye' size={18} color={colors.primary} />
          </TouchableOpacity>

          {/* BLOCK / UNBLOCK */}
          <TouchableOpacity
            style={styles.actionIconBtn}
            onPress={() => toggleBlock(item)}
          >
            <Feather
              name={isBlocked ? 'check-circle' : 'slash'}
              size={18}
              color={isBlocked ? '#16A34A' : '#DC2626'}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ===== HEADER (same as profile) ===== */}
        <View style={styles.profileTopBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Feather name='arrow-left' size={18} />
          </TouchableOpacity>

          <Text style={styles.profileTitle}>Manage Users</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* ===== SEARCH ===== */}
        <View style={styles.searchBox}>
          <Feather name='search' size={18} color={colors.lightText} />
          <TextInput
            placeholder='Search users...'
            placeholderTextColor={colors.dropDownPlaceholder}
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* ===== USER LIST ===== */}
        <FlatList
          data={filteredUsers}
          keyExtractor={item => item.id}
          renderItem={renderUser}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />

        <UserDetailsModal
          visible={modalVisible}
          user={selectedUser}
          onClose={() => setModalVisible(false)}
        />
      </View>
    </SafeAreaView>
  )
}

export default AdminUsers
