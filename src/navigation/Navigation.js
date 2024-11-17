import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Favorito from "../screens/Favorito";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";

const Tab = createBottomTabNavigator();


export default function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorito" component={Favorito} />
            <Tab.Screen name="Account" component={Account} />
            <Tab.Screen name="Pokedex" component={Pokedex} />
        </Tab.Navigator>
    )
}