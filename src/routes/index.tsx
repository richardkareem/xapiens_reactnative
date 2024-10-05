import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { DetailUserScreen, EditScreen, HomeScreen, LoginScreen, ProfileScreen, RegisterScreen, SplashScreen } from "../screens"
import MyTabsBar from "./MyTabsBar"
import { useEffect } from "react"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

useEffect(() =>{

},[])

const MainApp = () =>{
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}
         tabBar={props => <MyTabsBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Edit" component={EditScreen} />
        </Tab.Navigator>
    )
}

export const Route = () =>{
    return(
        <Stack.Navigator >
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}  />
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}}   />
            <Stack.Screen name="DetailUserScreen" component={DetailUserScreen} options={{headerShown: false}}   />
        </Stack.Navigator>
    )
}