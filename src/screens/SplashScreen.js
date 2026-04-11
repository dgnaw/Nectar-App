import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';
export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={styles.content}>
        <StudentInfo />
        <Image 
          source={require('../../assets/Logo.png')} 
          style={styles.logo}
          resizeMode="contain" 
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#53B175', justifyContent: 'center', alignItems: 'center' },
  studentTag: { position: 'absolute', top: 20, alignSelf: 'center', fontSize: 12, color: 'white', zIndex: 10, fontWeight: 'bold' },
  content: { alignItems: 'center', width: '80%', height: '40%', justifyContent: 'center' },
  logo: {
    width: 200, 
    height: 100, 
  },
});