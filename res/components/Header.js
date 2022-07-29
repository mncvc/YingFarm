import { View, Text,TextInput,  Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const WIDTH = Math.floor(Dimensions.get('window').width)
const HEIGHT = Math.floor(Dimensions.get('window').height)

const Header = (props) => {
    const [ inputText, SetInputText ] = useState('')

    const onSummit = (e) => {
        const searchText = e.nativeEvent.text
        const curPage = props.page.name
    }

  return (
    <SafeAreaView style={{ marginBottom: 4 ,display: 'flex', width: WIDTH * 0.9, backgroundColor: 'white',flexDirection: 'row',alignItems: 'center', justifyContent: 'space-between' }} >
        <Ionicons name={'search'} size={16} color={'#666'} style={{ position: 'absolute', top: 6, left: 4, zIndex: 11 }} />
        <TextInput
            style={{
                backgroundColor: '#F5F5F5',
                width: WIDTH * 0.7,
                height: 28,
                paddingLeft: 22,
                fontSize: 12,
                borderRadius: 4,
            }}
          value={inputText}
          onChangeText={SetInputText}
          placeholder={'검색을 해주세요.'}
          onSubmitEditing={(e) => onSummit(e)}
        />
        <View style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'space-evenly', width: (WIDTH - 32) * 0.3, paddingRight: 8 }} >
            <TouchableOpacity onPress={() => props.navigation.navigate('MypageNavigator', { screen: 'Favorite', initial: false })} >
                <Ionicons name={'star-outline'} size={20} color='black' />
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('MypageNavigator', { screen: 'ShopCart', initial: false })} >
                <View style={{ display: 'flex',  alignItems: 'center', justifyContent:'center',position: 'absolute', right: 0,backgroundColor: 'orange', height: 12, width: 12, borderRadius: "50%", zIndex: 10 }} >
                    <Text style={{ color: 'white', fontSize: 10 }} >
                        {
                            1
                        /**
                         쇼핑카트에 들어있는 수 만큼 표시
                        */
                        }
                    </Text>
                </View>
                <Ionicons name={'cart-outline'} size={24} color='black' />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Header