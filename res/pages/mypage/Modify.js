
import { View, Text, TouchableOpacity,TextInput,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Ionicons from '@expo/vector-icons/Ionicons'
// 이름을 입력 받아와 회원 정보 수정 . >>
const Mypage = ({ navigation, route }) => {

  const [profile,setProfile] = useState()
  
  const [img,setImg] = useState('')
  const [name,setName] = useState('')
  const [local,setLocal] = useState('')

  const onClick = () => {
    
    let copy = profile;
    copy.name = name;
    copy.local = local;
    copy.img = img;

    setProfile(copy)

    navigation.navigate('MypageNavigator', { screen: 'Mypage',params:{profile}})
  }

  useEffect(() => {
    setProfile(route)
    setImg(route.img)
    setName(route.name)
    setLocal(route.local)

  }, [])
  // 마이페이지에서 profile 데이터 받아오기 .

  return (
    
    <Layout>

      <View style={{ display: 'flex', flexDirection: 'rcolumn', alignItems: 'left', marginTop: 12, marginBottom: 20 }} >
        <View style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} >
          <Image style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} source={{uri:route.img}}/>
        </View>
        
      </View>

      <View style={{ display:'flex', flexDirection:'row'}}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#505150', marginBottom: 4,paddingRight:20 }} >이름  :</Text>
          <TextInput onChangeText={text => setName(text)} value={route}></TextInput>
        </View>
      <View style={{ display:'flex', flexDirection:'row',marginTop:10,marginBottom:20}}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#505150', marginBottom: 4,paddingRight:20 }} >지역  :</Text>
          <TextInput style={{width:200,height:'100%'}} onChangeText={text => setLocal(text)} ></TextInput>
        </View>

        <TouchableOpacity  onPress={() => onclick()} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8f8f8f', height: 44, borderRadius: 4, marginBottom: 16 }} >
        <Text style={{ color: '#8f8f8f', fontWeight: '500' }} >프로필 수정</Text>
      </TouchableOpacity>

    </Layout>
  )
}

export default Mypage
