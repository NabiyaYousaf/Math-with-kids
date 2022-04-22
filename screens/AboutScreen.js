import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';
const AboutScreen = () => {
  return (
    <ScrollView bounces={false} >
        <View style={styles.aboutContainer}>
            <Text style={styles.coverHeading}> About Us <MaterialCommunityIcons name="information-outline" size={20} /> </Text>
            <Animatable.Image animation='zoomIn' duration={3000} iterationCount={'infinite'} source={require('../../assets/about.png')} style={styles.aboutImage} resizeMode='stretch' />
            <Text style={styles.coverText}>
            Math With Kids about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </Text>
            <Text style={styles.coverText}>
            Math With Kids about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </Text>
        </View>
    </ScrollView>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  coverStyle:{
    width:"100%",
    height:150,
},
coverHeading:{
    textAlign:"center",
    color:"#11998e",
    fontSize:23,
    fontWeight:"bold",
    paddingVertical:20
},
coverText:{
    paddingVertical:10,
    paddingHorizontal:20,
    textAlign:"justify",
    color:"grey",
    fontSize:16
},

aboutContainer:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    // paddingTop:80
},
aboutImage:{
    width:250,
    height:200,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10
},
})