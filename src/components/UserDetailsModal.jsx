import React, { useState } from 'react'
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from '@styles/admin'

const UserDetailsModal = ({ visible, onClose, user }) => {
  if (!user) return null

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const InfoRow = ({ label, value, icon, iconColor }) => (
    <View style={styles.infoRowModal}>
      <View style={styles.infoLeftRow}>
        <Feather name={icon} size={16} color={iconColor} />
        <Text style={styles.infoLabelModal}>{label}</Text>
      </View>

      <Text style={styles.infoValueModal}>{value}</Text>
    </View>
  )

  return (
    <Modal visible={visible} animationType='slide' transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Feather name='x' size={20} color='#0F172A' />
          </TouchableOpacity>

          {/* Avatar */}
          <Image source={{ uri: user.avatar }} style={styles.modalAvatar} />

          {/* Name */}
          <Text style={styles.modalName}>{user.name}</Text>
          <Text style={styles.modalEmail}>{user.email}</Text>

          {/* Status */}
          <View
            style={[
              styles.statusBadge,
              {
                backgroundColor:
                  user.status === 'active'
                    ? '#DCFCE7'
                    : user.status === 'blocked'
                    ? '#FEE2E2'
                    : '#E2E8F0'
              }
            ]}
          >
            <Text style={styles.statusText}>{user.status.toUpperCase()}</Text>
          </View>

          {/* Extra Info */}
          <View style={styles.modalInfoBox}>
            <InfoRow
              icon='user'
              iconColor='#8100d1'
              label='Full Name'
              value={user.name}
            />

            <InfoRow
              icon='mail'
              iconColor='#2563EB'
              label='Email'
              value={user.email}
            />

            <InfoRow
              icon='phone'
              iconColor='#16A34A'
              label='Phone '
              value={user.phone || 'Not provided'}
            />

            <InfoRow
              icon='map-pin'
              iconColor='#F59E0B'
              label='City '
              value={user.city || 'Not set'}
            />

            <InfoRow
              icon='users'
              iconColor='#8B5CF6'
              label='Gender'
              value={user.gender || 'Not set'}
            />

            <InfoRow
              icon='shield'
              iconColor='#0F172A'
              label='Role'
              value={user.role}
            />

            <InfoRow
              icon='activity'
              iconColor='#DC2626'
              label='Status '
              value={user.status}
            />
          </View>

          {/* Action Button */}
          <TouchableOpacity style={styles.primaryActionBtn}>
            <Feather name='trash-2' size={18} color='#fff' />
            <Text style={styles.primaryActionText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default UserDetailsModal
