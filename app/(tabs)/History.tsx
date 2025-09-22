import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { images } from "@/constants/images";

const historyData = [
  { icon: <Feather name="check-circle" size={18} color="green" />, text: "Login Verification", time: "Today, 10:45 AM" },
  { icon: <Feather name="send" size={18} color="blue" />, text: "Money Sent to ABC Bank", time: "Today, 9:30 AM" },
  { icon: <Feather name="eye" size={18} color="purple" />, text: "Balance Checked", time: "Yesterday, 6:12 PM" },
  { icon: <Feather name="plus-circle" size={18} color="orange" />, text: "Bank A/c Added", time: "Yesterday, 4:00 PM" },
  { icon: <Feather name="log-out" size={18} color="red" />, text: "Logged Out", time: "April 17, 11:23 PM" },
];

const History = () => {
  const handleItemPress = (item: { icon: JSX.Element; text: string; time: string }) => {
    console.log(`Item pressed: ${item.text}`);
    // Handle item press (e.g., navigate to a detailed view or show a modal)
  };

  return (
    // <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Image source={images.bg} className="absolute w-full z-0" />
        <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
          <View className="items-center mb-6 mt-12">
            <Text className="text-3xl font-bold text-black mb-2 mt-10">History</Text>
          </View>

          {historyData.map((item, idx) => (
            <TouchableOpacity key={idx} onPress={() => handleItemPress(item)}>
              <View className="border-b border-gray-200 pb-4 mb-4 mt-4">
                <View className="flex-row items-start">
                  <View className="mr-4 mt-1">{item.icon}</View>
                  <View>
                    <Text className="text-l font-semibold text-black">{item.text}</Text>
                    <Text className="text-m text-gray-500">{item.time}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    //</SafeAreaView>
  );
};

export default History;
