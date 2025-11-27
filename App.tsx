import "./global.css"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";

 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#3b82f6',
            tabBarInactiveTintColor: '#9ca3af',
            tabBarStyle:{
              backgroundColor:'#fff',
              borderTopWidth: 1 ,
              borderTopColor: '#e5e7eb'
            },
          }}>
            <Tab.Screen name="Home" options={{ title: ' Home',headerShown:false,tabBarIcon:({ color,size}) => (
              <span style={{fontSize:size ,color}}>icons</span>
            )}}>
          {() => (
        <Stack.Navigator
          screenOptions={{
            headerStyle: { 
              backgroundColor: '#3b82f6' ,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Detail" component={DetailScreen}/>
        </Stack.Navigator>
      )}
        </Tab.Screen>
        <Tab.Screen name="Cart" component={CartScreen} options={{ title: ' Cart',headerTitle:'Cart',tabBarIcon:({ color,size}) => (
              <span style={{fontSize:size ,color}}>cart-icons</span>
            ),
            tabBarBadge:3
            }}/>

            <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile',headerTitle:'Profile',tabBarIcon:({ color,size}) => (
              <span style={{fontSize:size ,color}}>profile-icons</span>
            ),
            tabBarBadge:3
            }}/>
        </Tab.Navigator>
        </NavigationContainer>  
  );
}