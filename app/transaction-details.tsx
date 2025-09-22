import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TransactionDetails() {
  const { amount = "₹2,500", status = "Approved", time = "Yesterday, 4:15 PM", from = "XYZ Bank", to = "ABC Store" } = useLocalSearchParams();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <View className="flex-1 bg-gray-50 p-5">
      <Text className="text-3xl font-bold mb-6 text-center">Transaction Details</Text>

      <View className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-500 text-base font-medium">Amount</Text>
          <Text className="text-xl font-bold text-black">{amount}</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-500 text-base font-medium">Status</Text>
          <Text className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(status)}`}>
            {status}
          </Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-500 text-base font-medium">Time</Text>
          <Text className="text-base text-black">{time}</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-500 text-base font-medium">From</Text>
          <Text className="text-base text-black">{from}</Text>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-gray-500 text-base font-medium">To</Text>
          <Text className="text-base text-black">{to}</Text>
        </View>
      </View>
    </View>
  );
}
