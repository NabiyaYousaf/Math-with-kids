import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const WelcomeScreen = () => {
    const navigation=useNavigation();
    const isHome=()=>{
        navigation.navigate('start');
    }
  return (
    <View style={styles.mainView}>
        <View style={styles.topView}>
            <Animatable.Image animation='swing' duration={3500} style={styles.logoStyle} source={require('../../assets/logo.png')} resizeMode='stretch'/>
        </View>
        <Animatable.View style={styles.bottomView} animation='fadeInUpBig' duration={1500}>
            <Text style={styles.welcomeText}>Welcome to {'\n'} Math With Kids</Text>
            <View style={styles.btnView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={isHome}
                >
                    <Text style={styles.buttonText}>Get Started  <MaterialCommunityIcons name="home" size={20} color="#fff" /></Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    mainView:{
        paddingTop:40,
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#11998e"
    },
    topView:{
        flex:2,
        width:"100%",
        // height:"65%",
        backgroundColor:"#11998e",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    bottomView:{
        width:"100%",
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingVertical:20,
        paddingHorizontal:30
        
    },
    logoStyle:{
        width:170,
        height:170,
    },
    welcomeText:{
        fontSize:30,
        fontWeight:"bold",
        color:"#11998e",
        marginLeft:25,
        marginTop:40,
    },
    button:{
        width:"60%",
        padding:7,
        borderRadius:50,
        backgroundColor:"#11998e",
        borderWidth:2,
        borderColor:"#11998e",
        alignSelf:"flex-end",
        marginRight:10,
        marginTop:15
    },
    buttonText:{
        color:"#fff",
        fontSize:23,
        // fontWeight:"bold",
        letterSpacing:1,
         textAlign:"center",
      
        
    }
    
})