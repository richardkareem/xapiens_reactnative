import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    MainApp: undefined;
    LoginScreen:undefined;
    RegisterScreen:undefined;
    SplashScreen: undefined;    
    DetailUserScreen: {name: string, job:string, id: string} | undefined
  };

  export type NavigationProp = {
    navigation: NativeStackNavigationProp<RootStackParamList>
  }