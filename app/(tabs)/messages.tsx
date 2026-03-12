import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function MessagesScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-gray-900 px-4 pt-12 pb-6">
        <Text className="text-white text-2xl font-bold">Messages</Text>
      </View>
      
      <ScrollView className="flex-1 px-4 pt-6">
        <View className="bg-white rounded-2xl p-6 items-center justify-center" style={{ minHeight: 200 }}>
          <Text className="text-gray-400 text-center">No messages</Text>
          <Text className="text-gray-400 text-center mt-2">Your conversations will appear here</Text>
        </View>
      </ScrollView>
    </View>
  );
}
