import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';

export default function NumberScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <View style={styles.content}>
            <Text style={styles.title}>Enter your mobile number</Text>
            
            <Text style={styles.label}>Mobile Number</Text>
            
            <View style={styles.inputContainer}>
              <Text style={styles.flag}>🇧🇩</Text>
              <Text style={styles.prefix}>+880</Text>
              <TextInput 
                style={styles.input} 
                autoFocus={true} 
                keyboardType="phone-pad" 
              />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.fab} 
            onPress={() => navigation.navigate('Verification')}
          >
            <Text style={styles.fabIcon}>›</Text>
          </TouchableOpacity>
        </View>
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
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20, 
  },
  backButton: {
    marginTop: 10,
    marginBottom: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 40,
    color: '#181725',
    lineHeight: 40,
  },
  content: {
    flex: 1,
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#181725',
    marginBottom: 30 
  },
  label: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 10 
  },
  inputContainer: { 
    flexDirection: 'row', 
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10 
  },
  flag: { 
    fontSize: 24, 
    marginRight: 10 
  },
  prefix: { 
    fontSize: 18, 
    color: '#181725',
    marginRight: 10 
  },
  input: { 
    flex: 1, 
    fontSize: 18,
    color: '#181725',
  },
  fab: { 
    position: 'absolute', 
    bottom: 30, 
    right: 20, 
    backgroundColor: '#53B175', 
    width: 65, 
    height: 65, 
    borderRadius: 35, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  fabIcon: { 
    color: 'white', 
    fontSize: 35, 
    fontWeight: 'bold',
    lineHeight: 38,
    marginLeft: 2, 
  }
});