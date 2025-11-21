import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { products } from '../data/products';

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">

        {/* Header */}
        <Text className="text-4xl font-extrabold text-gray-900 mb-1">
          ร้านค้า
        </Text>
        <Text className="text-lg text-gray-500 mb-4">
          เลือกดูสินค้าที่สนใจ
        </Text>

        {/* Recommended Box */}
        <View className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl p-5 shadow-sm border border-blue-300 mb-6">
          <Text className="text-blue-800 font-bold text-xl">
            ⭐ สินค้าแนะนำประจำวันนี้
          </Text>
          <Text className="text-blue-700 mt-1 text-sm">
            คัดมาให้แล้วสำหรับคุณ
          </Text>
        </View>

        {/* Product Grid */}
        <View className="flex-row flex-wrap justify-between">
          {products.map((p) => (
            <TouchableOpacity
              key={p.id}
              className="w-[48%] bg-white rounded-2xl mb-5 overflow-hidden shadow-lg"
              onPress={() => navigation.navigate('Detail', { product: p })}
            >

              {/* Image */}
              <View className="bg-gray-200 h-40 justify-center items-center">
                <Image
                  source={{ uri: p.image }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>

              {/* Product Content */}
              <View className="p-4">

                {/* Category */}
                <View className="mb-1">
                  <Text className="text-xs text-blue-600 font-semibold">
                    {p.category}
                  </Text>
                </View>

                {/* Name */}
                <Text className="text-base text-gray-900 font-bold leading-tight">
                  {p.name}
                </Text>

                {/* Price */}
                <Text className="text-xl text-blue-600 font-extrabold mt-1 mb-3">
                  ฿{p.price.toLocaleString()}
                </Text>

                {/* Stock */}
                <View className="flex-row items-center">
                  <View className="bg-green-100 rounded-full px-3 py-1 shadow-sm">
                    <Text className="text-xs text-green-700 font-semibold">
                      คงเหลือ {p.stock} ชิ้น
                    </Text>
                  </View>
                </View>

              </View>
            </TouchableOpacity>
          ))}
        </View>

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
