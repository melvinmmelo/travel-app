import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Hotels } from '../assets'

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  return (
    <TouchableOpacity className="items-center justify-center space-y-2">
      <View className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center
          ${type === title.toLowerCase() ? "bg-gray-500" : "" }`}>
        <Image
          source={imageSrc}
          className="w-full h-full object-contain"
        />
      </View>

        <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer