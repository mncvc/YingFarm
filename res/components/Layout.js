import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Layout = ({children}) => {
  return (
    <SafeAreaView>
      <View style={{ padding: 12, paddingBottom: 0, backgroundColor: 'white'}} >
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Layout