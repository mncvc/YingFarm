import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'


export default function FreeCard({content,navigation}){
    return(
        <TouchableOpacity style={{ display: 'flex', height: 108, width: '100%', paddingRight: 4, padding:12, paddingLeft: 0, borderBottomWidth: 1, borderColor: '#e4e4e4' }} onPress={()=>{navigation.navigate('Detail',content)}}>
          <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >
            <View style={{ display: 'flex', width: '80%' }} >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 4 }} >
                  <View style={{ width: 20, backgroundColor: 'wheat', height: 20, borderRadius: '50%', marginRight: 4}} ></View>
                  <Text style={{ fontSize: 10, fontWeight: '500' }} >글쓴이</Text>
              </View>

              <View>
                  <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 4 }}  numberOfLines={1} >{content.title}</Text>
                  <Text style={{ fontSize: 10, fontWeight: '500', marginBottom: 4 }} numberOfLines={2} >{content.body}</Text>
              </View>


            </View>

            <View style={{ display: 'flex', width: '20%' }} >
              <Image style={{ width: 80, height: 80 }} source={{uri:content.img}} />
            </View> 
          </View>

        
        </TouchableOpacity>
    )
}


