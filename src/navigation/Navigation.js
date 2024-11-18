import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FavoriteNavigation from "./FavoriteNavigation";
import AccountNavigation from "./AccountNavigation";
import PokedexNavigation from "./PokedexNavigation";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from "react-native";


const Tab = createBottomTabNavigator();


export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="FavoriteNavigation" component={FavoriteNavigation} options={{headerShown: false,tabBarLabel:"Favorito", tabBarIcon:(color, size)=>(<Icon name="heart" color={color} size={size}/>)}}/>
            <Tab.Screen name="PokedexNavigation" component={PokedexNavigation} options={{headerShown: false,tabBarLabel:"", tabBarIcon:()=> renderPokebola()}}/>
            <Tab.Screen name="AccountNavigation" component={AccountNavigation} options={{headerShown: false,tabBarLabel:"Account", tabBarIcon:(color, size)=>(<Icon name="user" color={color} size={size}/>)}}/>
        </Tab.Navigator>
    )
}

function renderPokebola(){
    return(
        <Image source={require("../assets/pokebola.png")}
        style={{width:75, height:75, top:-15}}
        />
    )
}