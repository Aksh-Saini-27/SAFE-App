import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { images } from "@/constants/images";

const userData = {
  name: "Aksh Saini",
  email: "aksh@example.com",
  phone: "+91 98765 43210",
  address: "Ramprastha, Ghaziabad, India",
  dob: "10 July 2003",
  aadhar: "XXXX XXXX 9012",
};

const UserDetails = () => {
  return (
    <View className="flex-1 bg-white">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="px-5 pt-20">
        {/* Heading */}
        <View className="items-center mb-6">
          <Text className="text-4xl font-bold text-black">Your Profile</Text>
        </View>

        {/* Profile Card */}
        <View className="bg-white rounded-2xl shadow-lg p-6 mb-10 space-y-6">
          {/* Profile Image */}
          <View className="items-center">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=12" }}
              className="w-28 h-28 rounded-full mb-3"
            />
            <Text className="text-2xl font-semibold text-black">{userData.name}</Text>
            <Text className="text-lg text-gray-600">{userData.email}</Text>
          </View>

          {/* Divider */}
          <View className="border-t border-gray-200" />

          {/* Detail Rows */}
          <DetailRow label="Phone" value={userData.phone} />
          <DetailRow label="Address" value={userData.address} />
          <DetailRow label="Date of Birth" value={userData.dob} />
          <DetailRow label="Aadhar Number" value={userData.aadhar} />

          {/* Divider */}
    
        
        </View>
      </ScrollView>
    </View>
  );
};

const DetailRow = ({ label, value }: { label: string, value: string }) => (
  <View className="flex-row justify-between items-start mb-3">
    <Text className="text-lg text-gray-600 font-medium w-[40%]">{label}</Text>
    <Text className="text-lg text-black w-[60%] text-right">{value}</Text>
  </View>
);

export default UserDetails;
