
import { createStackNavigator } from '@react-navigation/stack';
import ScreenFavorito from "../screens/Favorito"

const Stack = createStackNavigator();

export default function FavoriteNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorito" component={ScreenFavorito} options={{title:"Favorito", headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    )
}