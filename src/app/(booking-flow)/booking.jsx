import React, { useState, useEffect } from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { colors } from '@constants/global'
import CalendarComponent from '@components/Calendar'
import { useLocalSearchParams } from 'expo-router'
import { BASE_URL } from '../../../services/config'
import { getAmenityIcon } from '@constants/amenities'
import { authFetch } from '../../../services/api'

const Booking = () => {
  const router = useRouter()
  const { hostelId } = useLocalSearchParams()
  const [hostel, setHostel] = useState(null)
  const [loading, setLoading] = useState(false)
  const [avgRating, setAvgRating] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [selectedRoomType, setSelectedRoomType] = useState(null)
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const getHostelDetails = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/hostels/${hostelId}`)
      const data = await res.json()
      if (data.success) {
        setHostel(data.data)
      }
    } catch (err) {
      console.log('BOOKING HOSTEL ERROR:', err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (hostelId) getHostelDetails()
  }, [hostelId])
  const calculateTotal = () => {
    if (!selectedRoom || !fromDate || !toDate) return 0
    const days = (new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24)
    const months = Math.max(1, Math.ceil(days / 30))
    return months * selectedRoom.monthlyRent
  }
  const totalAmount = calculateTotal()

  const createBooking = async () => {
    if (!selectedRoom || !fromDate || !toDate) {
      alert('Please select room and dates')
      return
    }

    try {
      const res = await authFetch('/bookings', {
        method: 'POST',
        body: JSON.stringify({
          hostel: hostel._id,
          roomType: selectedRoom._id,
          fromDate,
          toDate,
          totalAmount: totalPrice
        })
      })

      const data = await res.json()

      if (data.success) {
        router.replace({
          pathname: '/checkout',
          params: {
            booking: JSON.stringify(data.data)
          }
        })
      } else {
        alert(data.message)
      }
    } catch (err) {
      console.log('BOOKING ERROR:', err)
    }
  }
  const nights =
    fromDate && toDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24)
          )
        )
      : 0

  const monthlyRent = selectedRoom?.monthlyRent || 0
  const perNightRent = Math.ceil(monthlyRent / 30)

  const totalPrice = selectedRoom && nights > 0 ? perNightRent * nights : 0

  return (
    <SafeAreaView style={styles.safeArea2}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.propertyDetailsHeaderContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <FontAwesome name='angle-left' size={26} color='black' />
            </TouchableOpacity>
            <View style={styles.propertyDetailsHeaderTextContainer}>
              <Text style={styles.propertyDetailsHeaderText}>Booking </Text>
            </View>
            <View style={styles.propertyDetailsEmptySpace} />
          </View>
          <View style={styles.propertyDetailsHeading2}>
            <Text style={styles.smallGrayFont}>Home</Text>
            <Entypo
              name='chevron-small-right'
              size={20}
              color='gray'
              style={styles.fontPadding}
            />
            <Text style={styles.smallGrayFont}>Details </Text>
            <Entypo
              name='chevron-small-right'
              size={20}
              color='gray'
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Booking </Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.relativePosition}>
              <Image
                source={{ uri: hostel?.images?.[0] }}
                style={styles.propertyMainImage}
                contentFit='cover'
                placeholder={require('@assets/images/dummy.png')}
                transition={300}
              />
              <TouchableOpacity style={styles.heartIconContainer}>
                <MaterialCommunityIcons
                  name='cards-heart-outline'
                  style={styles.propertyDetailsLike}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pillsContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.pills}>
                  <AntDesign name='star' size={18} color={colors.ratingStar} />
                  <Text>{avgRating}</Text>
                </View>
                {hostel?.amenities?.map((item, index) => {
                  const match = getAmenityIcon(item)
                  if (!match) return null
                  const Icon = match.icon
                  return (
                    <View key={index} style={styles.pills}>
                      <Icon name={match.name} size={18} color='black' />
                      <Text>{match.label} </Text>
                    </View>
                  )
                })}
              </ScrollView>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>
                {'  '}Room Details{'  '}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>Select Room Type </Text>
                <View style={styles.flexDirection}>
                  {hostel?.roomType?.map(room => (
                    <TouchableOpacity
                      key={room._id}
                      style={styles.radioContainer}
                      onPress={() => {
                        setSelectedRoom(
                          selectedRoom?._id === room._id ? null : room
                        )
                      }}
                    >
                      <View style={styles.radio}>
                        {selectedRoom?._id === room._id && (
                          <View style={styles.radioDot} />
                        )}
                      </View>
                      <Text>{room.type} </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>

            <View style={styles.detailContainer}>
              <Text style={styles.cardsHeadingText}>
                {'  '}Stay Duration{'  '}
              </Text>
              <View style={styles.bookingDetailsContainer}>
                <Text>From Date </Text>
                <CalendarComponent onSelect={setFromDate} />
              </View>
              <View style={styles.bookingDetailsContainer}>
                <Text>To Date </Text>
                <CalendarComponent onSelect={setToDate} />
              </View>
            </View>
            <View style={styles.noReviewsContainer}>
              <Text style={styles.noReviewsText}>
                Security charges apply for bookings over 15 days.{' '}
              </Text>
            </View>
          </View>
          <View style={styles.extraPadding} />
        </View>
      </ScrollView>
      <View style={styles.bookingFooterContainer}>
        <View>
          <Text>Total Price</Text>
          <Text style={styles.cardsHeadingText}>Rs. {totalPrice}/- </Text>
          {/* <Text style={styles.priceNote}>
            {selectedRoom && nights > 0
              ? `(Rs. ${perNightRent} × ${nights} nights)`
              : 'Select room and dates'}
          </Text> */}
        </View>
        <TouchableOpacity
          onPress={createBooking}
          style={[
            styles.bookingButton,
            (!selectedRoom || !fromDate || !toDate) && { opacity: 0.5 }
          ]}
          disabled={!selectedRoom || !fromDate || !toDate}
        >
          <Text style={styles.primaryButtonText}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Booking
