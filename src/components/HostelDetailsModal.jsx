import React from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import styles from '@styles/admin'
import { colors } from '@constants/global'
import InfoRow from '@components/InfoRow'

const HostelDetailsModal = ({ visible, hostel, onClose }) => {
  const router = useRouter()

  if (!hostel) return null

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          {/* Close */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Feather name="x" size={20} color="#64748B" />
          </TouchableOpacity>

          {/* Image */}
          <Image
            source={{ uri: hostel.image }}
            style={styles.modalAvatar}
          />

          {/* Name */}
          <Text style={styles.modalName}>{hostel.name}</Text>
          <Text style={styles.modalEmail}>{hostel.city}</Text>

          {/* Info */}
          <View style={styles.modalInfoBox}>
            <InfoRow label="City" value={hostel.city} icon="map-pin" />
            <InfoRow
              label="Status "
              value={hostel.isAvailable ? 'Available' : 'Unavailable'}
              icon="check-circle"
              color={hostel.isAvailable ? '#16A34A' : '#DC2626'}
            />
          </View>

          {/* Edit Button */}
          <TouchableOpacity
            style={styles.primaryActionBtn}
            onPress={() => {
              onClose()
              router.push(`/admin/hostels/${hostel.id}`)
            }}
          >
            <Feather name="edit-2" size={16} color="#fff" />
            <Text style={styles.primaryActionText}>Edit Hostel</Text>
          </TouchableOpacity>

        </View>
      </View>
    
    </Modal>
  )
}

export default HostelDetailsModal