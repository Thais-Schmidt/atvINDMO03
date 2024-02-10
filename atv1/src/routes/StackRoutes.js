import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Detalhes from "../pages/Detalhes";
import Curso from "../pages/Curso";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name='Curso'
                component={Curso} />

            <Stack.Screen
                name='Detalhes'
                component={Detalhes} />


        </Stack.Navigator>

    )
}