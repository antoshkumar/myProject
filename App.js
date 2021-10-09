
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import signUp from './components/signUp'
import signIn from './components/signIn'
import videoplayer from './components/videoPlayer';

import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
// import videoPlayer from './components/videoPlayer';
 


 function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button 
        title="signUp"
        onPress={() => navigation.navigate('signUp')}
      />
       <Button color="pink" 
        title="sig-in"
        onPress={() => navigation.navigate('signIn')}
      /> 
       <Button color="blue" 
        title="Video player"
        onPress={() => navigation.navigate('videoPlayer')}
      />
    

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="signUp" component={signUp} options={{title:'sign_Up'}} />
         <Stack.Screen name="signIn" component={signIn} options={{title:'sign_In'}} />
         <Stack.Screen name="videoPlayer" component={videoplayer} options={{title:'VideoPlayer'}} />
     </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
     justifyContent: 'center',
     flexDirection:'row'
  }
})
