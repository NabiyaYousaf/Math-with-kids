import { createDrawerNavigator } from "@react-navigation/drawer";
import StudentHome from './StudentHome';
import StudentFeedback from './StudentFeedback';
import StudentSideBar from "./StudentSideBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StudentResult from "./StudentResult";
import StudentProfile from "./StudentProfile";

// import { useState } from "react/cjs/react.production.min";
const Drawer=createDrawerNavigator();
const StartScreen = () => {
 
  return (
    
        <Drawer.Navigator
            drawerContent={props=> <StudentSideBar{...props}/>}
         screenOptions={{
                  drawerActiveTintColor:"white",
                  drawerLabelStyle:{fontSize:20},
                  drawerStyle:{backgroundColor:"#11998e"}
                }}>
            <Drawer.Screen name='studenthome' component={StudentHome} options={{
                headerTitle:"Math With Kids",
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"Lectures",
                drawerIcon:props=><MaterialCommunityIcons name="home" size={20} color="#fff" />
            }} />
             
            <Drawer.Screen name='feedback' component={StudentFeedback}
              options={{
                
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"Feedback",
                drawerIcon:props=><MaterialCommunityIcons name="information-outline" size={20} color="#fff" />
              }}
             />
            <Drawer.Screen name='stufeedback' component={StudentResult} 
              options={{
                
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"StudentResult",
                drawerIcon:props=><MaterialCommunityIcons name="cellphone-basic" size={20} color="#fff" />
              }}
            />
            <Drawer.Screen name='stuprofile' component={StudentProfile} 
              options={{
                
                headerStyle:{backgroundColor:"#11998e"},
                headerTintColor:"#fff",
                title:"StudentProfile",
                drawerIcon:props=><MaterialCommunityIcons name="cellphone-basic" size={20} color="#fff" />
              }}
            />
        </Drawer.Navigator>
    
  )
}

export default StartScreen
