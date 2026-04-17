import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';
import { MaterialIcons } from '@expo/vector-icons';
export default function LoginScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.logoContainer}>
            <Image 
              source={require('../../assets/red_carrot.png')} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Loging</Text>
            <Text style={styles.subtitle}>Enter your emails and password</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              defaultValue="imshuvo97@gmail.com" 
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput 
                style={styles.inputPass} 
                secureTextEntry={!showPassword} 
                defaultValue="********" 
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons 
                  name={showPassword ? "visibility" : "visibility-off"} 
                  size={22}
                  color="#7C7C7C" 
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signupLink}>Signup</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingTop: 30, 
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60, 
  },
  logo: {
    width: 50, 
    height: 55,
  },
  content: {
    flex: 1,
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#181725',
    marginBottom: 10 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 40 
  },
  label: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 10,
    fontWeight: '500',
  },
  input: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10, 
    fontSize: 18,
    color: '#181725',
    marginBottom: 30, 
  },
  passwordContainer: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10,
    alignItems: 'center',
  },
  inputPass: { 
    flex: 1, 
    fontSize: 18,
    color: '#181725',
  },
  eyeIcon: { 
    fontSize: 20,
    color: '#7C7C7C',
  },
  forgot: { 
    textAlign: 'right', 
    color: '#181725', 
    marginTop: 20, 
    fontSize: 14,
    fontWeight: '500',
  },
  button: { 
    backgroundColor: '#53B175', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  signupText: { 
    fontSize: 14, 
    color: '#181725',
    fontWeight: '600',
  },
  signupLink: { 
    color: '#53B175', 
    fontWeight: 'bold',
    fontSize: 14, 
  }
});