import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const DetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-white">
        <Image
          className="w-full h-80"
          source={{ uri: product.image }}
          resizeMode="cover"
        />
      </View>

      <View className="p-6">
        <View className="bg-blue-100 rounded-full px-4 py-2 self-start mb-3">
          <Text className="text-blue-700 font-bold text-sm">
            {product.category}
          </Text>
        </View>

        <Text className="text-3xl font-bold text-gray-800 mb-3">
          {product.name}
        </Text>

        <Text className="text-4xl font-bold text-blue-600 mb-4">
          {product.price}
        </Text>

        <View className="bg-green-50 rounded-xl p-4 mb-6 border border-green-200">
          <View className="flex-row items-center">
            <Text className="text-2xl mr-2">✅</Text>
            <View>
              <Text className="text-green-700 font-bold text-base">
                พร้อมจำหน่าย
              </Text>
              <Text className="text-green-600 text-sm">
                คงเหลือ {product.stock} ชิ้น
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-200">
          <View className="flex-row items-center">
            <Text className="text-2xl mr-2">ℹ️</Text>
            <View>
              <Text className="text-blue-700 font-bold text-base">
                รายละเอียดสินค้า
              </Text>
              <Text className="text-blue-600 text-sm">
                {product.description}
              </Text>
            </View>
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-800 mb-3">
            คุณสมบัติเด่น
          </Text>
          <View className="bg-white rounded-xl p-4 border border-gray-200">
            {product.features.map((feature: string, index: number) => (
              <View key={index} className="flex-row items-center mb-3">
                <Text className="text-blue-600 text-lg mr-3">•</Text>
                <Text className="text-gray-700 text-base flex-1">
                  {feature}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="flex-row gap-3 mb-8">
          <TouchableOpacity
            className="flex-1 bg-blue-600 rounded-xl py-4 items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-white font-bold text-lg">
              🛒 เพิ่มในตะกร้า
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-200 rounded-xl px-6 py-4 items-center justify-center"
            activeOpacity={0.8}
          >
            <Text className="text-2xl">❤️</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-gray-100 rounded-xl py-3 items-center"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-gray-700 font-semibold text-base">
            กลับไปหน้าหลัก
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
