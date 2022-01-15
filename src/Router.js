import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Jobs from './pages/Jobs';
import Details from './pages/Details';
import Favourites from './pages/Favourites';

import FavouriteProvider from './contexts/FavouriteContext/FavouriteProvider';

const Router = () => {
  return (
    <FavouriteProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="Home"
            component={StackNavigator}
            options={{headerShown: false, drawerActiveTintColor: '#f44336'}}
          />
          <Drawer.Screen
            name="Favourites"
            component={Favourites}
            options={{
              headerTintColor: '#f44336',
              headerTitleAlign: 'center',
              drawerActiveTintColor: '#f44336',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavouriteProvider>
  );
};

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{
          headerTintColor: '#f44336',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              name="menu"
              size={25}
              style={{color: '#f44336'}}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={({route}) => ({
          headerTintColor: '#f44336',
          headerTitleAlign: 'center',
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default Router;
