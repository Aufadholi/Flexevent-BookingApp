import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
    return (
        <View className="flex-1 items-center justify-center">
            <Text className="text-2xl font-bold">Page Not Found</Text>
            <Link href="/" className="mt-4 text-blue-500 bg-white px-4 py-2 rounded-full">
                Go to Home Page
            </Link>
        </View>
    );
}