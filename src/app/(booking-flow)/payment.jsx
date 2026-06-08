import React from 'react'
import styles from '@styles/global'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { Alert } from 'react-native'
import Toast from 'react-native-toast-message'

const Payment = () => {
  const { booking } = useLocalSearchParams()
  const parsedBooking = booking ? JSON.parse(booking) : null
  const [paymentMethod, setPaymentMethod] = React.useState('cash')

  const showBreakdown = () => {
    const from = new Date(parsedBooking?.fromDate)
    const to = new Date(parsedBooking?.toDate)

    const nights = Math.max(1, Math.ceil((to - from) / (1000 * 60 * 60 * 24)))

    const monthly = parsedBooking?.roomType?.monthlyRent || 0
    const perNight = Math.ceil(monthly / 30)
    Alert.alert(
      'Price Breakdown',
      `Nights: ${nights}
Per Night: Rs ${perNight}
Total: Rs ${parsedBooking?.totalAmount}`
    )
  }
  const confirmBooking = async () => {
    try {
      const res = await authFetch(`/bookings/${parsedBooking._id}/status`, {
        method: 'PATCH',
        body: JSON.stringify({
          status: 'confirmed',
          paymentMethod
        })
      })

      const data = await res.json()

      if (data.success) {
        Toast.show({
          type: 'success',
          text1: 'Booking Confirmed',
          text2: 'Your booking has been successfully confirmed'
        })

        setTimeout(() => {
          router.replace('home-page2')
        }, 2000)
      } else {
        Toast.show({
          type: 'error',
          text1: 'Failed',
          text2: data.message
        })
      }
    } catch (err) {
      console.log(err)

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong'
      })
    }
  }
  const router = useRouter()
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
              <Text style={styles.propertyDetailsHeaderText}>Payment </Text>
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
            <Text style={styles.smallGrayFont}>Checkout </Text>
            <Entypo
              name='chevron-small-right'
              size={20}
              color='gray'
              style={styles.fontPadding}
            />
            <Text style={styles.smallFont}>Payment </Text>
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
                  {parsedBooking?.hostel?.name || 'Hostel'}{' '}
                </Text>

                <View>
                  <View style={styles.locationContainer}>
                    <Ionicons name='location-outline' size={20} color='gray' />
                    <Text style={styles.cardsSimpleText}>
                      {' '}
                      {parsedBooking?.hostel?.tehsil ?? 'Multan'}{' '}
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <FontAwesome name='calendar' size={20} color='gray' />
                    <Text style={styles.cardsSimpleText}>
                      {' '}
                      {parsedBooking?.fromDate?.slice(0, 10)} -{' '}
                      {parsedBooking?.toDate?.slice(0, 10)}{' '}
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
                      Room Type {console.log('BOOKING:', parsedBooking)}{' '}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.servicesContainer}></View>
            <View style={styles.paymentButton}>
              <View style={styles.paymentButtonTextContainer}>
                <View style={styles.flexDirection}>
                  <Text>Total Amount </Text>
                  <TouchableOpacity onPress={showBreakdown}>
                    <Entypo
                      name='chevron-small-down'
                      size={22}
                      color='black'
                      style={styles.fontPadding}
                    />
                  </TouchableOpacity>
                </View>
                <Text>Rs. {parsedBooking?.totalAmount || 22000}</Text>
              </View>
            </View>
            <View style={styles.checkoutContainer}>
              <Text style={styles.cardsHeadingText}>Payment Methods </Text>
            </View>
            <View style={styles.bookingDetailsContainer}>
              <TouchableOpacity
                style={styles.paymentMethodsContainer}
                onPress={() => setPaymentMethod('bank transfer')}
              >
                <View style={styles.flexDirection}>
                  <View style={styles.radio}>
                    {paymentMethod === 'bank transfer' && (
                      <View style={styles.radioDot} />
                    )}
                  </View>
                  <Text>Bank Transfer</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.bookingDetailsContainer}>
              <TouchableOpacity
                style={styles.paymentMethodsContainer}
                onPress={() => setPaymentMethod('cash')}
              >
                <View style={styles.flexDirection}>
                  <View style={styles.radio}>
                    {paymentMethod === 'cash' && (
                      <View style={styles.radioDot} />
                    )}
                  </View>
                  <Text>Hands On Payment</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.checkoutFooterContainer}>
        <TouchableOpacity
          onPress={() => router.navigate('home-page2')}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default Payment
