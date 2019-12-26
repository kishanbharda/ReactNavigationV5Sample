import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/Home';
import NearBy from './src/NearBy';
import Settings from './src/Settings';
import Products from './src/Products';
import Categories from './src/Categories';
import PlaceDetail from './src/PlaceDetail';

const CategoriesStack = createStackNavigator();
const CategoriesStackNavigator = () => {
  return (
    <CategoriesStack.Navigator initialRouteName="Categories">
      <CategoriesStack.Screen
        name="Categories"
        component={Categories}
        options={({navigation}) => {
          return {
            headerLeft: ({tintColor}) => (
              <TouchableOpacity
                style={{paddingHorizontal: 10}}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} color={tintColor} />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </CategoriesStack.Navigator>
  );
};

const SettingStack = createStackNavigator();
const SettingsStackNavigator = () => {
  return (
    <SettingStack.Navigator initialRouteName="Settings">
      <SettingStack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => {
          return {
            headerLeft: ({tintColor, canGoBack}) => (
              <TouchableOpacity
                style={{paddingHorizontal: 10}}
                onPress={() => navigation.openDrawer()}>
                <Icon
                  name={canGoBack ? 'arrow-back' : 'bars'}
                  size={24}
                  color={tintColor}
                />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <SettingStack.Screen name="Categories" component={Categories} />
    </SettingStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="none" initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Products" component={Products} />
    </HomeStack.Navigator>
  );
};

const NearByStack = createStackNavigator();
const NearByStackNavigator = () => {
  return (
    <NearByStack.Navigator headerMode="none" initialRouteName="NearBy">
      <NearByStack.Screen name="NearBy" component={NearBy} />
    </NearByStack.Navigator>
  );
};

const Tab = createMaterialTopTabNavigator();
const DashboardTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="Home"
      tabBarOptions={{
        showIcon: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Near By"
        component={NearByStackNavigator}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon name="map" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardTabNavigator}
        options={({navigation}) => {
          return {
            headerLeft: ({tintColor}) => (
              <TouchableOpacity
                style={{paddingHorizontal: 10}}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={24} color={tintColor} />
              </TouchableOpacity>
            ),
            headerRight: ({tintColor}) => (
              <TouchableOpacity
                style={{marginHorizontal: 10}}
                onPress={() => {
                  navigation.navigate('Settings');
                }}>
                <Icon name="cog" size={22} color={tintColor} />
              </TouchableOpacity>
            ),
          };
        }}
      />
      <Stack.Screen name="Categories" component={CategoriesStackNavigator} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetail} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const Router = () => {
  return (
    <NavigationNativeContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen name="Dashboard" component={DashboardStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
        <Drawer.Screen name="Categories" component={CategoriesStackNavigator} />
      </Drawer.Navigator>
    </NavigationNativeContainer>
  );
};

export default Router;
