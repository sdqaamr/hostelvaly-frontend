import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'

const Checkout = () => {
  const { booking } = useLocalSearchParams()
  const parsedBooking = booking ? JSON.parse(booking) : null
  const price = parsedBooking?.totalAmount || 0
  const router = useRouter()

  const from = new Date(parsedBooking?.fromDate)
  const to = new Date(parsedBooking?.toDate)
  const nights = parsedBooking
    ? Math.ceil((to - from) / (1000 * 60 * 60 * 24))
    : 0
  const securityCharge = nights > 15 ? 4000 : 0
  const payableAmount = price + securityCharge
  return (
    <SafeAreaView style={styles.safeArea}>
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
              <Text style={styles.propertyDetailsHeaderText}>Checkout </Text>
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
            <Text style={styles.smallGrayFont}>Booking </Text>
            <Entypo
              name='chevron-small-right'
              size={20}
              color='gray'
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Checkout </Text>
          </View>

          <View style={styles.propertyDetailsContentContainer}>
            <View style={styles.bookingImgAndDetailsContainer}>
              <Image
                source={{
                  uri:
                    parsedBooking?.hostel?.images?.[0] ||
                    'https://via.placeholder.com/300'
                }}
                style={styles.bookingImg}
                contentFit='cover'
                placeholder={require('@assets/images/dummy.png')}
                transition={300}
              />
              <View style={styles.bookingImgDetailsContainer}>
                <Text style={styles.cardsHeadingText}>
                  {parsedBooking?.hostel?.name || 'Hostel'}
                </Text>
                <View>
                  <View style={styles.locationContainer}>
                    <Ionicons name='location-outline' size={20} color='gray' />
                    <Text style={styles.cardsSimpleText}>
                      {' '}
                      <Text>{parsedBooking?.hostel?.tehsil || 'N/A'}</Text>{' '}
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <FontAwesome name='calendar' size={20} color='gray' />
                    <Text style={styles.cardsSimpleText}>
                      {' '}
                      {parsedBooking?.fromDate?.slice(0, 10)} -{' '}
                      {parsedBooking?.toDate?.slice(0, 10)}
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <Feather name='home' size={20} color='gray' />
                    <Text style={styles.cardsSimpleText}>
                      {' '}
                      {parsedBooking?.roomType?.type
                        ? parsedBooking.roomType.type.charAt(0).toUpperCase() +
                          parsedBooking.roomType.type.slice(1)
                        : 'Room'}{' '}
                      Room Type {console.log('BOOKING:', parsedBooking)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.servicesContainer}>
              <View style={styles.checkoutContainer}>
                <Text style={styles.cardsHeadingText}>Billing Details </Text>
                <Text style={styles.cardsSimpleText}>Per Night Billing </Text>
              </View>
              <View style={styles.checkoutAllPaymentsContainer}>
                <View style={styles.checkoutPaymentContainer}>
                  <Text style={styles.checkoutPaymentText}>Price </Text>
                  <Text style={styles.checkoutPriceText}>Rs. {price} </Text>
                </View>
                <View style={styles.checkoutPaymentContainer}>
                  <Text style={styles.checkoutPaymentText}>Security </Text>
                  <Text style={styles.checkoutPriceText}>
                    Rs. {securityCharge}{' '}
                  </Text>
                </View>
                <View style={styles.checkoutPaymentContainer}>
                  <Text style={styles.checkoutPaymentText}>
                    Payable amount{' '}
                  </Text>
                  <Text style={styles.checkoutPriceText}>
                    Rs. {payableAmount}{' '}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutFooterContainer}>
        <TouchableOpacity
          onPress={() => {
            router.navigate({
              pathname: 'payment',
              params: {
                booking: JSON.stringify(parsedBooking)
              }
            })
          }}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Checkout
