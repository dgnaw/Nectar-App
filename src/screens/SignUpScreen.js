import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function SignUpScreen({ navigation }) {
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
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Enter your credentials to continue</Text>

            <Text style={styles.label}>Username</Text>
            <TextInput 
              style={styles.input} 
              defaultValue="Afsar Hossen Shuvo" 
              placeholderTextColor="#B3B3B3"
            />

            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWithIconContainer}>
              <TextInput 
                style={styles.inputWithIcon} 
                defaultValue="imshuvo97@gmail.com" 
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <MaterialIcons name="check" size={24} color="#53B175" />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWithIconContainer}>
              <TextInput 
                style={styles.inputWithIcon} 
                secureTextEntry={!showPassword} 
                defaultValue="********" 
              />
              <TouchableOpacity 
                style={styles.iconButton} 
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? "visibility" : "visibility-off"} 
                  size={22} 
                  color="#7C7C7C" 
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.terms}>
              By continuing you agree to our{' '}
              <Text style={styles.link}>Terms of Service</Text> and{' '}
              <Text style={styles.link}>Privacy Policy.</Text>
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Login</Text>
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
  inputWithIconContainer: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  inputWithIcon: { 
    flex: 1, 
    fontSize: 18,
    color: '#181725',
  },
  iconButton: {
    padding: 5,
  },
  terms: { 
    fontSize: 14, 
    color: '#7C7C7C', 
    lineHeight: 22,
    marginTop: -10, 
  },
  link: { 
    color: '#53B175',
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  loginText: { 
    fontSize: 14, 
    color: '#181725',
    fontWeight: '600',
  },
  loginLink: { 
    color: '#53B175', 
    fontWeight: 'bold',
    fontSize: 14, 
  }
});