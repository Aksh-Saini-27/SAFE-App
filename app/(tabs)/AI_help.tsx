import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { images } from "@/constants/images";
import { Feather } from "@expo/vector-icons";

const AI_helper = () => {
  const [inputText, setInputText] = useState("");

  return (
    <View className="flex-1 bg-white">
      <Image source={images.bg} className="absolute w-full z-0" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
        keyboardVerticalOffset={80}
      >
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          //contentContainerStyle={{ paddingTop: 100, paddingBottom: 100 }}
        >
          {/* Heading */}
          <View className="items-center mb-6 mt-12">
            <Text className="text-3xl font-bold text-black mb-6 mt-10">AI Helper</Text>
          </View>

          {/* Messages (empty for now) */}
          <View className="space-y-4 mt-12">
            {/* Example of message bubble (replace later) */}
            <View className="self-start bg-gray-100 p-3 rounded-lg max-w-[80%] mb-2">
              <Text className="text-gray-800">Hi there! How can I help you today?</Text>
            </View>

            <View className="self-end bg-purple-200 p-3 rounded-lg max-w-[80%] mb-2">
              <Text className="text-gray-800">How can I check my balance?</Text>
            </View>
          </View>
        </ScrollView>

        {/* Chat Input */}
        <View className="flex-row items-center px-5 pb-8 pt-5 bg-white border-t border-gray-200">
          <TextInput
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-base text-gray-800"
            placeholder="Type a message..."
            placeholderTextColor="#6B7280" 
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity className="ml-3 p-2 bg-purple-600 rounded-full">
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default AI_helper
