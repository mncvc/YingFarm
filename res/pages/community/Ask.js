import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Loading from '../../components/Loading';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 

import AskCard from '../../components/articles/AskCard';

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
    return f.type == "ask"
  })

  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      


            {/*TODO:  인기글 3개 나열  */}
        <View style={styles.topPicItem}>
        
          <ScrollView indicatorStyle={"white"}>
            {
               cate.map((content,i)=>{
                return (<AskCard content={content} key={i} navigation={navigation}/>)
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
  banner:{
    width:'90%',
    height:200,
    marginTop:16,
    alignSelf:"center"
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop:50,
    marginLeft:20
  },
weather:{
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    width:'90%',
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"
  },
 
  topPicContainer:{
    backgroundColor:'#f2f2f2',
    marginTop:10,
    shadowColor:'#f2f2f2',
    paddingBottom: 8
  },
 
  topPicTitle:{
    fontSize:16,
    paddingTop:14,
    paddingLeft:16,
    fontWeight: '600'
  },

  topPicItem: {
    marginTop:8,
    padding: 12,
    backgroundColor:'#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginLeft: 8
  },
  topPicHeadder:{
    flex:1,
    flexDirection:'row',
    height: 36,
    borderBottomWidth:1,
    borderBottomColor:'#d2d2d2',
  },


  topPic:{
    fontSize: 14,
    fontWeight: '500',
    color: '#4d4d4d'
  },

  topPicButton:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 8,
  }


});