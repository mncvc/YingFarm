import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
import data from '../../../data.json'
export default function AskCard({content,navigation}){

  

    return(
        <TouchableOpacity style={{ display: 'flex', height: 100, width: '100%', paddingRight: 4, padding:12, paddingLeft: 0, borderBottomWidth: 1, borderColor: '#e4e4e4' }} onPress={()=>{navigation.navigate('Detail',content)}}>
         
                {/* 
               
                <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                    <Text style={styles.cardBody} numberOfLines={3}>{content.body}</Text>
                </View>
            */}

            <View style={{ display: 'flex', flexDirection: 'row' }} >
              <Image style={{ width: 80, height: 80, borderRadius: 4, marginRight: 8 }} source={{uri:content.img}} />

              <View style={{ width: '70%', display: 'flex', justifyContent: 'center' }} >
                  <Text style={{ fontSize: 14, fontWeight: '700', marginBottom: 8 }}  numberOfLines={1} >{content.title}</Text>
                  <Text style={{ fontSize: 10, fontWeight: '500' }} numberOfLines={2} >{content.body}</Text>
              </View>
            </View>

        </TouchableOpacity>
    )
}
