import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import StartScreen from './src/screens/StartScreen';
import StudentStart from './src/screens/StudentStart';
import VideoOne from './src/screens/VideoOne';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}} />
          <Stack.Screen name="start" component={StartScreen}   options={{headerShown:false}} />
          <Stack.Screen name="student" component={StudentStart}   options={{headerShown:false}} />
          <Stack.Screen name="videoOne" component={VideoOne}  />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

registerRootComponent(App);


