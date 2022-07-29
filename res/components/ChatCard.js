import { View, Text } from 'react-native'
import React from 'react'

const ChatCard = () => {
  return (
    <View style={{ display: 'flex', width: '100%', height: 80, marginBottom: 8 }} >
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 8 }} >
        <View style={{ height: 32, width: 32, backgroundColor: 'wheat', borderRadius: '50%', marginRight: 4 }} />
        <Text style={{ fontSize: 12, fontWeight: '400', color: '#2d2d2d' }} >닉네임</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
      <Text  >10000원에 가능한가요?</Text>
      <Text style={{ fontSize: 12, color: '#4d4d4d' }} >22.07.20</Text>
      </View>
    </View>
  )
}

export default ChatCard