
import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import data from '../../../data.json';
import Ionicons from '@expo/vector-icons/Ionicons'


import {firebase_db} from "../../../firebaseConfig"

import * as ImagePicker from 'expo-image-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function ChatWrite({ navigation, route }) {
 return(
 <Layout>
  </Layout>
)}
// 글쓰기버튼 클릭 채팅 친구 목록 나열 > 친구 클릭 > if  이미 대화방이 있으면 사용중인 대화방 open > else 없으면 , 새로운 대화방 오픈 
// 필요 정보 상대방과 나한테 
/*
  대화 사용자1 : 
              대화 내용 : 
              날짜 : 
              상대방 : 사용자 2
  
  대화 사용자2 : 
              대화 내용 : 
              날짜 : 
              상대방 : 사용자 1
    
              시간에 의거하여 나열 나의 문자는 오른쪽 상대방 문자는 왼쪽. ??? 
              
*/

const styles = StyleSheet.create({
  

});


