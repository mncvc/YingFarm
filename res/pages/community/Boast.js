import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, FlatList} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Loading from '../../components/Loading';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 

import BoastCard from '../../components/articles/BoastCard';

const WIDTH = Dimensions.get('window').width

export default function Ask({navigation,route}) {
  const [containerWidth, setContainerWidth] = useState(0);

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
    return f.type == "boast"
  })


  return ready ? <Loading/> :  (
        <View style={{ padding: 12 }} >

          <FlatList 
            data={cate}
            numColumns={2}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => <BoastCard content={item} width={(containerWidth - 12) / 2}  navigation={navigation} />}
            />          
        
        </View>
  )
}
