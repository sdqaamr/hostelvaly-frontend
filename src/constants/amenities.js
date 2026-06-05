import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

// SMART AMENITIES CONFIG (keyword-based matching)

export const AMENITY_ICONS = [
  {
    keywords: ['wifi', 'internet'],
    icon: Feather,
    name: 'wifi',
    label: "Wi-Fi"
  },
  {
    keywords: ['laundry', 'washing'],
    icon: MaterialCommunityIcons,
    name: 'washing-machine',
    label: "Laundry"
  },
  {
    keywords: ['mess', 'food', 'meal', 'dining'],
    icon: MaterialCommunityIcons,
    name: 'food-fork-drink',
    label: "Mess"
  },
  {
    keywords: ['water', 'filtered', 'drinking'],
    icon: FontAwesome6,
    name: 'bottle-water',
    label: "Filtered Water"
  },
  {
    keywords: ['parking'],
    icon: MaterialIcons,
    name: 'garage',
    label: "Parking"
  },
  {
    keywords: ['cctv', 'security', 'camera'],
    icon: MaterialCommunityIcons,
    name: 'cctv',
    label: "CCTV"
  },
  {
    keywords: ['geyser', 'hot water'],
    icon: MaterialCommunityIcons,
    name: 'water-boiler',
    label: "Hot Water"
  },
  {
    keywords: ['reception', 'room service', 'front desk'],
    icon: MaterialIcons,
    name: 'countertops',
    label: "  Reception"
  },
  {
    keywords: ['fire', 'extinguisher'],
    icon: MaterialCommunityIcons,
    name: 'fire-extinguisher',
    label: "Fire Extinguisher"
  },
  {
    keywords: ['gym', 'fitness'],
    icon: MaterialCommunityIcons,
    name: 'dumbbell',
    label: "Gym"
  },
  {
    keywords: ['study', 'study room'],
    icon: MaterialCommunityIcons,
    name: 'book-open-variant',
    label: "Study Room"
  },
  {
    keywords: ['guest room', 'guest'],
    icon: MaterialCommunityIcons,
    name: 'door-closed-lock',
    label: "Guest Room"
  },
  {
    keywords: ['ac', 'air condition', 'air conditioning'],
    icon: MaterialIcons,
    name: 'ac-unit',
    label: "Air Conditioning"
  },
  {
    keywords: ['fan'],
    icon: MaterialIcons,
    name: 'mode-fan-off',
    label: "Fan"
  },
  {
    keywords: ['cooler'],
    icon: MaterialCommunityIcons,
    name: 'fan',
    label: "Cooler"
  },
  {
    keywords: ['common', 'lounge'],
    icon: MaterialCommunityIcons,
    name: 'sofa',
    label: "Common Lounge"
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
