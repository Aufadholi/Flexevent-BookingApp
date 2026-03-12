import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, TextInput, View } from 'react-native';

export default function SearchBar() {
  return (
    <View className="bg-white rounded-full px-4 py-3 flex-row items-center shadow-sm">
      <Ionicons name="search-outline" size={20} color="#9CA3AF" />
      <TextInput
        placeholder="Search"
        className="flex-1 ml-2 text-base"
        placeholderTextColor="#9CA3AF"
      />
      <Pressable>
        <Ionicons name="options-outline" size={20} color="#000" />
      </Pressable>
    </View>
  );
}
