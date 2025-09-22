import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { images } from "@/constants/images";

const settingsOptions = [
  "User Details",
  "Banking App Permissions",
  "Active Devices",
  "Geo Location and Tracking",
  "Change Password",
  "Notification Settings",
  "Privacy Policy",
  "Terms & Conditions",
  "Help & Support",
  "App Version",
  "Logout"
];

const Settings = () => {
  const router = useRouter();

  const handlePress = (option: string) => {
    if (option === "User Details") {
      router.push("/user-details");
    } else {
      console.log(`${option} pressed`);
    }
  };

  return (
    <View className="flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="px-5">
        <View className="items-center mb-6 mt-12">
          <Text className="text-3xl font-bold text-black mb-2 mt-10">Settings</Text>
        </View>
        {settingsOptions.map((option, idx) => (
          <TouchableOpacity
            key={idx}
            className="border-b border-gray-200 py-5"
            onPress={() => handlePress(option)}
          >
            <Text className="text-base text-black">{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Settings;
