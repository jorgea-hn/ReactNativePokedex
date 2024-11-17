import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Favorito from "../screens/Favorito";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from "react-native";


const Tab = createBottomTabNavigator();


export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorito" component={Favorito} options={{tabBarLabel:"Favorito", tabBarIcon:(color, size)=>(<Icon name="heart" color={color} size={size}/>)}}/>
            <Tab.Screen name="Pokedex" component={Pokedex} options={{tabBarLabel:"", tabBarIcon:()=> renderPokebola()}}/>
            <Tab.Screen name="Account" component={Account} options={{tabBarLabel:"Account", tabBarIcon:(color, size)=>(<Icon name="user" color={color} size={size}/>)}}/>
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