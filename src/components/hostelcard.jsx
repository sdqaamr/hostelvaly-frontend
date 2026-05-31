import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { colors } from '@constants/global'
import { getAmenityIcon } from '@constants/amenities'
const HostelCard = ({ hostel, openBottomSheet }) => {
  const router = useRouter()
  if (!hostel) return null
  return (
    <View>
      <View style={styles.card}>
        <Image
          source={
            hostel.images?.[0] ||
            'https://tse2.mm.bing.net/th?id=OIP.ix8gl1euNehctcXK-QTxFwHaE7&pid=Api&P=0&h=220'
          }
          style={styles.cardImage}
          contentFit='fill'
        />
        <View style={styles.cardImgIconsContainer}>
          <TouchableOpacity style={styles.cardImgIconRoundContainer}>
            <MaterialCommunityIcons
              name='cards-heart-outline'
              style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nameAndLocContainer}>
          <View>
            <Text style={styles.cardsHeadingText}>{hostel.name}</Text>
            <View style={styles.locationContainer}>
              <Ionicons name='location-outline' size={20} color='gray' />
              <Text style={styles.cardsSimpleText}>
                {hostel.address}, {hostel.tehsil}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.cardIconsContainer}>
          {hostel.amenities?.map((item, index) => {
            const match = getAmenityIcon(item)
            if (!match) return null
            const Icon = match.icon
            return (
              <Icon
                key={`${hostel._id}-${item}-${index}`}
                name={match.name}
                size={24}
                color='gray'
              />
            )
          })}
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cardsCategoryButtonContainer}>
            <TouchableOpacity style={styles.availbilityButton}>
              <AntDesign name='star' size={18} color={colors.ratingStar} />
              <Text>{hostel.rating || 0}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsCategoryButtonContainer}>
            <TouchableOpacity
              style={[
                styles.availbilityButton,
                {
                  backgroundColor: hostel.isAvailable ? '#e6f0ea' : '#fceded'
                }
              ]}
            >
              <Text
                style={{
                  color: hostel.isAvailable ? 'green' : 'red',
                  fontWeight: '600'
                }}
              >
                {hostel.isAvailable ? 'Available' : 'Not Available'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={openBottomSheet}>
          <Text style={styles.cardsPrimaryButton}>SCHEDULE VISIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate('(booking-flow)/property-details')
          }}
        >
          <Text style={styles.cardsSecondaryButton}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default HostelCard
