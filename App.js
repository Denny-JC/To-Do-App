import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { Button, Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TaskForm from './src/taskForm';
import TaskList from './src/taskList';
const logo = require('./assets/logo.png');
function HomeScreen({ navigation }) {
  return (
    <View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5}}>
      <View style={{ justifyContent:'flex-start', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
      <Ionicons
    name='checkmark-done'
    color='white'
    size={400}
  />
      </View>
      <View style={styles.container}>
    <Image
        style={styles.logo}
        source={logo}
    />
</View>
      <Text style={{fontSize: 30, textAlign: 'center'}}> Welcome to Clock-a-Do{"\n\n"}
      </Text>
      <Text style={{fontSize: 25, textAlign: 'center'}}> Never miss out your schedule{"\n"} </Text>
      <Button color="#ff5c5c"
        height
        title="Let's Go!"
        onPress={() => navigation.navigate('TaskForm')}
      />
     
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    
    <View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5}}>
      <View style={{ justifyContent:'center', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
      <Ionicons
    name='checkmark-done'
    color='white'
    size={400}
  />
      </View>
        <View style={{justifyContent:'flex-start',width: 400,flex:1,flexDirection: 'column', margin: 1}} >
        <Button 
        title="Change Theme"
        onPress={() => navigation.navigate('SetData')}/>      
        <Button 
        title="Reach Me"
        onPress={() => Linking.openURL('https://www.linkedin.com/in/denny-j-chellappa-150a1219b/')}/>
        <Button 
        size
        title="About App"
       
        onPress={() => navigation.navigate('AboutData')}/>
        </View>
        </View>
      
  );
}

function SettingData({ navigation }) {
  return (
<View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5}}>
      <View style={{ justifyContent:'center', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
      <Ionicons
    name='checkmark-done'
    color='white'
    size={400}
  />
  <View>
      <Text>The Details are listed here</Text>
      <Button color="#ff5c5c"
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
  </View>
  </View>
</View>
  );
}
function AccData({ navigation }) {
  return (
    <View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5}}>
    <View style={{ justifyContent:'center', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
    <Ionicons
  name='checkmark-done'
  color='white'
  size={400}
/>
<View>
    <Text>The Details are listed here</Text>
    <Button color="#ff5c5c"
      title="Go to Settings"
      onPress={() => this. props. navigation. navigate('https://github.com/Denny-JC')}
    />
</View>
</View>
</View>
);
}

function AboutData({ navigation }) {
  return (
    <View style={{ justifyContent:'center', flex:1,flexDirection: 'column',margin: 5}}>
      <View style={{ justifyContent:'center', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
      <Ionicons
    name='checkmark-done'
    color='white'
    size={400}
  />
  <View style={{ justifyContent:'center', flex:2,flexDirection: 'column', alignItems: 'center', margin: 1,position: 'absolute'}}>
      <Text>Clock-a-Do{"\n"}
      Version 1.0{"\n"}
      Developed by Denny J C{"\n"}
      </Text>
      <Button color="#ff5c5c"
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
  </View>
  </View>
</View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}
      options={{
          title: 'Clock-a-Do',
          headerStyle: {
            backgroundColor: '#FF2400'
          },
        }} />
      <HomeStack.Screen
        name="TaskForm"
        component={TaskForm}
        options={{
          title: 'Clock-a-Do',
          headerStyle: {
            backgroundColor: '#FF2400'
          },
        }}
      />
      <HomeStack.Screen
        name="TaskList"
        component={TaskList}
        options={{
          title: 'To-Do List',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: '#FF2400'
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} 
      options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#FF2400'
          },
        }}
      />
      <SettingsStack.Screen name="SetData" component={SettingData}
      options={{
        title: 'Clock-a-Do',
        headerStyle: {
          backgroundColor: '#FF2400'
        },
      }} />
      <SettingsStack.Screen name="AccData" component={AccData} 
      options={{
        title: 'Clock-a-Do',
        headerStyle: {
          backgroundColor: '#FF2400'
        },
      }}/>
      <SettingsStack.Screen name="AboutData" component={AboutData} 
      options={{
        title: 'Clock-a-Do',
        headerStyle: {
          backgroundColor: '#FF2400'
        },
      }}/>
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen}
        options={{
          tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"red":"pink"}}>Home</Text>),
          tabBarIcon: ({ focused,color, size }) => (
            <Ionicons name="home" color={focused?"red":"pink"} size={size} />
          ),
        }}     
         />
        <Tab.Screen name="Settings" component={SettingsStackScreen}
       options={{
        tabBarLabel:({ focused,color })=>(<Text style={{color:focused?"red":"pink"}}>Settings</Text>),
        tabBarIcon: ({ focused,color, size }) => (
          <Ionicons name="settings" color={focused?"red":"pink"} size={size} />
        ),
      }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderColor: 'lightsalmon',
    borderWidth: 5,
    borderRadius: 100,
  },
});
