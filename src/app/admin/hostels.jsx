import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native'
import HostelDetailsModal from '@components/HostelDetailsModal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import styles from '@styles/admin'
import { colors } from '@constants/global'

const ManageHostels = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [selectedHostel, setSelectedHostel] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  // Temporary dummy data (replace with API later)
  const hostels = [
    {
      id: '1',
      name: 'Al Noor Girls Hostel',
      city: 'Multan',
      address: 'Near Women University, Katchery Road, Multan',
      rating: 4.2,
      isAvailable: true,
      image: 'https://picsum.photos/200'
    },
    {
      id: '2',
      name: 'Fatima Hostel',
      city: 'Lahore',
      address: 'Near Good Earth, Garden Town',
      rating: 4.5,
      isAvailable: true,
      image: 'https://picsum.photos/201'
    },
    {
      id: '3',
      name: 'Shaheen Hostel',
      city: 'Islamabad',
      address: 'Near Quaid-e-Azam University',
      rating: 3.2,
      isAvailable: true,
      image: 'https://picsum.photos/202'
    },
    {
      id: '4',
      name: 'Aqsa Gillani Hostel',
      city: 'Lahore',
      address: 'Near UCP',
      rating: 4.8,
      isAvailable: false,
      image: 'https://picsum.photos/203'
    },
    {
      id: '5',
      name: 'Al-Fahad Hostel',
      city: 'Lahore',
      address: 'Phase 6, DHA',
      rating: 2.4,
      isAvailable: true,
      image: 'https://picsum.photos/204'
    },
    {
      id: '6',
      name: 'Foundation Hostel',
      city: 'Rawalpindi',
      address: 'Near ARID Agriculture University',
      rating: 4.6,
      isAvailable: true,
      image: 'https://picsum.photos/205'
    },
    {
      id: '7',
      name: 'Almuhafiz Hostel',
      city: 'Multan',
      address: 'Opposite Women University Multan',
      rating: 4.2,
      isAvailable: true,
      image: 'https://picsum.photos/206'
    },
    {
      id: '8',
      name: 'City Girls Hostel',
      city: 'Multan',
      address: 'Near Women University Multan',
      rating: 4.5,
      isAvailable: false,
      image: 'https://picsum.photos/207'
    },
    {
      id: '9',
      name: 'A-Fateh Hostel',
      city: 'Lodhran',
      address: 'Near Kalma Chowk',
      rating: 4.8,
      isAvailable: true,
      image: 'https://picsum.photos/209'
    }
  ]

  /* ===== SEARCH FILTER ===== */
  const filteredHostels = hostels.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  )

  const renderItem = ({ item }) => (
    <View style={styles.userCard}>
      <Image source={{ uri: item.image }} style={styles.userAvatar} />

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userEmail}>{item.city}</Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: item.isAvailable ? '#DCFCE7' : '#FEE2E2'
            }
          ]}
        >
          <Text
            style={[
              styles.statusText,
              { color: item.isAvailable ? '#166534' : '#991B1B' }
            ]}
          >
            {item.isAvailable ? 'Available' : 'Unavailable'}
          </Text>
        </View>
      </View>

      <View style={styles.userActions}>
        <TouchableOpacity
          style={styles.actionIconBtn}
          onPress={() => {
            setSelectedHostel(item)
            setModalVisible(true)
          }}
        >
          <Feather name='eye' size={16} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionIconBtn}>
          <Feather name='trash-2' size={16} color='#DC2626' />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* ===== HEADER ===== */}
        <View style={styles.profileTopBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Feather name='arrow-left' size={18} color={colors.primary} />
          </TouchableOpacity>

          <Text style={styles.profileTitle}>Manage Hostels</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* ===== SEARCH ===== */}
        <View style={styles.searchBox}>
          <Feather name='search' size={16} color='#64748B' />
          <TextInput
            placeholder='Search hostel...'
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* ===== LIST ===== */}
        <FlatList
          data={filteredHostels}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* ===== FLOATING ADD HOSTEL BUTTON ===== */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/admin/add-hostel')}
      >
        <Feather name='plus' size={36} color='#fff' />
      </TouchableOpacity>
      {selectedHostel && (
        <HostelDetailsModal
          visible={modalVisible}
          hostel={selectedHostel}
          onClose={() => setModalVisible(false)}
        />
      )}
    </SafeAreaView>
  )
}

export default ManageHostels
