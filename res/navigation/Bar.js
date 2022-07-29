import { View, Text, Image } from 'react-native'
import React from 'react'


{/* <Ionicons name={ICON_NAME[index]} size={index === 2 ? 72 : 32} color={isFocused ? '#FF7B00' : '#222'} /> */}

const Bar = ({icon, color}) => {
    switch(icon) {
        case 0:
            return color ?
            <Image source={require('../assets/icons/hHouse.jpg')} style={{ width: 32, height:32, marginBottom: 4 }} />
            :
            <Image source={require('../assets/icons/house.jpg')} style={{ width: 32, height:32, marginBottom: 4 }}  />
        case 1:
            return color ? <Image source={require('../assets/icons/hCommu.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} /> : <Image source={require('../assets/icons/commu.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} />
        case 2: 
            return <Image source={require('../assets/icons/plus.png')}  style={{ width: 60, height: 60, marginBottom: 4, marginRight: 4 }} />

        case 3:
            return color ? <Image source={require('../assets/icons/hChat.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} /> : <Image source={require('../assets/icons/chat.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} />

        case 4: 
            return color ? <Image source={require('../assets/icons/hUser.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} /> : <Image source={require('../assets/icons/user.jpg')}  style={{ width: 32, height:32, marginBottom: 4 }} />
    }
}

export default Bar