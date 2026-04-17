import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';
// Đã xóa AntDesign, thêm Ionicons vào đây
import { MaterialIcons, Entypo, Feather, Ionicons } from '@expo/vector-icons';

// Màu chủ đạo
const GREEN_COLOR = '#53B175';
const TEXT_MAIN = '#181725';
const TEXT_MUTED = '#7C7C7C';
const BORDER_COLOR = '#E2E2E2';

export default function ProductDetailScreen({ navigation }) {
  // State quản lý số lượng và trạng thái yêu thích
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDetailExpanded, setIsDetailExpanded] = useState(true);

  // Hàm xử lý tăng giảm
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Render 5 ngôi sao đánh giá
  const renderStars = () => {
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Entypo key={item} name="star" size={16} color="#F3603F" style={styles.starIcon} />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {/* Bao gồm thông tin SV, nổi lên trên */}
      <StudentInfo />
      
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Vùng Hình ảnh sản phẩm (Có nền cong mượt) */}
        <View style={styles.imageSection}>
          {/* Header nằm đè lên nền xám của ảnh */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
              <Feather name="chevron-left" size={32} color={TEXT_MAIN} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="upload" size={24} color={TEXT_MAIN} />
            </TouchableOpacity>
          </View>

          <Image 
            source={require('../../assets/apple.png')} 
            style={styles.productImage} 
            resizeMode="contain" 
          />
          
          {/* Nút Pagination (Mô phỏng tĩnh) */}
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Nội dung chi tiết */}
        <View style={styles.contentSection}>
          
          {/* Tên SP và Nút Tim */}
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.productName}>Natural Red Apple</Text>
              <Text style={styles.productWeight}>1kg, Price</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
              {/* Thay thế AntDesign bằng Ionicons cho trái tim */}
              <Ionicons 
                name={isFavorite ? "heart" : "heart-outline"} 
                size={28} 
                color={isFavorite ? "#F3603F" : TEXT_MUTED} 
              />
            </TouchableOpacity>
          </View>

          {/* Hàng Số lượng và Giá */}
          <View style={styles.priceRow}>
            <View style={styles.quantityController}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.qtyBtn}>
                {/* Thay thế AntDesign bằng Feather cho dấu trừ */}
                <Feather name="minus" size={24} color={TEXT_MUTED} />
              </TouchableOpacity>
              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={increaseQuantity} style={styles.qtyBtn}>
                {/* Thay thế AntDesign bằng Feather cho dấu cộng */}
                <Feather name="plus" size={24} color={GREEN_COLOR} />
              </TouchableOpacity>
            </View>
            <Text style={styles.priceText}>$4.99</Text>
          </View>

          <View style={styles.divider} />

          {/* Product Detail Accordion */}
          <TouchableOpacity 
            style={styles.accordionHeader}
            onPress={() => setIsDetailExpanded(!isDetailExpanded)}
            activeOpacity={0.7}
          >
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <MaterialIcons 
              name={isDetailExpanded ? "keyboard-arrow-down" : "keyboard-arrow-right"} 
              size={28} 
              color={TEXT_MAIN} 
            />
          </TouchableOpacity>
          
          {isDetailExpanded && (
            <Text style={styles.detailText}>
              Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
            </Text>
          )}

          <View style={styles.divider} />

          {/* Nutritions Section */}
          <TouchableOpacity style={styles.accordionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <View style={styles.nutritionRight}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={28} color={TEXT_MAIN} />
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* Review Section */}
          <TouchableOpacity style={styles.accordionHeader} activeOpacity={0.7}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.nutritionRight}>
              {renderStars()}
              <MaterialIcons name="keyboard-arrow-right" size={28} color={TEXT_MAIN} />
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Nút Thêm vào giỏ hàng cố định dưới cùng */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.addToBasketBtn}>
          <Text style={styles.addToBasketText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  scrollContent: {
    paddingBottom: 100, // Nhường chỗ cho nút Add To Basket
  },
  imageSection: {
    backgroundColor: '#F2F3F2',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingTop: 50, // SafeArea cho Header
    paddingBottom: 20,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50, // Cách top 1 khoảng
    left: 0,
    right: 0,
    zIndex: 10,
  },
  iconButton: {
    padding: 5,
  },
  productImage: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 3,
  },
  activeDot: {
    width: 15,
    backgroundColor: GREEN_COLOR,
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_MAIN,
    marginBottom: 5,
  },
  productWeight: {
    fontSize: 16,
    color: TEXT_MUTED,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  quantityController: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    padding: 5,
  },
  qtyBox: {
    width: 45,
    height: 45,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  qtyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: TEXT_MAIN,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_MAIN,
  },
  divider: {
    height: 1,
    backgroundColor: BORDER_COLOR,
    marginVertical: 15,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: TEXT_MAIN,
  },
  detailText: {
    fontSize: 14,
    color: TEXT_MUTED,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 5,
  },
  nutritionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#EBEBEB',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  badgeText: {
    fontSize: 12,
    color: TEXT_MUTED,
    fontWeight: '600',
  },
  starsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  starIcon: {
    marginHorizontal: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30, 
    backgroundColor: 'white',
  },
  addToBasketBtn: {
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
  addToBasketText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});