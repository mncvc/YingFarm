import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout'
import { ScrollView } from 'react-native-gesture-handler'
import ChatCard from '../../components/ChatCard'

const Chat = ({ navigation }) => {
  return (
    <ScrollView >
      <Layout>
        <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} >
          <ChatCard />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')} >
          <ChatCard />
        </TouchableOpacity>

      </Layout>
    </ScrollView>
  )
}

export default Chat