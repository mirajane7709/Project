import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Page1 from "./Screen/Page1"
import Page2 from "./Screen/Page2"
import Page3 from "./Screen/Page3"
import Page4 from "./Screen/Page4"


const Stack = createStackNavigator();

function Mystack() {
  return (

    <Stack.Navigator>
      <Stack.Screen name = "Page1" component={Page1} options={{headerShown: false}}/>
      <Stack.Screen name = "Page2" component={Page2} options={{headerShown: false}}/>
      <Stack.Screen name = "Page3" component={Page3} options={{headerShown: false}}/>
      <Stack.Screen name = "Page4" component={Page4} options={{headerShown: false}}/>
    
     
    </Stack.Navigator>

  )
}

const App = () =>{
  return(
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  )
}

export default App