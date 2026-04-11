import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';

export default function NumberScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text style={styles.label}>Mobile Number</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+880</Text>
        <TextInput style={styles.input} autoFocus keyboardType="phone-pad" />
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Verification')}>
        <Text style={styles.fabIcon}>{'>'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  label: { fontSize: 16, color: '#7C7C7C', marginBottom: 10 },
  inputContainer: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#E2E2E2', paddingBottom: 10 },
  prefix: { fontSize: 18, marginRight: 10, alignSelf: 'center' },
  input: { flex: 1, fontSize: 18 },
  fab: { position: 'absolute', bottom: 40, right: 20, backgroundColor: '#53B175', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  fabIcon: { color: 'white', fontSize: 24, fontWeight: 'bold' }
});