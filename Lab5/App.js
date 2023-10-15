import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Page1 from './resources/Page1';
import Page2 from './resources/Page2';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="1">
        <Stack.Screen name="1" component={Page1} options={{ headerShown: false }} />
        <Stack.Screen name="2" component={Page2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


