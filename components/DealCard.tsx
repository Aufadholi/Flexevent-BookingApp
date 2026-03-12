import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';

interface DealCardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  backgroundColor: string;
  onPress?: () => void;
}

export default function DealCard({ image, title, subtitle, backgroundColor, onPress }: DealCardProps) {
  return (
    <Pressable 
      onPress={onPress}
      className="rounded-2xl overflow-hidden mr-3 w-56 h-32"
      style={{ backgroundColor }}
    >
      <View className="flex-row items-center justify-between h-full p-4">
        <View className="flex-1">
          <Text className="text-white font-bold text-lg">{title}</Text>
          {subtitle && <Text className="text-white text-xs mt-1">{subtitle}</Text>}
        </View>
        {image && (
          <Image 
            source={image} 
            className="w-20 h-20"
            resizeMode="contain"
          />
        )}
      </View>
    </Pressable>
  );
}
