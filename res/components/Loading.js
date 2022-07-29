import React from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

export default function Loading(){
    return(
        <View style={styles.container}>
            <Image source={{ uri: 'https://ifh.cc/g/pRQxxb.png', width: 100, height: 100}} />
        </View>)
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    title: {
        fontSize:20,
        fontWeight:'700'
    }

})

