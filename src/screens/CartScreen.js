import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import StudentInfo from '../components/StudentInfo';
import BottomTabBar from '../components/BottomTabBar';

const GREEN_COLOR = '#53B175';
const TEXT_MAIN = '#181725';
const TEXT_MUTED = '#7C7C7C';
const BORDER_COLOR = '#E2E2E2';

export default function CartScreen({ navigation }) {
  // Dữ liệu Mock ban đầu cho giỏ hàng
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Bell Pepper Red', details: '1kg, Price', price: 4.99, quantity: 1, image: require('../../assets/red_peppers.png') },
    { id: '2', name: 'Egg Chicken Red', details: '4pcs, Price', price: 1.99, quantity: 1, image: require('../../assets/egg_red.png') },
    { id: '3', name: 'Organic Bananas', details: '12kg, Price', price: 3.00, quantity: 1, image: require('../../assets/banana.jpg') },
    { id: '4', name: 'Ginger', details: '250gm, Price', price: 2.99, quantity: 1, image: require('../../assets/ginger.png') },
  ]);

  // Logic tăng/giảm số lượng
  const updateQuantity = (id, delta) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 0 ? newQty : 1 }; // Không cho giảm xuống dưới 1
        }
        return item;
      })
    );
  };

  // Logic xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Logic tính tổng tiền
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  // Render từng sản phẩm trong giỏ
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      
      <View style={styles.itemContent}>
        {/* Hàng 1: Tên và nút Xóa */}
        <View style={styles.itemHeader}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeBtn}>
            <Feather name="x" size={20} color="#B3B3B3" />
          </TouchableOpacity>
        </View>
        
        {/* Hàng 2: Chi tiết (Cân nặng) */}
        <Text style={styles.itemDetails}>{item.details}</Text>
        
        {/* Hàng 3: Bộ điều khiển số lượng và Giá */}
        <View style={styles.itemActionRow}>
          <View style={styles.qtyController}>
            <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.qtyBtn}>
              <Feather name="minus" size={20} color="#B3B3B3" />
            </TouchableOpacity>
            
            <Text style={styles.qtyText}>{item.quantity}</Text>
            
            <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={[styles.qtyBtn, { borderColor: GREEN_COLOR }]}>
              <Feather name="plus" size={20} color={GREEN_COLOR} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.itemPrice}>
            ${(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>
      <View style={styles.divider} />

      {/* Danh sách giỏ hàng */}
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <FlatList 
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />
      )}

      {/* Vùng nút Checkout (Ghim ở dưới cùng) */}
      <View style={styles.checkoutWrapper}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${calculateTotal()}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <BottomTabBar activeTab="Cart" />
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: TEXT_MUTED,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 150, // Chừa khoảng trống cho nút Checkout và TabBar
  },
  cartItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_MAIN,
  },
  removeBtn: {
    padding: 5,
  },
  itemDetails: {
    fontSize: 14,
    color: TEXT_MUTED,
    marginBottom: 10,
  },
  itemActionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyController: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    width: 35,
    height: 35,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_MAIN,
    marginHorizontal: 15,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_MAIN,
  },
  checkoutWrapper: {
    position: 'absolute',
    bottom: 80, // Nằm ngay trên BottomTabBar
    left: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  checkoutBtn: {
    backgroundColor: GREEN_COLOR,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
    marginLeft: 30, // Cân bằng với totalBadge để chữ ở giữa
  },
  totalBadge: {
    backgroundColor: '#489E67', // Màu xanh đậm hơn một chút
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  totalBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});