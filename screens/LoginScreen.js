import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Alert,Image} from 'react-native'
import React,{useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'
import { ScrollView } from 'react-native-gesture-handler';
const ContactScreen = ({navigation}) => {
    const[userPassword,setUserPassword]=useState("");
    const[setEmail,setUserEmail]=useState("");
    const submit=()=>{
        if(userPassword  && setEmail ){
            // return Alert.alert(`Thank You ${userName}`);
            // return console.log(`Thank You ${userName}`);
            navigation.navigate("student");
        }else{
            // return Alert.alert("Username and Password are incorrect");
            return console.log("Please Fill All Fields");
        }
}
  return (
        <ScrollView bounces={false}>
            <View style={styles.container}>
            <Animatable.Image animation='zoomIn' duration={3000} iterationCount={'infinite'} source={require('../../assets/login.png')} style={styles.aboutImage} resizeMode='stretch'/>
            <Text style={styles.loginText}>Login <MaterialCommunityIcons name="information-outline" size={20} /></Text>
            <Text style={styles.welcome}>login here and enjoy math with kids services</Text>
            <View style={styles.subContainer}>
                
                    <View>
                        <Text style={styles.textStyle}><MaterialCommunityIcons name="account-edit-outline" size={20} /> Email</Text>
                            <TextInput
                            style={styles.inputText}
                            autoCorrect={false}                     
                            onChangeText={(actualData)=>setUserEmail(actualData)}               
                        />
                        
                    </View>
                    <View>
                        <Text style={styles.textStyle}><MaterialCommunityIcons name="account-key" size={20} /> Password</Text>
                            <TextInput
                            style={styles.inputText}
                            autoCorrect={false}                     
                            onChangeText={(actualData)=>setUserPassword(actualData)}               
                        />
                        
                    </View>

                </View>
            <View>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
                    <Text style={styles.btnLoginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container:{
        width:"100%",
        // height:"100%",
        display:"flex",
        // flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:50,
        paddingBottom:58,
        backgroundColor:"#fff"
    },
    loginText:{
        // width:"100%",
        fontSize:25,
        letterSpacing:1,
        color:"#11998e",
        fontWeight:"bold",
        marginTop:10
    },
    welcome:{
        paddingVertical:5,
        // color:"grey",
        color:"#11998e",
        fontWeight:"300",
        letterSpacing:0.5
    },
    subContainer:{
        marginVertical:15,
    },
    textStyle:{
        color:"grey",
        fontWeight:"300",
        paddingVertical:10,
        fontSize:15
    },
    inputText:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        width:250,
    },
    btnLogin:{
        marginVertical:15,
        backgroundColor:"#11998e",
        width:200,
        padding:7,
        borderRadius:5,
        textAlign:"center"
    },
    btnLoginText:{
        fontSize:17,
        color:"white",
        letterSpacing:1,
        textTransform:"uppercase",
        textAlign:"center"
    },
    aboutImage:{
        width:"100%",
        height:200,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    },
})