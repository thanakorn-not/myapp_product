import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'

const ProfileScreen = () => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">

        {/* Header */}
        <Text className="text-4xl font-bold text-gray-800 mb-2">Profile</Text>
        <Text className="text-lg text-gray-600 mb-6">Your account information</Text>

        {/* Profile Card */}
        <View className="bg-white rounded-2xl p-6 shadow items-center">

          {/* Profile Image */}
          <Image
            source={{
              uri: "https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-1/571207638_4576072955952757_4567447583400986861_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=1d2534&_nc_ohc=6MyeCtltVq4Q7kNvwF8fzA0&_nc_oc=AdkfJacmMmqqGIyBpm5PxDOS_xzwb2sU6Z3maw7yEfpXzmP7T3sRoEZmyLVMu5G0FUjhb8fBv82OT3ir0JeqdEAK&_nc_zt=24&_nc_ht=scontent.fbkk31-1.fna&_nc_gid=zGVBQKBwfDB2Bs4sI7azLQ&oh=00_Afj1N4AX-vHTDyjETDqdnf5v2ZXZmOf4Klan_ryXuBUt_Q&oe=692E121D", // เปลี่ยนเป็นรูปคุณได้เลย!
            }}
            className="w-28 h-28 rounded-full mb-4"
          />

          <Text className="text-2xl font-bold text-gray-800 mb-1">Thanakorn Ingkawara</Text>
          <Text className="text-gray-500 mb-4">Member since 2024</Text>

          {/* Info Section */}
          <View className="w-full mt-4">

            <View className="mb-4">
              <Text className="text-gray-500">Email</Text>
              <Text className="text-lg font-semibold text-gray-800">
                thanakorningkawara@gmail.com
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-gray-500">Phone Number</Text>
              <Text className="text-lg font-semibold text-gray-800">
                08X-XXX-XXXX
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-gray-500">Address</Text>
              <Text className="text-lg font-semibold text-gray-800">
                123/45 หมู่ 5 ต. อ. จ.นครปฐม 73210
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-gray-500">Gender</Text>
              <Text className="text-lg font-semibold text-gray-800">
                Male
              </Text>
            </View>

            <View className="mb-4">
              <Text className="text-gray-500">Birthday</Text>
              <Text className="text-lg font-semibold text-gray-800">
                19 November 2001
              </Text>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
