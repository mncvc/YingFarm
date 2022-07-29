import React,{useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import LikeCard from '../../components/stores/LikeCard'
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../../../firebaseConfig"


export default function LikePage({navigation,route}){
    
    const [seed, setSeed] = useState([])
    const [cate,setCate] = useState([])
    const [ready,setReady] = useState(true)

    useEffect(()=>{
        navigation.setOptions({
            title:'좋아요'
        })
        getLike()
    },[])

    const getLike = async () => {
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync();
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }

        console.log(userUniqueId)
        firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot) => {
            let seed = snapshot.val();
            
            
            
            if(seed && seed.length > 0){  
                setSeed(seed);
                setReady(false)
            }

         
        })
    }



    return (
        <ScrollView style={styles.container}>
        {
            seed.map((content,i)=>{
                return(<LikeCard key={i} content={content} navigation={navigation}/>)
            })
        }
     </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})