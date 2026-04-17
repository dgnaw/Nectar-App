import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';
import StudentInfo from '../components/StudentInfo';

const GREEN_COLOR = '#53B175';
const TEXT_COLOR_MAIN = '#181725';
const TEXT_COLOR_DETAILS = '#7C7C7C';

export default function BeveragesScreen({ navigation }) {
  
  // Dữ liệu Mock cho danh sách đồ uống
  const beveragesData = [
    { id: '1', name: 'Diet Coke', details: '355ml, Price', price: '1.99', image: require('../../assets/diet_coke.png') },
    { id: '2', name: 'Sprite Can', details: '325ml, Price', price: '1.50', image: require('../../assets/sprite.png') },
    { id: '3', name: 'Apple & Grape Juice', details: '2L, Price', price: '15.99', image: require('../../assets/apple_grape_juice.png') },
    { id: '4', name: 'Orange Juice', details: '2L, Price', price: '15.99', image: require('../../assets/orange_juice.png') }, // Đã sửa typo Orenge -> Orange
    { id: '5', name: 'Coca Cola Can', details: '325ml, Price', price: '4.99', image: require('../../assets/coca_cola.png') },
    { id: '6', name: 'Pepsi Can', details: '330ml, Price', price: '4.99', image: require('../../assets/pepsi.png') },
  ];

  // Hàm render từng thẻ sản phẩm
  const renderProductCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.productCard} 
      onPress={() => navigation.navigate('ProductDetail')} // Bấm vào sẽ sang trang chi tiết
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
      
      {/* Header: Nút Back, Tiêu đề, Nút Filter */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Feather name="chevron-left" size={32} color={TEXT_COLOR_MAIN} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Beverages</Text>
        
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="sliders" size={24} color={TEXT_COLOR_MAIN} />
        </TouchableOpacity>
      </View>

      {/* Lưới sản phẩm 2 cột */}
      <FlatList 
        data={beveragesData}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContent}
        columnWrapperStyle={styles.rowWrapper}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  iconButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
  },
  gridContent: {
    paddingHorizontal: 20,
    paddingBottom: 30, // Thêm khoảng trống ở dưới cùng
  },
  rowWrapper: {
    justifyContent: 'space-between', // Đẩy 2 thẻ ra 2 góc
    marginBottom: 15,
  },
  productCard: {
    width: '47%', // Chiếm khoảng 47% chiều rộng màn hình để chừa khe hở ở giữa
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    display: 'flex',
    flexDirection: 'column',
  },
  productCardImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 15,
  },
  productCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
    marginBottom: 5,
    minHeight: 40, // Giữ chiều cao cố định để các thẻ bằng nhau dù tên dài/ngắn
  },
  productCardDetails: {
    fontSize: 14,
    color: TEXT_COLOR_DETAILS,
    marginBottom: 15,
  },
  productCardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 'auto', // Tự động đẩy phần giá xuống đáy thẻ
  },
  productCardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
  },
  productCardAddButton: {
    backgroundColor: GREEN_COLOR,
    width: 45,
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});