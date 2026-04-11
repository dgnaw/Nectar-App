import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/onboarding.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <StudentInfo />
      </SafeAreaView>
      
      <View style={styles.contentContainer}>
        <Image 
          source={require('../../assets/carrot_icon.png')} 
          style={styles.carrotIcon}
          resizeMode="contain" 
        />
        
        <Text style={styles.title}>Welcome{"\n"}to our store</Text>
        
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('SocialSignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#000', 
  },
  safeArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingHorizontal: 30, 
    paddingBottom: 50, 
  },
  carrotIcon: {
    width: 60, 
    height: 60,
    marginBottom: 15, 
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 52, 
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'normal',
  },
  button: {
    backgroundColor: '#53B175', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});