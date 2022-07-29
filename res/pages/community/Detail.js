import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert,Share,FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import {firebase_db} from "../../../firebaseConfig"
import Ionicons from '@expo/vector-icons/Ionicons'

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';



export default function DetailPage({navigation,route}) {

    const like = async () => {
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }// 나중에 스토어랑 게시물 좋아요 데이터를 like / [article | seed] 형식으로 변경 
	       firebase_db.ref('/like2/'+userUniqueId+'/'+ route.params.idx).set(route.params,function(error){
             console.log(error)
             Alert.alert("좋아요!")
         });
    }

    const share = () => {
        Share.share({
            message:`${route.params.title} \n\n ${route.params.body} `,
        });
    }
    
    return ( 
        <ScrollView style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, marginBottom: 4, paddingHorizontal: 12 }} >
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }} >
                       
                        <Image source={{uri: route.params.imgPath}} style={{ width: 42, height: 42, borderRadius: 21, marginRight: 4 }} />
                    
                        <View style={{ display: 'flex', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 14, fontWeight: '500' }} >
                                {route.params.writter}
                            </Text>
                        </View>

                    </View>
                </View>
                {/* 좋아요 */}
                <TouchableOpacity style={{width:28,height:28,margin:15}} onPress={()=>like()}>
                    <Ionicons name='heart-outline' size={28} style={{ marginRight: 2 }} />
              </TouchableOpacity>
                {/* 공유 */}
                 <TouchableOpacity style={{width:28,height:28}} onPress={()=>share()}>
                 <Ionicons name='ios-share-social' size={28} style={{ marginRight: 2 }} />
                 </TouchableOpacity>
            </View>


            <Image style={styles.image} source={{uri: route.params.img}}/>

            <View style={{ display: 'flex', paddingHorizontal: 12}} >
                <View style={{ display: 'flex', marginBottom: 8 }} >
                    <Text style={{ fontSize: 18, fontWeight: '700', color: "#2f2f2f" }}>{route.params.title}</Text>

             </View>
                

                <Text style={{ fontSize: 12, fontWeight: '500', color: '#2d2d2d', marginBottom: 8 }}>{route.params.body}</Text>
                
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16 }} >
                    <View  style={{ display: 'flex', flexDirection: 'row', marginRight: 4, alignItems: 'center' }} >
                      <Ionicons name='ios-eye' size={11} style={{ marginRight: 2 }} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>132</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                      <Ionicons name='heart' size={12} style={{ marginRight: 2 , color:"red"}} />
                      <Text style={{ fontSize: 10, fontWeight: '400', color: 'black' }}>10</Text>
                    </View>                
                </View>

               
            </View>
            
      

        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    image:{
        width: '100%',
        height: 260,
        marginBottom: 12
    },
    body:{
        fontSize:20,
        marginTop:10,
        color:"#000"
    },
    buttonGroup: {
        flexDirection:"row",
    },
    button:{
        width:90,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    buttonText:{
        color:'#000',
        textAlign:'center'
    }
})