import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Loading from '../../components/Loading';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 

import FreeCard from '../../components/articles/FreeCard';

export default function Ask({navigation,route}) {
  const [state,setState] = useState([])
  const [cateState,setCateState] = useState([])
  const [ready,setReady] = useState(true) // 데이터 받아 오기전까지 로딩 페이지.
  
  useEffect(()=>{
    setTimeout(()=>{
      firebase_db.ref('/article').once('value').then((snapshot) => {
        let article = snapshot.val();
        
        setState(article)
        setCateState(article)
        setReady(false)
      });
  },1000)
 
  },[])
 
  let cate = state.filter((f)=>{
    return f.type == "free"
  })

  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      
        <View style={styles.topPicItem}>
        
          <ScrollView indicatorStyle={"white"}>
            {
               cate.map((content,i)=>{
                return (<FreeCard content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>
        </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    backgroundColor: '#fff',
  },
  topPicItem: {
    padding: 12,
    backgroundColor:'#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 8
  },
  middleBar:{
    width:'100%',
    height:60
  }


});