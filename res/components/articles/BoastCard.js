import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
export default function BoastCard({content,navigation, width}){
    return(
        <TouchableOpacity style={{ display: 'flex', marginRight: 16, marginTop: 12, width, maxWidth: 240 }} onPress={()=>{navigation.navigate('Detail',content)}}>

          <View style={{ display: 'flex' }} >
            <Image style={{ width, maxWidth: 240, height: 200, maxHeight: 300, marginBottom: 8, borderRadius: 8 }} source={{uri:content.img}} />

              <Text style={{ fontSize: 12, fontWeight: '700', marginBottom: 4 }}  numberOfLines={1} >{content.title}</Text>
              <Text style={{ fontSize: 10, fontWeight: '500', marginBottom: 4 }} numberOfLines={2} >{content.body}</Text>

              <Text style={{ fontSize: 10, fontWeight: '500', marginBottom: 4, color: '#4d4d4d' }} numberOfLines={2} >조회 수, 좋아요 수</Text>

          </View>

        </TouchableOpacity>
    )
}


