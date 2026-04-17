import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 
import StudentInfo from '../components/StudentInfo';
import BottomTabBar from '../components/BottomTabBar';

const TEXT_COLOR_MAIN = '#181725';

const categories = [
  { id: '1', name: 'Fresh Fruits\n& Vegetable', image: require('../../assets/fruits.png'), bgColor: '#EEF7F1', borderColor: '#53B175' },
  { id: '2', name: 'Cooking Oil\n& Ghee', image: require('../../assets/oil.png'), bgColor: '#FEF6ED', borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', image: require('../../assets/meat.png'), bgColor: '#FDE8E4', borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: require('../../assets/bakery.png'), bgColor: '#F4EBF7', borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: require('../../assets/dairy.png'), bgColor: '#FFF8E5', borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', image: require('../../assets/beverages.png'), bgColor: '#EDF7FC', borderColor: '#B7DFF5' },
];

export default function ExploreScreen({ navigation }) {

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.card, 
        { backgroundColor: item.bgColor, borderColor: item.borderColor }
      ]}
      activeOpacity={0.7}
      onPress={() => {
        // Xử lý chuyển hướng dựa trên id danh mục
        if (item.id === '6') {
          navigation.navigate('Beverages');
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <Text style={styles.headerTitle}>Find Products</Text>

      <View style={styles.searchBarContainer}>
        <Feather name="search" size={20} color={TEXT_COLOR_MAIN} />
        <TextInput 
          style={styles.searchBarInput} 
          placeholder="Search Store" 
          placeholderTextColor="#B3B3B3"
        />
      </View>

      <FlatList 
        data={categories}
        renderItem={renderCategoryCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        columnWrapperStyle={styles.rowWrapper}
        showsVerticalScrollIndicator={false}
      />

      <BottomTabBar activeTab="Explore" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: TEXT_COLOR_MAIN, textAlign: 'center', marginTop: 10, marginBottom: 20 },
  searchBarContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 12, marginHorizontal: 20, marginBottom: 20 },
  searchBarInput: { flex: 1, fontSize: 16, color: TEXT_COLOR_MAIN, marginLeft: 10 },
  gridContent: { paddingHorizontal: 20, paddingBottom: 110 },
  rowWrapper: { justifyContent: 'space-between', marginBottom: 15 },
  card: { flex: 1, height: 190, borderRadius: 18, borderWidth: 1, padding: 15, alignItems: 'center', justifyContent: 'center', maxWidth: '47%' },
  cardImage: { width: 90, height: 70, marginBottom: 20 },
  cardText: { fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR_MAIN, textAlign: 'center', lineHeight: 22 },
});