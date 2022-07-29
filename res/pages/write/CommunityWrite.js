
import {Pressable,Text,StyleSheet, Image,SafeAreaView,TextInput, TouchableOpacity,View, TouchableWithoutFeedback, Keyboard, Button, Alert, DevSettings} from "react-native";
import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import Ionicons from '@expo/vector-icons/Ionicons'

import RNPickerSelect from 'react-native-picker-select';

import {firebase_db} from "../../../firebaseConfig"

import * as ImagePicker from 'expo-image-picker';

export default function CommunityWrite({ navigation, route }) {
  // 게시물 인덱스 번호
  const [state,setState] = useState(0);

  // 이미지 
  const [img,setImgUrl] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [image, setImage] = useState(null);

//  text input

  const [ title, setTitle ] = useState('');
  const [ body, setBody ] = useState('');
  const [ type, setType ] = useState('');
  const [article,setArticle] = useState([]);

  useEffect(()=>{

    setTimeout(()=>{    //1초 뒤에 실행되는 코드들이 담겨 있는 함수
    
      //헤더의 타이틀 변경
      firebase_db.ref('/index/articleIndex').once('value').then((snapshot) => {
        console.log("파이어베이스에서 데이터 가져왔습니다!!")
        let idx = snapshot.val();
        setState(idx+1)
        console.log(state)
      });
  },1000)
  },[]);

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
    // 날짜 / autoincrement / 로그인 > 회원정보
    setArticle(post)
  
     firebase_db.ref('/article_test/'+idx).set(article,function(error){
         console.log(error)
         Alert.alert("추가되었습니다.!")
     });
     
  }
  
  const addData = async () => {
    let date = new Date();
    date = date.getDate;
   
    let index = state;
    let id = state;

    // 게시물 정상 인덱스 추가 기능 추가 완료.
    let post = {
      "title":title,
      "body":body,
      "idx":id,
      "img":image,
      "type":type,
      "regdate":"22.22.22",
      "writter":"user1",
      "like":0
    }

  setArticle(post)
    console.log(post)

    firebase_db.ref('/index/articleIndex').set(state),
    firebase_db.ref(`/article/${id}`).set(post,function(error){
      console.log(error)
      Alert.alert('작성완료')
      navigation.navigate('CommunityHome');
  });

  }

  useEffect(() => {
    navigation.setOptions({
      title: '커뮤니티 글쓰기'
    })

  }, []);

  function onPress() {
    Alert.alert('', '글 작성이 완료되었습니다.'), 
      navigation.navigate('CommunityHome')
  }
  
    return(
  
  <>    
    <Layout>
        <View style={{ display: 'flex', flexDirection: 'row' }} >
          <TouchableOpacity  onPress={pickImage} style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: 120, height: 120, borderWidth: 1, borderRadius: 4, marginRight: 8 }} >
            <Ionicons name="camera-outline" size={48} color="#4d4d4d" />
            <Text style={{ fontSize:14, fontWeight: '500', color: '#4d4d4d' }} >사진업로드</Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 4 }} />}
        </View>


      <View style={styles.row}>
        <Text style={styles.text}>제목 :</Text>
        <TextInput style={styles.input} onChangeText={setTitle} />
      </View>
    
      <RNPickerSelect
            onValueChange={(value) => setType(value)}
            items={[
                { label: '자랑글', value: 'boast' },
                { label: '자유글', value: 'free' },
                { label: '질문방', value: 'ask' },
            ]}
            style={{borderWidth:2,borderColor:'black'}}
        />


      <View style={{ height: '100%' }} >
        <TextInput style={styles.input2} onChangeText={setBody} 
            placeholder="내용을 입력해주세요"/>
      </View>
    
  </Layout>
     <TouchableOpacity style={{ height: 40, width: 100 ,position: 'absolute', bottom: 0,right: 40, backgroundColor: '#FF7B00', display: 'flex', alignItems:"center", justifyContent: 'center', borderRadius: 8 }} onPress={() => addData() }>
      <Text style={{ color: 'white', fontWeight: '600' }} >추가하기</Text>
      </TouchableOpacity>
  </>

)};





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
  width:340,
  height: 260,
  borderTopWidth:0.5,
  borderColor:'#aaa'
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



// post 안에 값 정상 추가 확인 >> ToDo : 리얼 타임 데이터베이스에 추가하기 기능 추가 필요
/*
  1. 데이터베이스에 데이터 추가 기능 .(완료 22.07.28)
  2. select css 정리 
  3. ...

*/