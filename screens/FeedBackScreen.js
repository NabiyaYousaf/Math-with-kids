import { StyleSheet, View,Text ,FlatList,Image} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
const FeedBackScreen = () => {
 
    const FeedbackData=[
   
        {
            id:'1',
            feedback:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus?",
            name:"Steve",           
        },
        {
            id:'2',
            feedback:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur sequi numquam laboriosam?",
            name:"john",            
        },
        {
            id:'3',
            feedback:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur",
            name:"Abram"            
        },
        {
            id:'4',
            feedback:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur sequi numquam laboriosam?",
            name:"Bell",            
        },
        {
            id:'5',
            feedback:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur",
            name:"Tom"            
        }
    ]
    const feedBackData=({item})=>{
      return(
          
              <View style={styles.box}>
                          <Text style={styles.iconStyle}>#{item.id}</Text> 
                          <View style={styles.content}>                            
                              <Text style={[styles.textColor,styles.description]}>{item.feedback}</Text>
                              <Text style={[styles.textColor,styles.class]}>'{item.name}'</Text>
                          </View>
              </View>
          
      )
  }
  return (
    <View style={styles.mainContainer}>
        
        <View style={styles.main}>
        
            <Text style={styles.coverHeading}> Parent's FeedBack <MaterialCommunityIcons name="information-outline" size={20} /> </Text>
            <Animatable.Image animation='zoomIn' duration={3000} iterationCount={'infinite'} source={require('../../assets/feedback.png')} style={styles.aboutImage} resizeMode='stretch' />
                <FlatList
                    keyExtractor={(keys)=>keys.id}
                    data={FeedbackData}                   
                    // horizontal
                    renderItem={feedBackData}               
                />
               
        </View>

     
    </View>
  )
}

export default FeedBackScreen

const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        alignContent:"center"
    },
    coverHeading:{
        textAlign:"center",
        color:"#11998e",
        fontSize:23,
        fontWeight:"bold",
        paddingVertical:20,
        letterSpacing:1
    },
   
    aboutImage:{
        width:250,
        height:200,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    },
   
    box:{
        position: 'relative',
        width: 300,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor:"#11998e",    
        borderRadius: 4,
        overflow: 'hidden',
        textAlign: 'center',
        marginBottom:10,
        marginHorizontal:10,       
        justifyContent:"center",
        alignItems:"center"
      },
      textColor:{
        color:"#fff",
      },
      iconStyle:{
        backgroundColor:"#fff",
        color:"#11998e",
        fontSize:18,
        fontWeight: "500",
        padding:5,
        width:40,
        height:40,
        borderRadius:50,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      description:{
        letterSpacing: 0.2,
        fontSize: 12,
        paddingBottom: 1,
        marginTop:5
      },
      class:{
          fontSize:20,
          letterSpacing:1,   
          textAlign:'right',
          fontStyle:'italic'     
      }
      ,main:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }

})