import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import PostsList from "./Screens/PostsList";
import PostDetailScreen from './Screens/PostDetails';

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={"PostsList"}>
            <Stack.Screen
                name="PostsList"
                component={PostsList}
            />

            <Stack.Screen
                name="PostDetailScreen"
                component={PostDetailScreen}
            />
        </Stack.Navigator>
    );
}
const App = () => {

    let initialRoute = "";
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}
export default App;