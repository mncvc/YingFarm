import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Svg, { Path, WithLocalSvg } from 'react-native-svg'
import Ionicons from '@expo/vector-icons/Ionicons'
import Bar from './Bar'



const ROUTE_NAME = [
    '스토어',
    '커뮤니티',
    '',
    '채팅',
    '내정보'
]
const ICON_NAME = [
    'home-outline',
    'people-outline',
    'add-circle',
    'chatbubbles-outline',
    'person-outline'
]
const WIDTH = Math.floor(Dimensions.get('window').width)
const HEIGHT = Math.floor(Dimensions.get('window').height)

function TabBarContainer({ state, descriptors, navigation }) {
    const [ prevPage, setPrevPage ] = useState('StoreNavigator')
  return (
    <>
      <Image source={{ uri: 'https://ifh.cc/g/W2wwab.png', width: WIDTH, height: 100 }} style={{ position: 'absolute', bottom: 0 }} />
    <View 
    style={{ flexDirection: 'row',backgroundColor:"transparent",height:90,justifyContent:"center",alignItems:"center" }}>
      {state.routes.map((route, index) => {
            if (index > 4) return
          const { options } = descriptors[route.key];
          const label =
          options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : ROUTE_NAME[index];
          
          const isFocused = state.index === index;
          
          const onPress = () => {
              const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });
                if (!isFocused && !event.defaultPrevented) {
                    if (route.name === 'Write') {
                        navigation.navigate(route.name, {
                            prevPage
                        });
                    } else {
                        setPrevPage(route.name)
                        navigation.navigate(route.name);
                    }
                }
            };
    
            const onLongPress = () => {
                navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                });
            };
            
            return (
                <TouchableOpacity
                accessibilityRole="button"
                accessibilityStates={isFocused ? ['selected'] : []}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ 
                    flex: 1, 
                    alignItems:"center",
                    marginBottom: index === 2 ? 12 : 0,
                    marginLeft: 6
                }}
                key={index}
                >
                    <Bar icon={index} color={isFocused} />
                {/* <Ionicons name={ICON_NAME[index]} size={index === 2 ? 72 : 32} color={isFocused ? '#FF7B00' : '#222'} /> */}
                <Text style={{ color: isFocused ? '#FF7B00' : '#222', fontSize: 12, fontFamily: '돋움' }}>
                    {index === 2 ? null : label}
                </Text>
            </TouchableOpacity>
            );
        })}
    </View>
    </>
  );
}

export default TabBarContainer