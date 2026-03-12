import { Pressable, Text, View } from "react-native";

type Props = {
    label: string;
}

export default function Button ({ label}: Props){
    return (
        <View className="w-[320px] h-[68px] mx-auto items-center justify-center p-3">
            <Pressable className="w-full h-full bg-blue-500 rounded-full items-center justify-center">
                <Text className="text-white font-bold">{label}</Text>
            </Pressable>
        </View>
    );
}