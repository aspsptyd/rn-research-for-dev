import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeNavBarActive from './assets/menus/home_active.svg';
import HomeNavBarInactive from './assets/menus/home_inactive.svg';

import SleepNavBarActive from './assets/menus/sleep_active.svg';
import SleepNavBarInactive from './assets/menus/sleep_inactive.svg';

import PerformanceNavBarActive from './assets/menus/performance_active.svg';
import PerformanceNavBarInactive from './assets/menus/performance_inactive.svg';

import SettingsNavBarActive from './assets/menus/settings_active.svg';
import SettingsNavBarInactive from './assets/menus/settings_inactive.svg';

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ini page Home</Text>
    </View>
  );
}

function Sleep() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ini page Sleep</Text>
    </View>
  );
}

function Performance() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ini page Performance</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ini page Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: true,
          tabBarStyle: {
            backgroundColor: '#3E48A0',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
              <View >
                  {focused ? (
                    <HomeNavBarActive width={25} height={25} />
                  ) : (
                    <HomeNavBarInactive width={25} height={25} />
                  )}
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Sleep" 
          component={Sleep} 
          options={{
            tabBarLabel: 'Sleep',
            tabBarIcon: ({ focused }) => (
              <View >
                  {focused ? (
                    <SleepNavBarActive width={25} height={25} />
                  ) : (
                    <SleepNavBarInactive width={25} height={25} />
                  )}
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Performance" 
          component={Performance} 
          options={{
            tabBarLabel: 'Performance',
            tabBarIcon: ({ focused }) => (
              <View >
                  {focused ? (
                    <PerformanceNavBarActive width={25} height={25} />
                  ) : (
                    <PerformanceNavBarInactive width={25} height={25} />
                  )}
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ focused }) => (
              <View >
                  {focused ? (
                    <SettingsNavBarActive width={25} height={25} />
                  ) : (
                    <SettingsNavBarInactive width={25} height={25} />
                  )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;