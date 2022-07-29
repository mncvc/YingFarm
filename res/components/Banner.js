import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-web-swiper";




export default class Banner extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
                  <Swiper
                    from={1}
                    minDistanceForAction={1}
                    loop
                    timeout={5}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {''}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  > 
                      <Image source={{ uri: 'https://ifh.cc/g/3N6MDM.png', width: '100%' }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }} /> 
                      <Image source={{ uri: 'https://ifh.cc/g/w9fv1s.png', width: '100%' }} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 4 }} /> 
                  </Swiper>
              </View>
              
          </View>
        )
    }
}