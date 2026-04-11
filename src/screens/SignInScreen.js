import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <StudentInfo />
      
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        <Image 
          source={require('../../assets/signIn_background.png')} 
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Get your groceries{"\n"}with nectar</Text>
          
          <TouchableOpacity style={styles.phoneInputContainer} onPress={() => navigation.navigate('Number')}>
            <Text style={styles.flag}>🇧🇩</Text>
            <Text style={styles.prefix}>+880</Text>
            <TextInput style={styles.input} editable={false} pointerEvents="none" />
          </TouchableOpacity>

          <Text style={styles.orText}>Or connect with social media</Text>

          <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#5383EC' }]}>
            <View style={styles.iconContainer}>
              <Text style={styles.socialIconText}>G</Text>
            </View>
            <Text style={styles.btnText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialBtn, { backgroundColor: '#4A66AC', marginTop: 20 }]}>
            <View style={styles.iconContainer}>
              <Text style={[styles.socialIconText, { fontWeight: 'bold' }]}>f</Text>
            </View>
            <Text style={styles.btnText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerImage: {
    width: '100%',
    height: 380, 
  },
  contentContainer: {
    paddingHorizontal: 25,
    paddingBottom: 40,
    marginTop: -20, 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: 30,
    lineHeight: 35,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    paddingBottom: 15,
    marginBottom: 40,
  },
  flag: {
    fontSize: 28,
    marginRight: 10,
  },
  prefix: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
    color: '#030303',
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    color: '#828282',
    marginBottom: 30,
    fontSize: 14,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  socialIconText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  btnText: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingRight: 30,
  }
});