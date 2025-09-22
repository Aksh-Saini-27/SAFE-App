import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { images } from "@/constants/images";

const banks = [
  { name: 'ABC Bank', acc: '7979', color: 'bg-blue-500' },
  { name: 'XYZ Bank', acc: '6291', color: 'bg-red-500' },
  { name: 'PQR Bank', acc: '1234', color: 'bg-purple-500' },
  { name: 'LMN Bank', acc: '4321', color: 'bg-indigo-500' },
];

const Apps = () => {
  return (
    // <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Image source={images.bg} className="absolute w-full z-0" />
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
        >
          {/* Heading */}
          <View className="items-center mb-6 mt-12">
            <Text className="text-3xl font-bold text-black mb-6 mt-10">Connected Apps</Text>
          </View>

          {banks.map((bank, idx) => {
            const initials = bank.name.split(' ')[0];
            return (
              <View
                key={idx}
                className="flex-row items-center justify-between py-6 px-2 border-b border-gray-200"
              >
                <View className="flex-row items-center space-x-6">
                  <View className={`rounded-full px-5 py-6 items-center justify-center ${bank.color}`}>
                    <Text className="text-white font-bold text-base">{initials}</Text>
                  </View>
                  <View>
                    <Text className="text-base font-semibold text-black px-3">
                      {bank.name}
                    </Text>
                    <Text className="text-sm text-gray-600 px-3 mt-1">
                      A/c No - {bank.acc}
                    </Text>
                    <TouchableOpacity>
                    <Text className="text-blue-500 text-sm mt-2 px-3">Check Balance</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text className="text-lg text-gray-400">{'>'}</Text>
              </View>
            );
          })}


          <TouchableOpacity className="mt-6">
            <Text className="text-blue-500 text-base text-center">+ Add another Bank A/c</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    // </SafeAreaView>
  );
};

export default Apps;
