import * as React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton1 extends React.Component {
   playSound1 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'red',
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        width:150,
        height:75,
        alignItems:'center',
        marginLeft:90,
        marginTop:-200
      }}
      onPress={this.playSound1}
      >
      <Text>
      Mollard Duck 🔊 
      </Text>
      </TouchableOpacity>
    )
  }
}


class CuckooClockSoundButton extends React.Component {
   playCuckooClockSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://www.ichime.com/s/5-5.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'orange',
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        width:160,
        height:75,
        alignItems:'center',
        marginLeft:90,
        marginTop:30
      }}
      onPress={this.playCuckooClockSound}
      >
      <Text>
      Cuckoo Clock Sound 🔊 
      </Text>
      </TouchableOpacity>
    )
  }
}

class LionRoarSoundButton extends React.Component {
   playLionRoarSound = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://www.zar.co.za/sounds/lion.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'#FFCA2A',
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        width:160,
        height:75,
        alignItems:'center',
        marginLeft:90,
        marginTop:30
      }}
      onPress={this.playLionRoarSound}
      >
      <Text>
      Lion 🦁 Roar 🔊 
      </Text>
      </TouchableOpacity>
    )
  }
}

class SoundButton3 extends React.Component {
   playSound3 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'green',
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        width:170,
        height:75,
        alignItems:'center',
        marginLeft:90,
        marginTop:30
      }}
      onPress={this.playSound3}
      >
      <Text>
      Bird 🐦Chirping in Rain ☔ 
      </Text>
      </TouchableOpacity>
    )
  }
}

class SoundButton4 extends React.Component {
   playSound4 = async () => {
     await Audio.Sound.createAsync(
       {
         uri:'http://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3'
       },
       {
         shouldPlay:true
       }
     )
  }

  render() {
    return (
      <TouchableOpacity 
      style={{
        backgroundColor:'blue',
        borderRadius:50,
        borderWidth:1,
        justifyContent:'center',
        width:160,
        height:75,
        alignItems:'center',
        marginLeft:90,
        marginTop:30
      }}
      onPress={this.playSound4}
      >
      <Text>
       Bird 🐦Chirping 🔊 
      </Text>
      </TouchableOpacity>
    )
  }
}

class DJStopbutton extends React.Component {
  
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          marginLeft: 90,
          marginTop: 30,
          borderWidth: 5,
          alignItems: 'center',
          justifyContent: 'center',
          width: 170,
          height: 70,
          borderRadius: 50,
        }}
        onPress={() => { 

          Audio.setIsEnabledAsync(false);
        
         }}>

        <Text style={{
        fontWeight: 'bold',
        fontSize: 25
      }}>
          Stop Sound
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton1/>
        <CuckooClockSoundButton/>
        <LionRoarSoundButton/>
        <SoundButton3/>
        <SoundButton4/>
        <DJStopbutton/>
      </View>
    );
  }
}