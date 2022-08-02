import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Layout from '../../components/Layout'
import Ionicons from '@expo/vector-icons/Ionicons'

const Mypage = ({ navigation, content }) => {

  const [profile,setProfile] = useState({
    "name":"정민수",
    "local":"전주시 덕진구 ...",
    "img":""
  });
  useEffect(() => {

  }, [])
  
  return (
    <Layout>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 20 }} >
        <View style={{ width: 72, height: 72, backgroundColor: 'gray', borderRadius: '50%', marginRight: 12 }} ></View>
        
        <View>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#FF7B00', marginBottom: 4 }} >{profile.name}</Text>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#4f4f4f' }} >{profile.local}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('MypageNavigator',{ screen: 'Modify', params:{profile}})} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8f8f8f', height: 44, borderRadius: 4, marginBottom: 16 }} >
        <Text style={{ color: '#8f8f8f', fontWeight: '500' }} >프로필 수정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MypageNavigator',{ screen: 'LoginPage', params:{profile}})} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8f8f8f', height: 44, borderRadius: 4, marginBottom: 16 }} >
        <Text style={{ color: '#8f8f8f', fontWeight: '500' }} >로그인</Text>
      </TouchableOpacity>

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 12 }} >
        <TouchableOpacity onPress={() => navigation.navigate('BuyList')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }} ><Ionicons name="cart-outline" size={48} /><Text style={{ fontSize: 12, fontWeight: '500' }} >구매 내용</Text></TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }} ><Ionicons name="basket-outline" size={48} /><Text style={{ fontSize: 12, fontWeight: '500' }} >리뷰 작성</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }} ><Ionicons name="star-outline" size={48} /><Text style={{ fontSize: 12, fontWeight: '500' }} >찜 목록</Text></TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }} ><Ionicons name="bus-outline" size={48} /><Text style={{ fontSize: 12, fontWeight: '500' }} >배송지 정보</Text></TouchableOpacity>
      </View>

      
    </Layout>
  )
}

export default Mypage
