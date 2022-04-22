import { StyleSheet, View,Image,Text ,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import ContactScreen from './ContactScreen';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
const HomeScreen = () => {
    const navigation=useNavigation();
    const isAbout=()=>{
        navigation.navigate('about');
    }
    const Services=[
        {
            id:'1',
            description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur sequi numquam laboriosam?",
            class:"Class One",
            animation:"fade-right"
        },
        {
            id:'2',
            description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus?",
            class:"Class Two",
            animation:"fade-down"
        },
        {
            id:'3',
            description:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum temporibus consequatur sequi numquam laboriosam?",
            class:"Class Three",
            animation:"fade-left"
        }
    ];
    const serviceData=({item})=>{
        return(
            
                <View style={styles.box}>
                            <Text style={styles.iconStyle}>#0{item.id}</Text> 
                            <View style={styles.content}>                            
                                <Text style={[styles.textColor,styles.class]}>{item.class}</Text>
                                <Text style={[styles.textColor,styles.description]}>{item.description}</Text>
                            </View>
                </View>
            
        )
    }
  return (
        <ScrollView bounces={false}>
            <View style={styles.mainContainer}>
                {/* <View> */}
                    <Image style={styles.coverStyle} source={require('../../assets/banner1.png')}   />
                    <Animatable.Text animation='bounceInUp' duration={3000} style={styles.coverHeading}>Nothing is Impossible ✌️</Animatable.Text>
                    <Text style={styles.coverSubHeading}>Education is Key To Success 📖</Text>
                    <Text style={styles.coverText}>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                    </Text>
                {/* </View> */}
                <View style={styles.aboutContainer}>
                    <Text style={styles.coverHeading}> About Us <MaterialCommunityIcons name="information-outline" size={25} /> </Text>
                    <Animatable.Image animation='zoomIn' duration={3000} iterationCount={'infinite'} source={require('../../assets/about.png')} style={styles.aboutImage} resizeMode='stretch' />
                    <Text style={styles.coverText}>
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </Text>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={isAbout}
                        >
                            <Text style={styles.buttonText}> Read More  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={styles.coverHeading}> Services <MaterialCommunityIcons name="face-agent" size={25} /> </Text>
                    
                        <FlatList
                            keyExtractor={(key)=>key.id}
                            data={Services}
                            horizontal
                            renderItem={serviceData}               
                        />
                    
                </View>
                <View style={styles.contact}>
                    <ContactScreen />
                </View>

            
            </View>
        </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff",
        paddingTop:622
    },
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
        color:"grey"
    },
    coverSubHeading:{
        color:"gray",
        textAlign:"center"
    },
    aboutContainer:{
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:250,
        height:200,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    },
    button:{
        // width:"60%",
        padding:3,
        borderRadius:5,
        backgroundColor:"#11998e",
        borderWidth:2,
        borderColor:"#11998e",
        alignSelf:"flex-end",
        marginRight:10,
        marginTop:5
    },
    buttonText:{
        fontSize:17,
        color:"white",
        letterSpacing:1,
        textTransform:"uppercase"
        
    },
    btnView:{
        marginBottom:15
    },
    serviceContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
    ,
    box:{
        position: 'relative',
        width: 300,
        height: 200,
        paddingHorizontal: 20,
        // paddingVertical: 15,
        backgroundColor:"#11998e",    
        borderRadius: 4,
        overflow: 'hidden',
        textAlign: 'center',
        marginBottom:10,
        marginHorizontal:10,       
        justifyContent:"center",
        alignItems:"center",
        marginTop:30
      },
      textColor:{
        color:"#fff",
      },
      iconStyle:{
        backgroundColor:"#fff",
        color:"#11998e",
        fontSize:18,
        // fontWeight: "bold",
        padding:5,
        width:44,
        height:44,
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
      },
    //   contact:{
    //       width:"100%",
    //       height:"100%"
    //   }
    

})