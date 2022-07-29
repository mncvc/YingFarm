
import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button,Alert} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import data from '../../../data.json';
import Ionicons from '@expo/vector-icons/Ionicons'


import {firebase_db} from "../../../firebaseConfig"

import * as ImagePicker from 'expo-image-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

export default function CommunityWrite({ navigation, route }) {
  // 이미지 
  const [img,setImgUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // 
  const [title, setTitle] =useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("");
  
  const [local, setLocal] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  //
  const [seed,setSeed] = useState([]);

  const [image, setImage] = useState(null);


  const UploadImg = () => {
  //권한 등록.
      const uploadImage = async () => {
          if(!status?.granted){
              const permission = await requestPermission();
              if(!permission.granted){
                  return null;
              }
          }
  // 이미지 업로드 기능.
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        }); // 갤러리 불러오기.
          if(result.cancelled){
              return null;// 이미지 업로드 취소한 경우.
          }
          setImgUrl(result.uri);
  
      };
      return (
       
          <SafeAreaView style={styles.imgBox}>
          <Pressable style={styles.uploadButton} onPress={uploadImage}>
          
              <Text style={styles.imgIcon}>이미지 업로드</Text>
          </Pressable>
          </SafeAreaView>
  
      );
  } 

    

  const addData = () =>{
    // pId구매자 아이디 , cId 판매자 아이디 
    
    
    let post = {
       
      "amount":"1kg",
      "body":"test",
      "idx":7,
      "imgPath":"data:image/jpeg;base64,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",
       "local":"남원",
      "price":10000,
      "review":[
        {
          "img": "",
          "like": null,
          "profile": "",
          "regdate": "",
          "reply": "",
          "scope": null,
          "writter": ""
        }
      ],
      "title":"test",
      "writter":"정민수"

    }
            setSeed(post); 
    
    
            firebase_db.ref('/seed/'+7).set(seed,function(error){
                console.log(error)
                Alert.alert("판매 상품이 등록되었습니다. !!")

                navigation.navigate('StoreNavigator', { screen: 'MainPage',params:{seed} })

            });
    
        }
     
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: '판매 글쓰기'
    })
  }, [])

    return(
      <>
      
    <Layout>
      
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <TouchableOpacity  onPress={pickImage} style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: 120, height: 120, borderWidth: 1, borderRadius: 4, marginRight: 8 }} >
            <Ionicons name="camera-outline" size={48} color="#4d4d4d" />
            <Text style={{ fontSize:14, fontWeight: '500', color: '#4d4d4d' }} >사진업로드</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: img }} style={{ width: 120, height: 120, borderRadius: 4 }} />}
        </View>


      <View style={styles.row}>
        <Text style={styles.text}>제목 :</Text>
        <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      </View>
    
     <View style={styles.row}>
      <Text style={styles.text}>가격 :</Text>
        <TextInput style={styles.purchase} onChangeText={setPrice} value={price} keyboardType="numeric"/><Text>   /   </Text>
        <TextInput style={styles.purchase} onChangeText={setAmount} value={amount} />
    </View> 

{/*  */}
<View style={styles.row}>
<Text style={styles.text}>거래방법 :</Text>
    <RadioButtonGroup 
      containerStyle={styles.radioGroup}
      selected={type}
      onSelected={(value) => setType(value)}
      radioBackground="green"
    > 
      <RadioButtonItem value="직거래" label="직거래" />
      <RadioButtonItem value="택배" label="택배" />

    </RadioButtonGroup>
  </View>

  <View style={styles.row}>
      <Text style={styles.text}>위치 :</Text>
      <TextInput style={styles.input} onChangeText={setLocal} value={local} />
    </View>

    <Text style={{ fontSize: 14, marginTop: 8 }}>내용</Text>
    <View style={styles.contentBox}>
    <TextInput style={styles.input2} onChangeText={setBody} value={body} 
        placeholder="내용을 입력해주세요"/> 
    </View>



    
  </Layout>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 0,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={()=>addData()}>
      <Text style={{ color: 'white', fontWeight: '600' }} >추가하기</Text>
      </TouchableOpacity>
  </>
)}


const styles = StyleSheet.create({
  container:{
    alignSelf:'center',
    marginLeft:10,
    marginRight:10
  },
  row:{
    flexDirection:'row',
    paddingTop:10,
  paddingBottom:5,
    alignItems:'center',
    borderBottomWidth: 1,
    borderColor:'#d4d4d4',
    marginTop: 4
  },
  imgBox:{
    width: 110,
    height: 110,
    borderWidth:1.5,
    borderRadius:5,
    borderColor:'#aaa',
    marginTop:10
  },
  uploadButton:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    color:'fff'

  },
  imgIcon:{
    textAlign:'center',
  },

  input: {
    width:'75%',
  },
  purchase:{
    width:100,
    padding:3,
    borderRadius:10,
    backgroundColor:'#d2d2d2'
  },

  input2: {
    width:'75%',
    height: 40,
    margin: 12,
    padding: 10,
  },
  desc:{
    fontSize:18,
    padding:5,
    borderBottomWidth:2,
    borderColor:'#aaa'

  },
  cardImage:{
    width:100,
    height:100
  },
 
text:{
  fontSize:14,
  fontWeight: '500',
  marginBottom: 4
},
contentBox:{
  width:'100%',
  height: '100%',
},
radioGroup:{
  display:'flex',
  width:'80%',
  alignSelf:'flex-end',
  justifyContent:'space-around',
  flexDirection:'row',
  
},
submit:{
  display:'flex',
  justifyContent:'center',
  alignSelf:'center',
  width:80,
  height:50,
  borderWidth:2,
  borderColor:'#ddd'
},
buttonText:{
  textAlign:'center'
}


});


/*
  1. 변수에 데이터(dictionary) 넣기
  2. 파이어베이스에 데이터 추가하기

*/