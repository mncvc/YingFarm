import React, { useEffect, useState } from "react";
import { View, TouchableOpacity,SafeAreaView,StyleSheet, TextInput, Text, Alert } from "react-native";
import { firebase_db } from "../../../firebaseConfig";

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

export default  function LoginPage({navigation,content}){

    const [state,setState] = useState(true);
    const [login,setLogin] = useState({});
    const [Id,setId] = useState("");
    const [pwd,setPwd] = useState("");

    
    const isLogin = () =>{
        if(login != null){
            return true;
        }else return false;

    }

    useEffect(()=>{
        // 리덕스를 통해 로그인 상태 데이터 넣기 

        setState({isLogin});

    },[]);    

    const doLogin = ()=>{
        // 아이디 비밀번호 체크하기
        firebase_db.ref('/users').once('value').then((snapshot) => {
           let users = snapshot.val();
               console.log(users);
               
           let user = users.filter((e)=>{
            return e.id == Id
        })
        
 

           if(user.id == Id){
            if(user.pwd == pwd){
                setLogin({
                    "id":Id
                })
                setState(false); // 로그인 상태 확인.
                Alert.alert("로긍니", `${user.id}님 환영합니다.`)
            }else{
                console.log("비밀번호가 틀렸습니다.");
            }
    
        }else{
            console.log('존재하지 않는 아이디 입니다.')
        }
    
    
        });

}


    return(


        <View style={styles.contain}>
            <View style={styles.wrap}>
            <TextInput style={styles.loginText} placeholder='ID를 입력해주세요' onChangeText={(i)=>{setId(i)}}></TextInput>

            <TextInput style={styles.loginText} placeholder='PW를 입력해주세요' onChangeText={(p)=>{setPwd(p)}}></TextInput>
            </View>
            <TouchableOpacity style={{width:180,height:30,backgroundColor:'orange'}} onpress={doLogin()}>
                <Text style={{textAlign:'center',lineHeight:28}}>로그인</Text>
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
    },
    loginText:{
        width:'60%',
        padding:2,
        borderWidth:2,
        borderColor:'darkgray',
        borderRadius:10

    }


})

// db 아이디 비번 

// 로그인 상태 체크  >> 
