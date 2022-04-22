import { StyleSheet, Text, View ,TouchableOpacity,TextInput,Alert,Image} from 'react-native'
import React,{useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import * as Animatable from 'react-native-animatable'

const StudentFeedback = ({navigation}) => {

    const[msg,setMsg]=useState("");
    const submit=()=>{
    if(setMsg ){
        return Alert.alert(` Thanks For Your Feedback `);
        // return console.log(`Thank You ${userName}`);
    }else{
        // return Alert.alert("Username and Password are incorrect");
        return console.log("Please Fill The Field");
    }
}
  return (
    <View style={styles.container}>
    <Image source={require('../../assets/feedback.jpg')} style={styles.aboutImage} resizeMode='stretch'/>
      <Text style={styles.loginText}>Parents Feedback</Text>
      <Text style={styles.welcome}>share your experience with us</Text>
      <View style={styles.subContainer}>
           
            <View>
                <Text style={styles.textStyle}><MaterialCommunityIcons name="account-edit-outline" size={20} /> Feedback</Text>
                    <TextInput
                    style={styles.inputText}
                    multiline={true}
                    autoCorrect={false}                     
                    onChangeText={(actualData)=>setMsg(actualData)}               
                />
                
            </View>
            

        </View>
      <View>
          <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
              <Text style={styles.btnLoginText}>Submit</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default StudentFeedback

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        // flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
       
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
        height: 100,
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
        marginVertical:10,
        borderRadius:10

    },
})