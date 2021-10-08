import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.logoImgView}>
            <Image source = {require('../assets/girlimg.jpg')} style={styles.logoImg} />
          </View>
          
      <View style={styles.mainContainer}>
      <View style={styles.logInView}>
                <Text style={styles.text}>Log-in</Text>
             </View>
        <ScrollView>
               

              <View style={styles.input_txt_View}>
                <Text style={styles.input_heading}>Email</Text>
                <TextInput style = {styles.input}
                   underlineColorAndroid = "transparent"
                   placeholder = "Enter Your Email"
                   keyboardType={'email-address'}
                   placeholderTextColor="lightgray"
                   autoCapitalize = "none"
                  
                />
             </View>

           <View style={styles.input_txt_View}>
                <Text style={styles.input_heading}>Password</Text>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter Your Password"
                    placeholderTextColor="lightgray"
                    keyboardType={'default'}
                    secureTextEntry={true}
                    autoCapitalize = "none"
               />
          </View> 
          
           <View style={styles.forgotTxtView}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>forgot password</Text>
              </TouchableOpacity>
                <View style={styles.btn_View}>
                  <TouchableOpacity><Text style={styles.btn_txt}>Login</Text></TouchableOpacity>
                </View>
          </View>

           <View style={{width:'80%',alignSelf:'center',marginTop:5,height:60,backgroundColor:' ',}}>
                <View style={{flexDirection:'row',height:28,justifyContent:'center'}}>
                    <Text style={{alignSelf:'center',paddingTop:5}}>Don't have an account?</Text>
                    <TouchableOpacity><Text style={{paddingTop:5,marginLeft:5,fontWeight:'bold'}}>Create One</Text></TouchableOpacity>
                </View>
                <View style={styles.footerContainer}>
                  <View style={styles.footerView}></View>
                  <Text style={styles.signWithTxt}>Sign With</Text>
                  <View style={styles.footerView}></View>
                </View>      
          </View>

          <View style={styles.footerImgView}>
               <TouchableOpacity><Image source = {require('../assets/gmail_logo.jpg')} style={styles.gmailimgBtn}/></TouchableOpacity> 
               <TouchableOpacity><Image source = {require('../assets/fbl_ogo.png')} style={styles.fbimgBtn} /></TouchableOpacity> 
              
          </View>
            
      </ScrollView>
    </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    
  },
  logoImgView:{
    flex:2
  },
  logoImg:{
    marginTop:45,
  },
  mainContainer:{
    flex:5,
  },

  logInView:{
    height:60 
  },
  text:{
    fontSize:28,
    fontWeight:'bold',
    marginLeft:30,
    top:10,
    fontWeight:'bold',
    fontFamily:'serif'
  },

  input_txt_View:{
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
  forgotTxtView:{
    height:90
  },
  forgotText:{
    marginLeft:200,
    fontWeight:'bold',
    bottom:8
  },
  btn_View:{
    height:'60%',
    width:'80%',
    backgroundColor:'black',
    alignSelf:'center',
    borderRadius:18,
    marginTop:10
  },
  btn_txt:{
    textAlign:'center',
    color:'white',
    padding:12,
    fontSize:20,
    fontWeight:'bold'
  },
  footerContainer:{
    flexDirection:'row',
    marginTop:18
  },
  footerView:{
    width:110,
    height:0,
    borderWidth:0.5,
    marginTop:10
  },
  signWithTxt:{
    alignSelf:'center',
    marginLeft:5,
    fontWeight:'600'
  },
  footerImgView:{
    height:75,width:'80%',alignSelf:'center',alignItems:'center',justifyContent:'center',flexDirection:'row',marginTop:10
  },
  gmailimgBtn:{
    height:45,
  },
  fbimgBtn:{
    height:45,
    marginLeft:8
  }


  });
