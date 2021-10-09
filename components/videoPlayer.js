import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Video, AVPlaybackStatus } from 'expo-av';



export default function videoPlayer() {
    state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
                  
      ]
    };
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  
  return (
    <View style={styles.container}>
        <View style={styles.slider_View}>
            <SliderBox images={state.images}
             autoplay  
             circleLoop
            />
        </View> 

 {/* prime video........................................         */}
       
          <View style={styles.prime_View}>
                <View style={styles.primeText_View}>
                    <Text style={styles.primeTxt}>Prime Video</Text>
                </View>
                <Video
                     ref={video}
                     style={styles.video}
                     source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                             }}
                     useNativeControls
                     resizeMode="contain"
                     isLooping
                     onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
          </View>
      
{/* cartoo video........................................... */}
                <View style={styles.cartoon_View}>
                        <View style={styles.cartoonTxt_View}>
                          <Text style={styles.primeTxt}>Cartoon Video</Text>
                        </View>
                        <Video
                            ref={video}
                            style={styles.video}
                            source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                             }}
                            useNativeControls
                            resizeMode="contain"
                            // isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                       />
               </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    // alignItems: 'center',
     justifyContent: 'center',
  },
  slider_View:{
    flex:1,
  },
  prime_View:{
    flex:1,
    
  },
  
  primeText_View:{
    height:50,
    alignSelf:'center',
    width:'90%',
    backgroundColor:'pink'
  },
  primeTxt:{
    fontSize:25,
    padding:8,
    fontWeight:'bold'
  },
  cartoon_View:{
    flex:1,
  },
  cartoonTxt_View:{
    height:50,
    width:'90%',
    alignSelf:'center',
    backgroundColor:'pink',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 180,
  },
});
