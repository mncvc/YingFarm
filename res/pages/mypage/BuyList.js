import { View, Text } from 'react-native'
import React from 'react'
import DetailPage from '../store/DetailPage'

const BuyList = () => {
  return (
    <View style={{ padding: 12, backgroundColor: 'white', height: 80, display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Text>구매 날짜: 22.07.20</Text>
        <Text>물품: 천도 복숭아</Text>
        <Text>가격: 30000원 / 3kg</Text>
        <Text>판매자: 김길동</Text>
    </View>
  )
}

export default BuyList