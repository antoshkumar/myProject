import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native';

export default function Registration() {
  return (
    <View style={styles.container}>
            <View style={styles.logoImgView}>
                <Image source = {require('../assets/girlimg.jpg')} style={styles.logoImg} />  
          </View>
        
          <View style={styles.mainContainer}>
              <View style={styles.signUptxt_View}>
                <Text style={styles.text}>Sign-up</Text>
              </View>
            <ScrollView>
              
              <View style={styles.avatar_View}>
              <Image source = {require('../assets/avtar_img.jpg')} style={styles.avtarImg} /> 
              </View>
              <View style={styles.inputTxt_View}>
                <Text style={styles.input_heading}>Name</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter Your Name"
                    placeholderTextColor="lightgray"
                    autoCapitalize = "none"
               />
              </View>

              <View style={styles.inputTxt_View}>
                <Text style={styles.input_heading}>Mobile</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter Your Mobile Number"
                    placeholderTextColor="lightgray"
                    autoCapitalize = "none"
               />
              </View>
              <View style={styles.inputTxt_View}>
                <Text style={styles.input_heading}>Email</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter Your Email"
                    placeholderTextColor="lightgray"
                    autoCapitalize = "none"
               />
              </View>
              <View style={styles.inputTxt_View}>
                <Text style={styles.input_heading}>Password</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter Your Password"
                    placeholderTextColor="lightgray"
                    autoCapitalize = "none"
               />
              </View>
              <View style={styles.inputTxt_View}>
                <Text style={styles.input_heading}> Confirm Password</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Confirm Your Password"
                    placeholderTextColor="lightgray"
                    autoCapitalize = "none"
               />
              </View>
              <View style={styles.btn_View}>
                  <TouchableOpacity><Text style={styles.btn_txt}>Login</Text></TouchableOpacity>
                </View>
              
                <View style={styles.footerView}>
                    <Text style={styles.footerTxt}>already have account?</Text>
                    <TouchableOpacity><Text style={styles.footerSignInTxt}>Sign in</Text></TouchableOpacity>
                </View>
              
              </ScrollView>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  logoImgView:{
    flex:2
  },
  logoImg:{
    marginTop:45,
  },

  mainContainer:{
    flex:5,
    backgroundColor:'#F0FFF0'
  },
  signUptxt_View:{
    height:80,
    marginTop:8
  },
  text:{
    fontSize:28,
    fontWeight:'bold',
    marginLeft:30,
    top:10,
    fontWeight:'bold',
    fontFamily:'serif'
  },
  avatar_View:{
    height:90
  },
  avtarImg:{
    alignSelf:'center',
    bottom:2
  },
  inputTxt_View:{
    height:85
  },
  input_heading:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:30
  },
  input:{
    height:40,
    width:'80%',
    marginTop:5,
    marginLeft:30,
    borderWidth:2,
    borderColor:'gray',
    borderLeftWidth:0,
    borderTopWidth:0,
    borderRightWidth:0

  },
  btn_View:{
    height:50,
    width:'80%',
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:18,
    marginTop:8
  },
  btn_txt:{
    textAlign:'center',
    color:'white',
    padding:10,
    fontSize:20,
    fontWeight:'bold'
  },
  footerView:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10
  },
  footerTxt:{
    alignSelf:'center',
    paddingTop:5
  },
  footerSignInTxt:{
    paddingTop:12,
    marginLeft:5,
    fontWeight:'bold'
  }
});


