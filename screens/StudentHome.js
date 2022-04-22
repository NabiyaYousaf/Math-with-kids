import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const StudentHome = () => {
  const navigation=useNavigation();
  const isOne=()=>{
    navigation.navigate('videoOne');
  }

  return (
    <ScrollView bounces={false}>
      <View style={styles.mainContainer}>
          <View style={styles.coverContainer}>
              <Image style={styles.coverStyle} source={require('../../assets/banner1.jpg')}   />
          </View>

          <Text style={styles.heading}>All Video Lecture's</Text>

          <View style={styles.list}>
            <Text style={styles.lecture}>1- Class #1</Text>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>isOne()}>
                  <Text style={styles.btnLoginText}>Lecture 1</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
                  <Text style={styles.btnLoginText}>lecture 2</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.lecture}>2- Class #2</Text>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>isOne()}>
                  <Text style={styles.btnLoginText}>Lecture 1</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
                  <Text style={styles.btnLoginText}>lecture 2</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <Text style={styles.lecture}>3- Class #3</Text>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>isOne()}>
                  <Text style={styles.btnLoginText}>Lecture 1</Text>
              </TouchableOpacity>
          </View>
          <View>
              <TouchableOpacity style={styles.btnLogin} onPress={()=>submit()}>
                  <Text style={styles.btnLoginText}>lecture 2</Text>
              </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

export default StudentHome

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    // marginTop:200
  },
  coverContainer:{
    width:"90%",
    paddingTop:15
  },
  coverStyle:{
      width:"100%",
      height:150,
      
  },
  heading:{
    textAlign:"center",
    fontSize:20,
    marginTop:10,
    color:"#11998e",
    fontWeight:"bold"
  },
  list:{
    width:"90%",
  },
  lecture:{
    marginTop:10,
    fontSize:18,
    marginBottom:5,
    fontWeight:"bold"
  },
 
  loginText:{
    // width:"100%",
    fontSize:25,
    letterSpacing:1,
    color:"#11998e",
    fontWeight:"bold",
    marginTop:10
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
})