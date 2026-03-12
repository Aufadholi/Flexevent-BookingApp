import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  showCheckmark?: boolean;
  leftIcon?: React.ReactNode;
}

export default function Input({ 
  label, 
  isPassword, 
  showCheckmark,
  leftIcon,
  ...props 
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="mb-4">
      <Text className="text-gray-800 mb-2 text-base">{label}</Text>
      <View className="flex-row items-center bg-white border border-gray-200 rounded-full px-4 py-3">
        {leftIcon && <View className="mr-2">{leftIcon}</View>}
        
        <TextInput
          className="flex-1 text-base"
          secureTextEntry={isPassword && !isPasswordVisible}
          {...props}
        />
        
        {isPassword && (
          <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons 
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color="#9CA3AF" 
            />
          </Pressable>
        )}
        
        {showCheckmark && (
          <Ionicons name="checkmark-circle" size={20} color="#10B981" />
        )}
      </View>
    </View>
  );
}
