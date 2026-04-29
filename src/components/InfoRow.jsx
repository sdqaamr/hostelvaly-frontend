import React from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import styles from '@styles/admin'

const InfoRow = ({ label, value, icon, color = '#64748B' }) => (
  <View style={styles.infoRowModal}>
    <View style={styles.infoLeftRow}>
      <Feather name={icon} size={16} color={color} />
      <Text style={styles.infoLabelModal}>{label}</Text>
    </View>
    <Text style={styles.infoValueModal}>{value}</Text>
  </View>
)
export default InfoRow