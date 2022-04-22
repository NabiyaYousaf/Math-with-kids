import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";
import FeedBackScreen from "./FeedBackScreen";
import LoginScreen from "./LoginScreen";
import SideBar from "./SideBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Drawer=createDrawerNavigator();
const StartScreen = () => {
  return (
    
        <Drawer.Navigator
            drawerContent={props=> <SideBar{...props}/>}
         screenOptions={{
                  drawerActiveTintColor:"white",
                  drawerLabelStyle:{fontSize:20},
                  drawerStyle:{backgroundColor:"#11998e"}
                }}>
            <Drawer.Screen name='home' component={HomeScreen} options={{
                headerTitle:"Math With Kids",
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"Home",
                drawerIcon:props=><MaterialCommunityIcons name="home" size={20} color="#fff" />
            }} />
            <Drawer.Screen name='about' component={AboutScreen}
              options={{
                
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"About",
                drawerIcon:props=><MaterialCommunityIcons name="information-outline" size={20} color="#fff" />
              }}
             />
            <Drawer.Screen name='contact' component={ContactScreen} 
              options={{
                
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"Contact Us",
                drawerIcon:props=><MaterialCommunityIcons name="cellphone-basic" size={20} color="#fff" />
              }}
            />
            <Drawer.Screen name='feedback' component={FeedBackScreen} 
               options={{
                headerTitle:"Parents FeedBack",
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"FeedBacks",
                drawerIcon:props=><MaterialCommunityIcons name="message-alert-outline" size={20} color="#fff" />
              }}
            />
             <Drawer.Screen name='login' component={LoginScreen} 
               options={{
                headerTitle:"Login",
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"Login",
                drawerIcon:props=><MaterialCommunityIcons name="account-edit-outline" size={20} color="#fff" />
              }}
            />
        </Drawer.Navigator>
    
  )
}

export default StartScreen
