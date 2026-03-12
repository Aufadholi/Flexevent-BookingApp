import CategoryTab from '@/components/CategoryTab';
import DealCard from '@/components/DealCard';
import SearchBar from '@/components/SearchBar';
import VenueCard from '@/components/VenueCard';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

const categories = ['All', 'Hotel', 'Restaurant', 'Ballroom'];

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-gray-900 px-4 pt-12 pb-4">
        <View className="flex-row items-center justify-between mb-4">
          <Text>
            <Text className="text-yellow-500 text-2xl font-bold">FLEXI</Text>
            <Text className="text-white text-2xl font-bold">VENT</Text>
          </Text>
          <Ionicons name="notifications" size={24} color="#F59E0B" />
        </View>
        <SearchBar />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Category Tabs */}
        <View className="px-4 mt-4">
          <Text className="text-base font-semibold mb-3">Recommended for you</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="mb-4"
          >
            {categories.map((category) => (
              <CategoryTab
                key={category}
                label={category}
                isActive={activeCategory === category}
                onPress={() => setActiveCategory(category)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Special Deals */}
        <View className="px-4 mb-4">
          <Text className="text-base font-semibold mb-3">Special Deals</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DealCard
              title="Dapatkan Diskon Hingga 50%"
              backgroundColor="#DC2626"
              image={require('@/assets/images/react-logo.png')}
            />
            <DealCard
              title="Up to 20% off"
              subtitle="Travel like Anya!"
              backgroundColor="#2563EB"
              image={require('@/assets/images/react-logo.png')}
            />
            <DealCard
              title="Grab all your DEALS here!"
              backgroundColor="#9333EA"
              image={require('@/assets/images/react-logo.png')}
            />
          </ScrollView>
        </View>

        {/* Our Best Offer */}
        <View className="mb-6">
          <View className="px-4 flex-row items-center justify-between mb-3">
            <Text className="text-base font-semibold">Our Best Offer</Text>
            <Pressable>
              <Text className="text-blue-600 font-medium">See All</Text>
            </Pressable>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
          >
            <VenueCard
              image={require('@/assets/images/background-01.png')}
              name="House Of Yuen"
              location="Jakarta Pusat, Jakarta"
              rating={5}
              reviews={3433}
              price="Rp.10.050.000/event"
            />
            <VenueCard
              image={require('@/assets/images/background-01.png')}
              name="Indonesia Convention"
              location="Jakarta Pusat, Jakarta"
              rating={5}
              reviews={48027}
              price="Rp.17.000.000/event"
            />
            <VenueCard
              image={require('@/assets/images/background-01.png')}
              name="Grand Ballroom"
              location="Jakarta Selatan, Jakarta"
              rating={4.5}
              reviews={2156}
              price="Rp.12.500.000/event"
            />
            <VenueCard
              image={require('@/assets/images/background-01.png')}
              name="Royal Elegance Hall"
              location="Jakarta Barat, Jakarta"
              rating={4.8}
              reviews={5892}
              price="Rp.15.750.000/event"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
