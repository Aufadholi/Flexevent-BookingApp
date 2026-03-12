import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text } from 'react-native';

interface SocialButtonProps {
  provider: 'google' | 'apple';
  onPress?: () => void;
}

export default function SocialButton({ provider, onPress }: SocialButtonProps) {
  const isGoogle = provider === 'google';
  
  return (
    <Pressable 
      onPress={onPress}
      className="flex-row items-center justify-center bg-white border border-gray-200 rounded-full py-4 px-6 mb-3"
    >
      {isGoogle ? (
        <Ionicons name="logo-google" size={20} color="#DB4437" />
      ) : (
        <Ionicons name="logo-apple" size={20} color="#000000" />
      )}
      <Text className="text-gray-800 ml-2 font-medium">
        Continue with {isGoogle ? 'Google' : 'Apple'}
      </Text>
    </Pressable>
  );
}
