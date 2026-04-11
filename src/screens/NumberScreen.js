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
    <SafeAreaView style={styles.safeArea}>
      <StudentInfo />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Enter your mobile number</Text>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.prefix}>+880</Text>
            <TextInput style={styles.input} autoFocus keyboardType="phone-pad" />
          </View>
        </View>

        <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Verification')}>
          <Text style={styles.fabIcon}>{'>'}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 60 
  },
  content: { 
    flex: 1 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 30 
  },
  label: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 10 
  },
  inputContainer: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 10 
  },
  prefix: { 
    fontSize: 18, 
    marginRight: 10, 
    alignSelf: 'center' 
  },
  input: { 
    flex: 1, 
    fontSize: 18 
  },
  fab: { 
    alignSelf: 'flex-end',
    marginBottom: 10, 
    backgroundColor: '#53B175', 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
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
    fontSize: 24, 
    fontWeight: 'bold' 
  }
});