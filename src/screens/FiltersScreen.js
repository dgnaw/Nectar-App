import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import StudentInfo from '../components/StudentInfo';

const GREEN_COLOR = '#53B175';
const TEXT_COLOR_MAIN = '#181725';
const TEXT_COLOR_MUTED = '#7C7C7C';

const CheckboxItem = ({ label, isChecked, onPress }) => (
  <TouchableOpacity style={styles.checkboxRow} onPress={onPress} activeOpacity={0.7}>
    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
      {isChecked && <Feather name="check" size={16} color="white" />}
    </View>
    <Text style={[styles.checkboxLabel, isChecked && styles.checkboxLabelChecked]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function FiltersScreen({ navigation }) {
  const [categories, setCategories] = useState({
    'Eggs': true,
    'Noodles & Pasta': false,
    'Chips & Crisps': false,
    'Fast Food': false,
  });

  const [brands, setBrands] = useState({
    'Individual Collection': false,
    'Cocola': true,
    'Ifad': false,
    'Kazi Farms': false,
  });

  const toggleCategory = (key) => {
    setCategories(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleBrand = (key) => {
    setBrands(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Feather name="x" size={28} color={TEXT_COLOR_MAIN} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <Text style={styles.sectionTitle}>Categories</Text>
          {Object.keys(categories).map((key) => (
            <CheckboxItem 
              key={key} 
              label={key} 
              isChecked={categories[key]} 
              onPress={() => toggleCategory(key)} 
            />
          ))}

          <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Brand</Text>
          {Object.keys(brands).map((key) => (
            <CheckboxItem 
              key={key} 
              label={key} 
              isChecked={brands[key]} 
              onPress={() => toggleBrand(key)} 
            />
          ))}

        </ScrollView>

        <View style={styles.bottomBar}>
          <TouchableOpacity 
            style={styles.applyButton} 
            onPress={() => navigation.goBack()} 
          >
            <Text style={styles.applyButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  closeButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
  },
  placeholder: {
    width: 38, 
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F2F3F2', 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 100, 
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: TEXT_COLOR_MAIN,
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#C4C4C4',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: GREEN_COLOR,
    borderColor: GREEN_COLOR,
  },
  checkboxLabel: {
    fontSize: 16,
    color: TEXT_COLOR_MUTED,
  },
  checkboxLabelChecked: {
    color: GREEN_COLOR,
    fontWeight: '500',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 30, 
    paddingTop: 10,
    backgroundColor: '#F2F3F2',
  },
  applyButton: {
    backgroundColor: GREEN_COLOR,
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});