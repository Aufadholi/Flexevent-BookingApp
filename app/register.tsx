import Input from '@/components/Input';
import PrimaryButton from '@/components/PrimaryButton';
import SocialButton from '@/components/SocialButton';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

export default function RegisterScreen() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { register } = useAuth();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (register(phone, email, password)) {
      router.replace('/(tabs)');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-gray-100"
    >
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingVertical: 40 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6">
          <Text className="text-3xl font-bold text-center mb-8">REGISTER</Text>

          <Input
            label="Enter your mobile number"
            placeholder="+91 1712345678"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            showCheckmark={phone.length > 9}
          />

          <Input
            label="Enter your email"
            placeholder="abc12@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input
            label="Enter your password"
            placeholder="************"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <Input
            label="Re-Enter your password"
            placeholder="************"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
          />

          <View className="my-4">
            <PrimaryButton label="Sign Up" onPress={handleRegister} />
          </View>

          <View className="flex-row items-center justify-center mb-4">
            <Text className="text-gray-600">Don't have an account? </Text>
            <Pressable onPress={() => router.back()}>
              <Text className="font-bold text-gray-900">Sign in</Text>
            </Pressable>
          </View>

          <Text className="text-center text-gray-500 mb-4">or</Text>

          <SocialButton provider="google" />
          <SocialButton provider="apple" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
