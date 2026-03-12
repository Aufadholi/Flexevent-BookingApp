import { useAuth } from '@/contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function ProfileScreen() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  const menuItems = [
    { icon: 'person-outline', label: 'Edit Profile', route: '/profile/edit' },
    { icon: 'settings-outline', label: 'Settings', route: '/settings' },
    { icon: 'help-circle-outline', label: 'Help & Support', route: '/help' },
    { icon: 'information-circle-outline', label: 'About', route: '/about' },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-gray-900 px-4 pt-12 pb-6">
        <Text className="text-white text-2xl font-bold">Profile</Text>
      </View>
      
      <ScrollView className="flex-1">
        {/* Profile Header */}
        <View className="bg-white mx-4 mt-6 rounded-2xl p-6 items-center">
          <View className="w-20 h-20 bg-indigo-400 rounded-full items-center justify-center mb-3">
            <Ionicons name="person" size={40} color="white" />
          </View>
          <Text className="text-xl font-bold">Guest User</Text>
          <Text className="text-gray-500 mt-1">guest@flexivent.com</Text>
        </View>

        {/* Menu Items */}
        <View className="bg-white mx-4 mt-4 rounded-2xl overflow-hidden">
          {menuItems.map((item, index) => (
            <Pressable
              key={index}
              className={`flex-row items-center px-4 py-4 ${
                index < menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Ionicons name={item.icon as any} size={24} color="#6B7280" />
              <Text className="flex-1 ml-3 text-base">{item.label}</Text>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </Pressable>
          ))}
        </View>

        {/* Logout Button */}
        <Pressable 
          onPress={handleLogout}
          className="bg-red-50 mx-4 mt-4 rounded-2xl p-4 flex-row items-center justify-center mb-6"
        >
          <Ionicons name="log-out-outline" size={24} color="#DC2626" />
          <Text className="ml-2 text-red-600 font-semibold text-base">Logout</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
