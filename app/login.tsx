import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import SocialButton from '@/components/SocialButton';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    if (login(phone, password)) {
      router.replace('/(tabs)');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-gray-100"
    >
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 items-center justify-center px-6 py-10">
          {/* Header */}
          <View className="w-full bg-gray-900 rounded-3xl py-8 mb-8">
            <Text className="text-center">
              <Text className="text-yellow-500 text-3xl font-bold">FLEXI</Text>
              <Text className="text-white text-3xl font-bold">VENT</Text>
            </Text>
          </View>

          {/* Form Card */}
          <View className="w-full bg-white rounded-3xl p-6 shadow-lg">
            <Text className="text-2xl font-bold text-gray-900 mb-2">LOGIN</Text>
            
            <Input
              label="Enter your mobile number"
              placeholder="+91 1712345678"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              showCheckmark={phone.length > 9}
            />

            <Input
              label="Enter your password"
              placeholder="************"
              value={password}
              onChangeText={setPassword}
              isPassword
            />

            <Pressable className="self-end mb-4">
              <Text className="text-gray-600">forgot password?</Text>
            </Pressable>

            <PrimaryButton label="Login" onPress={handleLogin} />

            <View className="flex-row items-center justify-center mt-4 mb-4">
              <Text className="text-gray-600">Don't have an account? </Text>
              <Pressable onPress={() => router.push('/register')}>
                <Text className="font-bold text-gray-900">Sign Up</Text>
              </Pressable>
            </View>

            <Text className="text-center text-gray-500 mb-4">or</Text>

            <SocialButton provider="google" />
            <SocialButton provider="apple" />

            <Text className="text-center text-gray-500 mt-4">or</Text>

            <Pressable onPress={() => router.replace('/(tabs)')}>
              <Text className="text-center text-gray-400 underline mt-2">
                Continue as Guest
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
