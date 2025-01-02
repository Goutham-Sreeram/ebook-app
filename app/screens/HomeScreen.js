import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const categories = ["Tech", "Art", "Culture", "Fashion", "Architecture"];
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.userName}>Elise Maria</Text>
          </View>
          <Image 
             source={require('../../assets/avatar.jpg')}
            style={styles.avatar}
          />
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.categoryButton,
                index === 0 && styles.activeCategory
              ]}
            >
              <Text style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Featured Book */}
        <View style={styles.featuredBook}>
          <Image 
            source={require('../../assets/book1.webp')}
            style={styles.bookThumbnail}
          />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>A perfect day to be alone</Text>
            <Text style={styles.authorName}>Nanae Aoyama</Text>
            <View style={styles.progressBar} />
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabs}>
          <Text style={[styles.tabText, styles.activeTab]}>My Suggestions</Text>
          <Text style={styles.tabText}>Popular</Text>
          <Text style={styles.tabText}>My Collection</Text>
        </View>

        {/* Book Grid */}
        <View style={styles.bookGrid}>
          <Image 
            source={require('../../assets/book2.webp')}
            style={styles.gridBook}
          />
          <Image 
            source={require('../../assets/book3.webp')}
            style={styles.gridBook}
          />
          <Image 
            source={require('../../assets/book1.webp')}
            style={styles.gridBook}
          />
          <Image 
            source={require('../../assets/book2.webp')}
            style={styles.gridBook}
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#6B4EFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="library" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
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
  userName: {
    fontSize: 16,
    color: '#666',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    minWidth: 65,
    alignItems: 'center',
  },
  activeCategory: {
    backgroundColor: '#6B4EFF',
  },
  categoryText: {
    color: '#333',
  },
  activeCategoryText: {
    color: '#fff',
  },
  featuredBook: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  bookThumbnail: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  authorName: {
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#6B4EFF',
    width: '60%',
    borderRadius: 2,
    marginTop: 10,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tabText: {
    marginRight: 20,
    color: '#666',
  },
  activeTab: {
    color: '#6B4EFF',
    fontWeight: 'bold',
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridBook: {
    width: '48%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    
  },
  navItem: {
    alignItems: 'center',
  },
});
