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

export default function VerificationScreen({ navigation }) {
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
            <Text style={styles.title}>Enter your 4-digit code</Text>
            <Text style={styles.label}>Code</Text>
            
            <TextInput 
              style={styles.input} 
              placeholder="- - - -" 
              placeholderTextColor="#B3B3B3"
              keyboardType="number-pad" 
              maxLength={4} 
              autoFocus={true} 
            />
          </View>

          <View style={styles.bottomRow}>
            <TouchableOpacity>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.fab} 
              onPress={() => navigation.navigate('SelectLocation')}
            >
              <Text style={styles.fabIcon}>›</Text>
            </TouchableOpacity>
          </View>
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
  input: { 
    fontSize: 24, 
    color: '#181725',
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10, 
    letterSpacing: 8, 
  },
  bottomRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 10, 
  },
  resendText: { 
    color: '#53B175', 
    fontSize: 18,
    fontWeight: '500',
  },
  fab: { 
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