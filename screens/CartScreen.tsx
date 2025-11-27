import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
        <View className='p-6'>
            <Text className='text-4xl font-bold text-gray-800 mb-2'>Your Cart</Text>
            <Text className='text-lg text-gray-600 mb-6'>Product your selected</Text>
            <View className='bg-white rounded-2xl p-6 items-center justify-center'>
                <Text className='text-6xl mb-4'>Cart</Text>
                <Text className='text-xl font-bold text-gray-800 mb-2'>Empty Cart</Text>
                <Text className='text-gray-600 text-center'>Empty Produuct in your cart{'\n'} Now Shopping</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default CartScreen

const styles = StyleSheet.create({})