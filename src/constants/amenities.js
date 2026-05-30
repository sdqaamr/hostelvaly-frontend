import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

// SMART AMENITIES CONFIG (keyword-based matching)

export const AMENITY_ICONS = [
  {
    keywords: ['wifi', 'internet'],
    icon: Feather,
    name: 'wifi'
  },
  {
    keywords: ['laundry', 'washing'],
    icon: MaterialCommunityIcons,
    name: 'washing-machine'
  },
  {
    keywords: ['mess', 'food', 'meal', 'dining'],
    icon: MaterialCommunityIcons,
    name: 'food-fork-drink'
  },
  {
    keywords: ['water', 'filtered', 'drinking'],
    icon: FontAwesome6,
    name: 'bottle-water'
  },
  {
    keywords: ['parking'],
    icon: MaterialIcons,
    name: 'garage'
  },
  {
    keywords: ['cctv', 'security', 'camera'],
    icon: MaterialCommunityIcons,
    name: 'cctv'
  },
  {
    keywords: ['geyser', 'hot water'],
    icon: MaterialCommunityIcons,
    name: 'water-boiler'
  },
  {
    keywords: ['reception', 'room service', 'front desk'],
    icon: MaterialIcons,
    name: 'room-service'
  },
  {
    keywords: ['fire', 'extinguisher'],
    icon: MaterialCommunityIcons,
    name: 'fire-extinguisher'
  },
  {
    keywords: ['gym', 'fitness'],
    icon: MaterialCommunityIcons,
    name: 'dumbbell'
  },
  {
    keywords: ['study', 'study room'],
    icon: MaterialCommunityIcons,
    name: 'book-open-variant'
  },
  {
    keywords: ['guest room', 'guest', 'rooms'],
    icon: MaterialCommunityIcons,
    name: 'door-closed-lock'
  },
  {
    keywords: ['ac', 'air condition', 'air conditioning'],
    icon: MaterialIcons,
    name: 'ac-unit'
  },
  {
    keywords: ['fan'],
    icon: MaterialIcons,
    name: 'mode-fan-off'
  },
  {
    keywords: ['cooler'],
    icon: MaterialCommunityIcons,
    name: 'fan'
  }
]

// Normalize text safely
export const normalizeAmenity = value => {
  if (!value) return ''

  return value.toLowerCase().trim()
}

// MAIN MATCHER FUNCTION (IMPORTANT)
export const getAmenityIcon = amenityText => {
  const text = normalizeAmenity(amenityText)

  for (const item of AMENITY_ICONS) {
    const match = item.keywords.some(keyword => text.includes(keyword))

    if (match) return item
  }

  return null
}
