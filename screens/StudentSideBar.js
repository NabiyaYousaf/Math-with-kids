import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
const StudentSideBar = ({...props}) => {
  return (
    <DrawerContentScrollView {...props}>
    <View>
        <Image source={require('../../assets/logo.png')}  style={{height:70,width:70,borderRadius:50,marginBottom:10, marginLeft:10,marginTop:5}}/>
        <Text style={styles.textStyle}>Lets Learn Math With Us</Text>
    </View>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default StudentSideBar

const styles = StyleSheet.create({
    textStyle:{
        color:"#fff",
        marginLeft:10,
        marginBottom:15
    }
})