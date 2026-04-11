import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';

export default function SelectLocationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <Image 
          source={require('../../assets/map.png')} 
          style={styles.illustration}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Select Your Location</Text>
          <Text style={styles.subtitle}>
            Switch on your location to stay in tune with{"\n"}what's happening in your area
          </Text>

          <View style={styles.dropdownSection}>
            <Text style={styles.label}>Your Zone</Text>
            <TouchableOpacity style={styles.dropdownBox}>
              <Text style={styles.dropdownValue}>Banasree</Text>
              <Text style={styles.chevronIcon}>˅</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dropdownSection}>
            <Text style={styles.label}>Your Area</Text>
            <TouchableOpacity style={styles.dropdownBox}>
              <Text style={styles.dropdownPlaceholder}>Types of your area</Text>
              <Text style={styles.chevronIcon}>˅</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  backButton: {
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 40,
    color: '#181725',
    lineHeight: 40,
  },
  illustration: {
    width: 220,
    height: 170,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  content: {
    flex: 1,
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#181725',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    textAlign: 'center', 
    marginBottom: 40,
    lineHeight: 22,
  },
  dropdownSection: {
    marginBottom: 30,
  },
  label: { 
    fontSize: 16, 
    color: '#7C7C7C', 
    marginBottom: 10,
    fontWeight: '500',
  },
  dropdownBox: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1, 
    borderBottomColor: '#E2E2E2', 
    paddingBottom: 15,
  },
  dropdownValue: { 
    fontSize: 18,
    color: '#181725',
  },
  dropdownPlaceholder: {
    fontSize: 18,
    color: '#B3B3B3',
  },
  chevronIcon: {
    fontSize: 18,
    color: '#181725',
    fontWeight: '300',
  },
  submitButton: { 
    backgroundColor: '#53B175', 
    width: '100%', 
    paddingVertical: 18, 
    borderRadius: 15, 
    alignItems: 'center', 
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  submitButtonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  }
});