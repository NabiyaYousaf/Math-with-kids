import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Alert} from 'react-native'
import React,{useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as Animatable from 'react-native-animatable'

const ContactScreen = ({navigation}) => {
    const[userName,setUserName]=useState("");
    const[setEmail,setUserEmail]=useState("");
    const[msg,setMsg]=useState("");
    const submit=()=>{
    if(userName  && setEmail && setMsg ){
        // return Alert.alert(`Thank You ${userName}`);
        // return console.log(`Thank You ${userName}`);
        navigation.navigate("Home");
    }else{
        // return Alert.alert("Username and Password are incorrect");
        return console.log("Please Fill All Fields");
    }
}
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Contact Us <MaterialCommunityIcons name="cellphone-basic" size={20} /></Text>
      <Text style={styles.welcome}>if you have any query just contact us</Text>
      <View style={styles.subContainer}>
            <View>
            <Text style={styles.textStyle}><MaterialCommunityIcons name="account-key" size={20} /> Name</Text>
                <TextInput
                style={styles.inputText}   
                autoCorrect={false} 
                value={userName}   
                onChangeText={(actualData)=>setUserName(actualData)}         
            />
            </View>
            <View>
                <Text style={styles.textStyle}><MaterialCommunityIcons name="email-check" size={20} /> Email</Text>
                    <TextInput
                    style={styles.inputText}
                    autoCorrect={false}                     
                    onChangeText={(actualData)=>setUserEmail(actualData)}               
                />
                
            </View>
            <View>
            <Text style={styles.textStyle}><MaterialCommunityIcons name="email-check" size={20} /> How Can I Help You ?</Text>
                <TextInput
                numberOfLines={5}
                style={styles.inputText}   
                autoCorrect={false} 
                value={msg}   
                onChangeText={(actualData)=>setMsg(actualData)}         
            />
            </View>
        </View>
      <View>
          <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
              <Text style={styles.btnLoginText}>Send</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        // flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:15
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
        textTransform:"uppercase"
    }
})