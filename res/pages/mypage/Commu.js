import { View, Text, ScrollView, TouchableHighlight, Alert,StyleSheet } from 'react-native'
import React from 'react'

const Commu = () => {
  const onpress =()=>{ Alert.alert('click','click2')}
  return (
    <ScrollView style={{ padding: 12 }} >
     
     <TouchableHighlight onPress={()=>{alert('press')}}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  button:{
    width:60,
    height:40
  }

})

export default Commu