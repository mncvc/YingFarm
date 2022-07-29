import React,{useState,useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import AskCard from '../components/articles/AskCard'
import BoastCard from '../components/articles/BoastCard'
import FreeCard from '../components/articles/FreeCard'

const [state,setState] = useState([])
const [cate,setCate] = useState([])

const ArticleCate = 
[
'free','boast','ask'
]

const ArticleClassify = ({route}) => {
 
    
useEffect(()=>{
    setState(route.params)


    const category = (cate) => {
        if(cate == "전체보기"){
            setCateState(state)
        }else{
            setCateState(state.filter((d)=>{
                return d.category == cate
            }))
        }
    }
     

},[])
 
 
    switch (cate) {
      case ArticleCate[0]:
    
        return (
            <FlatList 
            data={cate}
            numColumns={2}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => <FreeCard content={item} width={(containerWidth - 12) / 2} />}
            />  
            
        )
      case ArticleCate[1]:
        return (
            <FlatList 
            data={cate}
            numColumns={2}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => <BoastCard content={item} width={(containerWidth - 12) / 2} />}
            />  
            
        )
      case ArticleCate[2]:
        return (
            <FlatList 
            data={cate}
            numColumns={2}
            onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
            renderItem={({item}) => <AskCard content={item} width={(containerWidth - 12) / 2} />}
            />  
            
        )
      default:
        return (
          <CommunityWrite navigation={navigation} />
        )
    }
  }

export default ArticleClassify


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }






})