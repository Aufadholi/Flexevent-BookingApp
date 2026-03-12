import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

interface VenueCardProps {
  image: any;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: string;
  onPress?: () => void;
}

export default function VenueCard({ 
  image, 
  name, 
  location, 
  rating, 
  reviews, 
  price,
  onPress 
}: VenueCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="bg-white rounded-2xl overflow-hidden mr-4 w-64 shadow-sm"
    >
      <Image 
        source={image} 
        className="w-full h-40"
        resizeMode="cover"
      />
      
      <View className="p-3">
        <View className="flex-row items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <Ionicons 
              key={i}
              name="star" 
              size={14} 
              color={i < Math.floor(rating) ? "#FCD34D" : "#E5E7EB"} 
            />
          ))}
          <Text className="text-xs text-gray-600 ml-2">{reviews.toLocaleString()} Reviews</Text>
        </View>
        
        <Text className="font-bold text-base mb-1">{name}</Text>
        
        <View className="flex-row items-center mb-2">
          <Ionicons name="location-outline" size={14} color="#6B7280" />
          <Text className="text-xs text-gray-600 ml-1">{location}</Text>
        </View>
        
        <Text className="text-sm font-semibold">{price}</Text>
      </View>
    </Pressable>
  );
}
