import { createStackNavigator } from '@react-navigation/stack';
import ScreenAccount from '../screens/Account';

const Stack = createStackNavigator();

export default function AccountNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Account" component={ScreenAccount} options={{title:"Account", headerTitleAlign: 'center'}}/>
        </Stack.Navigator>
    )
}