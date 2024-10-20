import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
let ScanIcon = require('./assets/ScanIcon.png')
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder for profile image
        />
      </View>

      {/* Insights Section */}
      <Text style={styles.insightsTitle}>Your Insights</Text>
      <View style={styles.insightsContainer}>
        <TouchableOpacity
          style={styles.insightCard}
          onPress={() => navigation.navigate('Scan')}>
          <Image
            source={ScanIcon}
            style={styles.insightImage}
          />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightSubText}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightCard}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/error--v1.png' }}
            style={styles.insightImage}
          />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightSubText}>Counterfeited 32</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightCard}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/checked--v1.png' }}
            style={styles.insightImage}
          />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightSubText}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightCard}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/address-book.png' }}
            style={styles.insightImage}
          />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightSubText}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore Section */}
      <Text style={styles.exploreMore}>Explore More</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  insightCard: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  insightImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  insightText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  insightSubText: {
    fontSize: 14,
    color: '#888',
  },
  exploreMore: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});