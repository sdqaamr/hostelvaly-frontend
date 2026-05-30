import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import HostelCard from './HostelCard'

const RecommendedHostels = ({
  hostels = [],
  openBottomSheet,
  loadMoreHostels
}) => {
  return (
    <>
      <View style={styles.cardsHeadingContainer}>
        <Text style={styles.cardsHeadingText}>Recommended Hostel's{'  '}</Text>
        <TouchableOpacity onPress={loadMoreHostels}>
          <Ionicons name='arrow-forward' size={24} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.recommendationsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsContainer}>
            {hostels.map(item => (
              <HostelCard
                key={`${item._id}-${Math.random()}`}
                hostel={item}
                openBottomSheet={openBottomSheet}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  )
}
export default RecommendedHostels
