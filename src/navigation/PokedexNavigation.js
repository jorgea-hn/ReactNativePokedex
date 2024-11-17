import { createStackNavigator } from '@react-navigation/stack';
import Pokedex from '../screens/Pokedex';
import Pokemon from './Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Pokedex} options={{title:"Pokedex", headerTitleAlign: 'center'}}/>
            <Stack.Screen name='Pokemon' component={Pokemon} options={{title:"Pokemon", headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    )
}