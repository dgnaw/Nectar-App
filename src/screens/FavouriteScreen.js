import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import StudentInfo from '../components/StudentInfo';
import BottomTabBar from '../components/BottomTabBar';

const GREEN_COLOR = '#53B175';
const TEXT_MAIN = '#181725';
const TEXT_MUTED = '#7C7C7C';
const BORDER_COLOR = '#E2E2E2';

export default function FavouriteScreen({ navigation }) {
  // Dữ liệu Mock cho danh sách yêu thích
  const favouriteItems = [
    { id: '1', name: 'Sprite Can', details: '325ml, Price', price: '1.50', image: require('../../assets/sprite.png') },
    { id: '2', name: 'Diet Coke', details: '355ml, Price', price: '1.99', image: require('../../assets/diet_coke.png') },
    { id: '3', name: 'Apple & Grape Juice', details: '2L, Price', price: '15.50', image: require('../../assets/apple_grape_juice.png') },
    { id: '4', name: 'Coca Cola Can', details: '325ml, Price', price: '4.99', image: require('../../assets/coca_cola.png') },
    { id: '5', name: 'Pepsi Can', details: '330ml, Price', price: '4.99', image: require('../../assets/pepsi.png') },
  ];

  // Render từng dòng sản phẩm
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => navigation.navigate('ProductDetail')} // Bấm vào nhảy sang trang chi tiết
      activeOpacity={0.7}
    >
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.details}</Text>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={28} color={TEXT_MAIN} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>
      <View style={styles.divider} />

      {/* Danh sách sản phẩm */}
      <FlatList 
        data={favouriteItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />

      {/* Nút Add All To Cart */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation - Đánh dấu tab Favourite */}
      <BottomTabBar activeTab="Favourite" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_MAIN,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER_COLOR,
    marginHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 150, // Nhường chỗ cho nút bấm và thanh tab bar dưới cùng
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_MAIN,
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    color: TEXT_MUTED,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_MAIN,
    marginRight: 10,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 80, // Nằm ngay trên BottomTabBar
    left: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  button: {
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
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});