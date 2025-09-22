import React, { useState } from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity, Modal } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [panicMessage, setPanicMessage] = useState("");

  const handlePress = (item) => {
    console.log(`${item.text} pressed!`);
    
    if (item.text === "Transaction Approval") {
      router.push({
        pathname: "/transaction-details",
        params: {
          amount: "₹2500",
          status: item.status,
          time: item.time,
          from: "XYZ Bank",
          to: "ABC Store"
        }
      });
    }
  };

  
  return (
    <View className="flex-1 bg-white">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >
        <View className="flex-row items-center justify-center mt-20 mb-2">
          <Image source={icons.main_logo} className="w-12 h-14 mr-3 " />
          <Text className="text-4xl font-bold text-purple-700">SAFE APP</Text>
        </View>
        <Text className="text-base text-gray-600 text-center mb-6">RBI / NPCI regulated</Text>
        <Text className="text-3xl font-bold text-black mb-4 text-left">Hi Aksh!</Text>

        {/* Security Status Section */}
        <View className="bg-[#F9FAFB] rounded-xl p-5 mt-4">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Feather name="shield" size={20} color="green" className="mr-2" />
              <Text className="text-lg font-semibold text-green-700">Security Status</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="bg-red-600 px-4 py-2 rounded-md"
            >
              <Text className="text-white font-semibold">PANIC</Text>
            </TouchableOpacity>
          </View>

          {/* 🔴 Panic Confirmation Modal */}
          <Modal
            transparent
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
              <View className="bg-white p-6 rounded-xl w-4/5">
                <Text className="text-lg font-semibold mb-4 text-gray-800">Are you sure about this?</Text>

                <View className="flex-row justify-end space-x-4">
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    className="bg-gray-200 px-4 py-2 rounded-md"
                  >
                    <Text className="text-gray-800 font-medium">Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      setPanicMessage("🚨 Reporting to authorities, transactions will be blocked...");
                      setTimeout(() => setPanicMessage(""), 4000); // message disappears after 4 seconds
                    }}
                    className="bg-red-600 px-4 py-2 rounded-md"
                  >
                    <Text className="text-white font-medium">Yes, I’m sure</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </Modal>


          <Text className="text-green-600 font-medium text-base mb-3">All systems secure</Text>
          <View className="flex-row justify-between mb-1">
            <Text className="text-gray-500 text-base">Last activity check</Text>
            <Text className="text-gray-900 text-base">Today, 9:15 AM</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500 text-base">Connected apps</Text>
            <Text className="text-gray-900 text-base">4 banking apps</Text>
          </View>
        </View>
        {panicMessage !== "" && (
          <View className="bg-red-100 p-4 mt-3 rounded-xl border border-red-300">
            <Text className="text-red-800 font-medium text-base">{panicMessage}</Text>
          </View>
        )}


        {/* Your Connected Apps Section */}
        <View className="mt-8">
          <Text className="text-xl font-semibold mb-4">Your Connected Apps</Text>
          <View className="flex-row justify-between">
            {['XYZ Bank', 'ABC Bank', 'PQR Bank', 'LMN Bank'].map((bank, index) => (
              <View key={index} className="items-center">
                <View className={`bg-${['blue', 'red', 'purple', 'indigo'][index]}-500 rounded-full px-5 py-6`}>
                  <Text className="text-white font-bold text-base">{['XYZ', 'ABC', 'PQR', 'LMN'][index]}</Text>
                </View>
                <Text className="mt-2 text-base">{bank}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Activities Section */}
        <View className="mt-10 mb-8">
          <Text className="text-xl font-semibold mb-4">Recent Activities</Text>

          {[
            { icon: <MaterialIcons name="payment" size={18} color="black" className="mr-2" />, text: "Transaction Approval", time: "Yesterday, 4:15 PM", status: "Approved" },
            { icon: <Feather name="check-circle" size={18} color="black" className="mr-2" />, text: "Login Verification", time: "Today, 8:30 AM", status: "Approved" },
            { icon: <MaterialIcons name="payment" size={18} color="black" className="mr-2" />, text: "Transaction Approval", time: "Yesterday, 4:15 PM", status: "Approved" },
            { icon: <FontAwesome name="mobile" size={25} color="black" className="mr-2" />, text: "New Device Login", time: "06 Jul, 10:20 AM", status: "Approved" },
            { icon: <Feather name="refresh-cw" size={20} color="black" className="mr-2" />, text: "Auto Debit Setup", time: "05 Jul, 11:00 AM", status: "Completed" },
            { icon: <MaterialIcons name="lock-open" size={20} color="black" className="mr-2" />, text: "PIN Reset", time: "03 Jul, 9:45 PM", status: "Pending" },
            { icon: <Feather name="bell" size={20} color="black" className="mr-2" />, text: "Alert Preference Change", time: "02 Jul, 3:30 PM", status: "Approved" }
          ].map((activity, idx) => (
            <TouchableOpacity key={idx} onPress={() => handlePress(activity)}>
              <View className="flex-row justify-between items-center mb-4">
                <View>
                  <View className="flex-row items-center">
                    {activity.icon}
                    <Text className="text-base font-semibold">{activity.text}</Text>
                  </View>
                  <Text className="text-gray-500 text-base">{activity.time}</Text>
                </View>
                <Text className={`text-${activity.status === 'Approved' ? 'green' : activity.status === 'Pending' ? 'yellow' : 'gray'}-600 font-semibold text-base`}>
                  {activity.status}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}
