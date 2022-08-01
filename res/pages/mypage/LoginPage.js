import React, { useEffect, useState } from "react";
import { View, TouchableOpacity,SafeAreaView,StyleSheet, TextInput, Text } from "react-native";
import { firebase_db } from "../../../firebaseConfig";

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

export default  function LoginPage({navigation,content}){

    const [state,setState] = useState(true);
    const [login,setLogin] = useState({});
    const [Id,setId] = useState("");
    
    const isLogin = () =>{
        if(login != null){
            return true;
        }else return false;

    }

    useEffect(()=>{
        // 리덕스를 통해 로그인 상태 데이터 넣기 

        setState({isLogin});

    },[]);    


    return(


        <View style={styles.contain}>
            <View style={styles.wrap}>
                <TextInput style={{backgroundColor:'green'}} value={Id} placeholder='ID를 입력해주세요' onChangeText={(text)=>{setId(text)}}></TextInput>
            </View>
            <TouchableOpacity style={{width:180,height:30,backgroundColor:'orange'}} onpress={null}>
                <Text style={{textAlign:'center',lineHeight:'28'}}>로그인</Text>
                </TouchableOpacity>
        </View>


)
 
}



const styles = StyleSheet.create({
    title:{
        width:200,
        height:80,
        fontSize:20,
        fontWeight:'400',
        color:'green'
    },
    contain:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ddd',
        display:'flex',
        alignItems:'center'
    },
    wrap:{
        width:200,
        height:300,
        marginTop:60,
        borderWidth:2,
        borderColor:'#ddd',
        borderRadius:10,
        backgroundColor:'#fff'
    }


})

// db 아이디 비번 

// 로그인 상태 체크  >> 
