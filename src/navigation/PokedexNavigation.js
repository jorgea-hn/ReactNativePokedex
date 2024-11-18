import { createStackNavigator } from '@react-navigation/stack';
import ScreemPokedex from '../screens/Pokedex';
import Pokemon from './Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={ScreemPokedex} options={{title:"Pokedex", headerTitleAlign: 'center', headerTransparent:true}}/>
            <Stack.Screen name='Pokemon' component={Pokemon} options={{title:"Pokemon", headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    )
}