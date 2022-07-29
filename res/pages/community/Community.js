import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import axios from "axios";

import Loading from '../../components/Loading';
import Banner from '../../components/Banner';
import {firebase_db} from "../../../firebaseConfig" // firebase 기능 


import FreeCard from '../../components/articles/FreeCard';
import AskCard from '../../components/articles/AskCard';
import BoastCard from '../../components/articles/BoastCard';

export default function MainPage({navigation,route}) {
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
 

  const category = (cate) => {
    if(cate == ""){
        setCateState(state)
    }else{
        setCateState(state.filter((d)=>{
            return d.category == cate
        }))
    }
}


  return ready ? <Loading/> :  (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ fontSize: 10, fontWeight: '500', color: '#4d4d4d', lineHeight: 10, marginBottom: -8, marginTop: 8, marginLeft: 12 }} >[ad] 광고</Text>

        <View style={styles.banner}><Banner/></View>

    <View style={styles.topPicContainer}>
      <Text style={styles.topPicTitle}>실시간 인기글</Text>
        
      <View style={styles.topPicItem} horizontal indicatorStyle={"white"}>
          <View style={styles.topPicHeadder}>
            <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Boast')} >
              <Text style={styles.topPic}>자랑 팜</Text>
              <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
            
          <ScrollView horizontal indicatorStyle={"white"}>
            {
              state.map((content,i)=>{
                return (<BoastCard content={content} key={i} navigation={navigation}/>)
              })
            }
          </ScrollView>            
      </View>

            {/*TODO:  인기글 3개 나열  */}
        <View style={styles.topPicItem}>
          <View style={styles.topPicHeadder}>
            <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Ask')} >
              <Text style={styles.topPic}>질문 팜</Text>
              <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                {'>'}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView indicatorStyle={"white"}>
            {
               state.map((content,i)=>{
                if (i >= 3) return
                else return <AskCard content={content} key={i} navigation={navigation}/>
              })
            }
          </ScrollView>
            
            
        </View>

        <View style={styles.topPicItem} horizontal indicatorStyle={"white"}>
          <View style={styles.topPicHeadder}>
              <TouchableOpacity style={styles.topPicButton} onPress={() => navigation.navigate('Free')} >
                <Text style={styles.topPic}>자유 팜</Text>
                <Text style={{ color: '#888', fontSize: 20, fontWeight: '500', lineHeight: 20 }}>
                  {'>'}
                </Text>
              </TouchableOpacity>
          </View>
          <ScrollView indicatorStyle={"white"}>
            {
               state.map((content,i)=>{
                if (i >= 3) return
                if (i < 3) return <FreeCard content={content} key={i} navigation={navigation}/>
              })
            }
          </ScrollView>
            
        </View>
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
    borderBottomColor:'#a4a4a4',
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