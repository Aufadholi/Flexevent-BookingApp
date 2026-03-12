import React from 'react';
import { Pressable, Text } from 'react-native';

interface CategoryTabProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export default function CategoryTab({ label, isActive, onPress }: CategoryTabProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-6 py-2 rounded-full mr-3 ${
        isActive ? 'bg-blue-500' : 'bg-white border border-gray-300'
      }`}
    >
      <Text className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
        {label}
      </Text>
    </Pressable>
  );
}
