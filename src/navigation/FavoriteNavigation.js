
import { createStackNavigator } from '@react-navigation/stack';
import Favorito from "../screens/Favorito"

const Stack = createStackNavigator();

export default function FavoriteNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorito" component={Favorito} options={{title:"Favorito", headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    )
}