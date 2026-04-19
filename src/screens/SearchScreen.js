import React, { useState, useMemo } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  FlatList,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import StudentInfo from '../components/StudentInfo';
import BottomTabBar from '../components/BottomTabBar';
import { productsData } from '../data/data';

const GREEN_COLOR = '#53B175';
const TEXT_COLOR_MAIN = '#181725';
const TEXT_COLOR_DETAILS = '#7C7C7C';

// THÊM route VÀO PROPS ĐỂ NHẬN DỮ LIỆU
export default function SearchScreen({ route, navigation }) {
  
  // Lấy từ khóa được truyền từ ExploreScreen sang (nếu có). Mặc định là chuỗi rỗng.
  const initialKeyword = route.params?.keyword || '';
  
  // Dùng initialKeyword để set giá trị ban đầu cho thanh search
  const [searchText, setSearchText] = useState(initialKeyword);

  const filteredProducts = useMemo(() => {
    if (!searchText.trim()) return productsData; 
    return productsData.filter(product => 
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const renderProductCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      onPress={() => navigation.navigate('ProductDetail')} 
      activeOpacity={0.8}
    >
      <Image source={item.image} style={styles.productCardImage} resizeMode="contain" />
      <Text style={styles.productCardName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.productCardDetails}>{item.details}</Text>
      
      <View style={styles.productCardBottom}>
        <Text style={styles.productCardPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.productCardAddButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color={TEXT_COLOR_MAIN} />
          <TextInput 
            style={styles.searchInput} 
            value={searchText}
            onChangeText={setSearchText} 
            placeholder="Search Store" 
            placeholderTextColor="#B3B3B3"
            autoFocus={true} 
          />
          {searchText.length > 0 && (
            <TouchableOpacity 
              style={styles.clearButton} 
              onPress={() => {
                setSearchText('');
                Keyboard.dismiss(); 
              }}
            >
              <Feather name="x" size={14} color="white" />
            </TouchableOpacity>
          )}
        </View>

        {/* NÚT FILTER ĐÃ ĐƯỢC GẮN ĐIỀU HƯỚNG TỚI MÀN HÌNH FILTERS */}
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filters')}
        >
          <Feather name="sliders" size={24} color={TEXT_COLOR_MAIN} />
        </TouchableOpacity>
      </View>

      {filteredProducts.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found for "{searchText}"</Text>
        </View>
      ) : (
        <FlatList 
          data={filteredProducts}
          renderItem={renderProductCard}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.gridContent}
          columnWrapperStyle={styles.rowWrapper}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag" 
        />
      )}

      <BottomTabBar activeTab="Explore" />
    </SafeAreaView>
  );
}

// CÁC STYLES GIỮ NGUYÊN (copy styles cũ vào đây là được)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCFCFC' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 10, marginBottom: 20 },
  searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F2F3F2', borderRadius: 15, paddingHorizontal: 15, paddingVertical: 12, marginRight: 15 },
  searchInput: { flex: 1, fontSize: 16, color: TEXT_COLOR_MAIN, marginLeft: 10, fontWeight: '600' },
  clearButton: { backgroundColor: '#C4C4C4', width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  filterButton: { padding: 5 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: TEXT_COLOR_DETAILS, fontWeight: '500' },
  gridContent: { paddingHorizontal: 20, paddingBottom: 110 },
  rowWrapper: { justifyContent: 'space-between', marginBottom: 15 },
  productCard: { width: '47%', padding: 15, backgroundColor: 'white', borderRadius: 18, borderWidth: 1, borderColor: '#E2E2E2', display: 'flex', flexDirection: 'column' },
  productCardImage: { width: 80, height: 80, alignSelf: 'center', marginBottom: 15 },
  productCardName: { fontSize: 16, fontWeight: 'bold', color: TEXT_COLOR_MAIN, marginBottom: 5, minHeight: 40 },
  productCardDetails: { fontSize: 14, color: TEXT_COLOR_DETAILS, marginBottom: 15 },
  productCardBottom: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  productCardPrice: { fontSize: 18, fontWeight: 'bold', color: TEXT_COLOR_MAIN },
  productCardAddButton: { backgroundColor: GREEN_COLOR, width: 45, height: 45, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
});