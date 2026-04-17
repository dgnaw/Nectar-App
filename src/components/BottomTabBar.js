import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// Thay đổi import: Dùng Feather và MaterialIcons cho ổn định
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

const GREEN_COLOR = '#53B175';
const TEXT_COLOR_MAIN = '#181725';

export default function BottomTabBar({ activeTab = 'Shop' }) {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomTabBar}>
      
      {/* Nút Shop -> Dùng MaterialIcons */}
      <TouchableOpacity 
        style={styles.bottomTab}
        onPress={() => navigation.navigate('Home')}
      >
        <MaterialIcons 
          name="storefront" 
          size={26} // Tăng size nhẹ cho cân đối
          color={activeTab === 'Shop' ? GREEN_COLOR : TEXT_COLOR_MAIN} 
        />
        <Text style={[styles.bottomTabText, activeTab === 'Shop' && { color: GREEN_COLOR }]}>
          Shop
        </Text>
      </TouchableOpacity>
      
      {/* Nút Explore -> Dùng Feather */}
      <TouchableOpacity 
        style={styles.bottomTab}
        onPress={() => navigation.navigate('Explore')}
      >
        <Feather 
          name="search" 
          size={24} 
          color={activeTab === 'Explore' ? GREEN_COLOR : TEXT_COLOR_MAIN} 
        />
        <Text style={[styles.bottomTabText, activeTab === 'Explore' && { color: GREEN_COLOR }]}>
          Explore
        </Text>
      </TouchableOpacity>
      
      {/* Nút Cart -> Dùng Feather */}
      <TouchableOpacity style={styles.bottomTab}>
        <Feather 
          name="shopping-cart" 
          size={24} 
          color={activeTab === 'Cart' ? GREEN_COLOR : TEXT_COLOR_MAIN} 
        />
        <Text style={[styles.bottomTabText, activeTab === 'Cart' && { color: GREEN_COLOR }]}>
          Cart
        </Text>
      </TouchableOpacity>
      
      {/* Nút Favourite -> Dùng Feather */}
      <TouchableOpacity style={styles.bottomTab}>
        <Feather 
          name="heart" 
          size={24} 
          color={activeTab === 'Favourite' ? GREEN_COLOR : TEXT_COLOR_MAIN} 
        />
        <Text style={[styles.bottomTabText, activeTab === 'Favourite' && { color: GREEN_COLOR }]}>
          Favourite
        </Text>
      </TouchableOpacity>
      
      {/* Nút Account -> Dùng Feather */}
      <TouchableOpacity style={styles.bottomTab}>
        <Feather 
          name="user" 
          size={24} 
          color={activeTab === 'Account' ? GREEN_COLOR : TEXT_COLOR_MAIN} 
        />
        <Text style={[styles.bottomTabText, activeTab === 'Account' && { color: GREEN_COLOR }]}>
          Account
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  bottomTabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabText: {
    fontSize: 12,
    color: TEXT_COLOR_MAIN,
    marginTop: 5,
    fontWeight: '500',
  },
});