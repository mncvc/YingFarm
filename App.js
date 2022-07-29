/* eslint-disable */
import React, {useEffect, useReducer, useState} from 'react';
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './res/navigation/Navigator';

import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';

import {firebase_db} from "./firebaseConfig" // firebase 기능 
import { useFonts } from '@expo-google-fonts/inter'

import SplashScreen from './res/components/SplashScreen';

export const Dispatch = React.createContext(null);

export default function App() {

  console.disableYellowBox = true;

  // 아이디 조회

  const [id,setId] = useState('');
  const [users,setUsers] = useState([]);
  const [ready,setReady] = useState(true);


  useEffect( async ()=>{
    let userUniqueId;
    if(isIOS){
    let iosId = await Application.getIosIdForVendorAsync(); // 분기처리
        userUniqueId = iosId
    }else{
        userUniqueId = await Application.androidId
    } 
    setId(userUniqueId);

    setTimeout(()=>{
      firebase_db.ref('/users').once('value').then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!")
        let users = snapshot.val();
        setUsers(users);

       if(users && users.length >0){
        
       }
        setReady(false)
      });
  },3000)

},[])


  // 폰트 로딩
  let [fontsLoaded] = useFonts({
    '돋움': require('./res/assets/fonts/mg.ttf'),
  });
  // 이미지 로딩

  
 return ready ? <SplashScreen /> :  (
      <NavigationContainer>
        <StatusBar style="gray" />
        <Navigator/>
      </NavigationContainer>
 );
}













// expo install firebase 추가.
// firebaseConfig.js 생성 > fireBase 제공 코드 추가 
//
