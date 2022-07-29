import React, { useEffect, useState } from "react";
import { View, TouchableOpacity,SafeAreaView,StyleSheet } from "react-native";
import { firebase_db } from "../../../firebaseConfig";



export default  function LoginPage({navigation,content}){

    const [users,setUsers] = useState([]);
    const [id,setId] = useState('');
    const [ready,setReady] = useState(true);

// 휴대폰 내의 고유 아이디를 불러오고 고유 아이디값을 키 값으로 회원 가입을 개인 고유 아이디로 대체 한다.( 구글 아이디 되기 전까지 임시로 사용 예정.)
    useEffect( async ()=>{
            let userUniqueId;
            if(isIOS){
            let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
                userUniqueId = iosId
            }else{
                userUniqueId = await Application.androidId
            } 
            setId(userUniqueId);
        
       
    },[])
// 데이터베이스에 키값이 있는지 확인 하는 작업.
    const isCheckedSignUp=(id)=>{
        firebase_db.ref('/users').once('value').then((snapshot) => {
            console.log("파이어베이스에서 데이터 가져왔습니다!!")
            let user = snapshot.val();
            setUsers(user)
            console.group(user.id)
          });     

          users.map((e,i)=>{if(id == e.id) return (
            <View></View>
            // 로그인 완료 ... 바로 메인으로 가기..
          )})
            // 로그인 작업 필요 로그인 후.. 메인 페이지 전송.
          return true;
    }


    let userUniqueId =id;
    console.log(userUniqueId);
    

    firebase_db.ref('/member/'+userUniqueId).set(route.params,function(error){
        console.log(error)
        Alert.alert("좋아요!")
    });

    return(
        <SafeAreaView style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#eee'}}>
            
            <Image source={{ uri: 'https://ifh.cc/g/mwXJm1.png', width: 200, height: 26 }}/>
            <TouchableOpacity
                style={{width:200, height:80, borderWidth:2,borderColor:'gray',borderRadius:20}}
                onPress={()=>{
                    isCheckedSignUp(id)
                }}>


            </TouchableOpacity>
        </SafeAreaView>
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


})