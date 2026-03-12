import React from 'react';
import { Pressable, Text } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function PrimaryButton({ label, onPress, variant = 'primary' }: PrimaryButtonProps) {
  return (
    <Pressable 
      onPress={onPress}
      className={`w-full py-4 rounded-full items-center justify-center ${
        variant === 'primary' ? 'bg-indigo-400' : 'bg-gray-200'
      }`}
    >
      <Text className={`font-semibold text-lg ${
        variant === 'primary' ? 'text-white' : 'text-gray-800'
      }`}>
        {label}
      </Text>
    </Pressable>
  );
}
