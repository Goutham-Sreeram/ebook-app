import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  const categories = ["Tech", "Art", "Culture", "Fashion", "Architecture"];
  
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.userName}>Elise Maria</Text>
        </View>
        <Image 
          source={{ uri: 'https://placekitten.com/100/100' }}
          style={styles.avatar}
        />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
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
      </ScrollView>

      {/* Featured Book */}
      <View style={styles.featuredBook}>
        <Image 
          source={{ uri: 'https://example.com/book-cover.jpg' }}
          style={styles.bookThumbnail}
        />
        <Text style={styles.bookTitle}>A perfect day to be alone</Text>
        <Text style={styles.authorName}>Nanae Aoyama</Text>
        <View style={styles.progressBar} />
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
          source={{ uri: 'https://example.com/book1.jpg' }}
          style={styles.gridBook}
        />
        <Image 
          source={{ uri: 'https://example.com/book2.jpg' }}
          style={styles.gridBook}
        />
      </View>
    </ScrollView>
  );
}

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
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#f0f0f0',
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
    marginBottom: 20,
  },
  bookThumbnail: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorName: {
    color: '#666',
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
    justifyContent: 'space-between',
  },
  gridBook: {
    width: '48%',
    height: 200,
    borderRadius: 10,
  },
});
