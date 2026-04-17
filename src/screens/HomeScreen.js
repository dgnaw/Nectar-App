import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StudentInfo from '../components/StudentInfo';
import { MaterialIcons, Feather, Ionicons, AntDesign } from '@expo/vector-icons'; 
import BottomTabBar from '../components/BottomTabBar';

const GREEN_COLOR = '#53B175';
const TEXT_COLOR_MAIN = '#181725';
const TEXT_COLOR_DETAILS = '#7C7C7C';
const PRODUCT_BACKGROUND = '#F2F3F2';

// 1. Nhận thêm prop onPress và đổi View thành TouchableOpacity
const ProductCard = ({ image, name, details, price, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.productCard} 
      onPress={onPress} 
      activeOpacity={0.8}
    >
      <Image source={image} style={styles.productCardImage} resizeMode="contain" />
      <Text style={styles.productCardName} numberOfLines={2}>{name}</Text>
      <Text style={styles.productCardDetails}>{details}</Text>
      <View style={styles.productCardBottom}>
        <Text style={styles.productCardPrice}>${price}</Text>
        {/* Nút dấu cộng thêm vào giỏ hàng (hiện tại để trống tính năng) */}
        <TouchableOpacity style={styles.productCardAddButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const CategoryCard = ({ image, name }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={image} style={styles.categoryCardImage} resizeMode="contain" />
      <Text style={styles.categoryCardName}>{name}</Text>
    </View>
  );
};

// 2. Thêm prop { navigation } vào HomeScreen
export default function HomeScreen({ navigation }) {
  // Dữ liệu Mock
  const exclusiveOfferProducts = [
    { image: require('../../assets/banana.jpg'), name: 'Organic Bananas', details: '7pcs, Priceg', price: '4.99' },
    { image: require('../../assets/apple.png'), name: 'Red Apple', details: '1kg, Priceg', price: '4.99' },
    { image: require('../../assets/pineapple.jpg'), name: 'PineAplle', details: '10pcs, Priceg', price: '4.99' },
  ];

  const bestSellingProducts = [
    { image: require('../../assets/red_peppers.png'), name: 'Red Bell Peppers', details: '1kg, Priceg', price: '4.99' },
    { image: require('../../assets/ginger.png'), name: 'Ginger', details: '250g, Priceg', price: '4.99' },
    { image: require('../../assets/onion.jpg'), name: 'Onion', details: '1kg, Priceg', price: '4.99' },
  ];

  const categories = [
    { image: require('../../assets/pulses.png'), name: 'Pulses' },
    { image: require('../../assets/rice.png'), name: 'Rice' },
  ];

  const groceriesProducts = [
    { image: require('../../assets/beef_bone.png'), name: 'Beef Bone', details: '1kg, Priceg', price: '4.99' },
    { image: require('../../assets/chicken.png'), name: 'Broiler Chicken', details: '1kg, Priceg', price: '4.99' },
    { image: require('../../assets/crocodile_meat.jpg'), name: 'Crocodile Tail Meat', details: '5kg, Priceg', price: '4.99' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StudentInfo />
      
      <ScrollView bounces={false} contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
            <View style={styles.logoContainer}>
            <Image 
                source={require('../../assets/red_carrot.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
            </View>
          <View style={styles.locationContainer}>
            <Image source={require('../../assets/carrot_icon.png')} style={styles.carrotHeader} resizeMode="contain" />
            <MaterialIcons name="place" size={24} color={GREEN_COLOR} style={styles.locationIcon} />
            <Text style={styles.locationText}>Dhaka, Banasree</Text>
          </View>
          <View style={styles.searchBarContainer}>
            <Feather name="search" size={20} color={TEXT_COLOR_MAIN} />
            <TextInput 
              style={styles.searchBarInput} 
              placeholder="Search Store" 
              placeholderTextColor="#B3B3B3"
            />
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/banner_fresh_vegetables.png')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <TouchableOpacity><Text style={styles.sectionSeeAll}>See all</Text></TouchableOpacity>
          </View>
          <FlatList 
            data={exclusiveOfferProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ProductCard 
                {...item} 
                onPress={() => navigation.navigate('ProductDetail')} 
              />
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.sectionProducts}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <TouchableOpacity><Text style={styles.sectionSeeAll}>See all</Text></TouchableOpacity>
          </View>
          <FlatList 
            data={bestSellingProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // 3. Truyền sự kiện onPress vào ProductCard
            renderItem={({ item }) => (
              <ProductCard 
                {...item} 
                onPress={() => navigation.navigate('ProductDetail')} 
              />
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.sectionProducts}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Groceries</Text>
            <TouchableOpacity><Text style={styles.sectionSeeAll}>See all</Text></TouchableOpacity>
          </View>
          <FlatList 
            data={categories}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <CategoryCard {...item} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.sectionCategories}
          />
           <FlatList 
            data={groceriesProducts}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // 3. Truyền sự kiện onPress vào ProductCard
            renderItem={({ item }) => (
              <ProductCard 
                {...item} 
                onPress={() => navigation.navigate('ProductDetail')} 
              />
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={styles.sectionProducts}
          />
        </View>

      </ScrollView>

      <BottomTabBar activeTab="Shop" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 30, 
    height: 35,
  },
  container: { 
    flex: 1, 
    backgroundColor: '#FCFCFC' 
  },
  scrollContent: {
    paddingBottom: 110, 
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  carrotHeader: {
    width: 25,
    height: 30,
    marginRight: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 18,
    color: TEXT_COLOR_MAIN,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchBarInput: {
    flex: 1,
    fontSize: 16,
    color: TEXT_COLOR_MAIN,
    marginLeft: 10,
  },
  bannerContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 115,
    borderRadius: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
  },
  sectionSeeAll: {
    fontSize: 16,
    color: GREEN_COLOR,
    fontWeight: '600',
  },
  sectionProducts: {
    paddingLeft: 20,
  },
  sectionCategories: {
    paddingLeft: 20,
    marginBottom: 15,
  },
  productCard: {
    width: 175,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  productCardImage: {
    width: 100,
    height: 80,
    alignSelf: 'center',
    marginBottom: 15,
  },
  productCardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_COLOR_MAIN,
    marginBottom: 5,
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
    marginTop: 'auto', 
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
  categoryCard: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: PRODUCT_BACKGROUND,
    borderRadius: 15,
    marginRight: 15,
  },
  categoryCardImage: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
  categoryCardName: {
    fontSize: 20,
    fontWeight: '600',
    color: TEXT_COLOR_MAIN,
  },
});