import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Always start with login screen
    router.replace('/login');
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <ActivityIndicator size="large" color="#6366F1" />
    </View>
  );
}
