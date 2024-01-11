import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Pressable
        onPress={() => {
          navigation.navigate('Details')
        }}      
      > 
        <View
          style={{ 
            backgroundColor: 'orange',
            borderRadius: 8
          }}
        >
          <Text style={{ padding: 10, color: 'white', fontWeight: 'bold' }}>Detail Page</Text>
        </View>
      </Pressable>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Homepage' }}
        />

        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ title: 'Detail Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;