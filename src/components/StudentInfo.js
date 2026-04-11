import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function StudentInfo() {
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setVisible(true);
      
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, [])
  );

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SV: Đỗ Gia Nam - MSSV: 23810310245</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50, 
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    zIndex: 9999, 
    elevation: 10, 
  },
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  }
});