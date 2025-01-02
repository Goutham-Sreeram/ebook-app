import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Animated, Easing } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pressedBooks, setPressedBooks] = useState({});
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const handleBookPress = (bookId) => {
    setPressedBooks(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        })
      ])
    );

    pulse.start();

    // Simulate loading time
    setTimeout(() => {
      pulse.stop();
      setIsLoading(false);
    }, 2000);

    return () => pulse.stop();
  }, []);

  const LoadingBlock = ({ style }) => {
    const opacity = pulseAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 0.7]
    });

    const scale = pulseAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.02, 1]
    });

    return (
      <Animated.View
        style={[
          styles.loadingBlock,
          style,
          {
            opacity,
            transform: [{ scale }]
          }
        ]}
      />
    );
  };

  if (isLoading) {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {/* Header Loading */}
          <View style={styles.header}>
            <View>
              <LoadingBlock style={{ width: 200, height: 30, marginBottom: 10 }} />
              <LoadingBlock style={{ width: 150, height: 20 }} />
            </View>
            <LoadingBlock style={{ width: 50, height: 50, borderRadius: 25 }} />
          </View>

          {/* Categories Loading */}
          <View style={styles.categoriesContainer}>
            {[1, 2, 3, 4, 5].map((_, i) => (
              <LoadingBlock
                key={i}
                style={{
                  width: 65,
                  height: 35,
                  borderRadius: 20,
                  marginBottom: 10
                }}
              />
            ))}
          </View>

          {/* Featured Book Loading */}
          <LoadingBlock
            style={{
              width: '100%',
              height: 150,
              borderRadius: 12,
              marginBottom: 20
            }}
          />

          {/* Tabs Loading */}
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            {[1, 2, 3].map((_, i) => (
              <LoadingBlock
                key={i}
                style={{
                  width: 100,
                  height: 20,
                  marginRight: 20,
                  borderRadius: 4
                }}
              />
            ))}
          </View>

          {/* Grid Loading */}
          <View style={styles.bookGrid}>
            {[1, 2, 3, 4].map((_, i) => (
              <LoadingBlock
                key={i}
                style={{
                  width: '48%',
                  height: 200,
                  borderRadius: 10,
                  marginBottom: 15
                }}
              />
            ))}
          </View>
        </ScrollView>

        {/* Navbar Loading */}
        <View style={styles.navbar}>
          {[1, 2, 3].map((_, i) => (
            <LoadingBlock
              key={i}
              style={{
                width: 24,
                height: 24,
                borderRadius: 12
              }}
            />
          ))}
        </View>
      </View>
    );
  }

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
          {[
            { id: 1, source: require('../../assets/book2.webp') },
            { id: 2, source: require('../../assets/book3.webp') },
            { id: 3, source: require('../../assets/book1.webp') },
            { id: 4, source: require('../../assets/book2.webp') }
          ].map((book) => (
            <TouchableOpacity
              key={book.id}
              style={[
                styles.bookWrapper,
                pressedBooks[book.id] && styles.bookWrapperPressed
              ]}
              onPress={() => handleBookPress(book.id)}
            >
              <Image 
                source={book.source}
                style={styles.gridBook}
              />
            </TouchableOpacity>
          ))}
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
    borderColor: '#333',
    borderWidth: 1,
    minWidth: 65,
    alignItems: 'center',
  },
  activeCategory: {
    borderColor: '#6B4EFF',
    borderWidth: 1,
  },
  categoryText: {
    color: '#333',
  },
  activeCategoryText: {
    color: '#6B4EFF',
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
  loadingBlock: {
    backgroundColor: '#E8E8E8',
    borderRadius: 4,
  },
  bookWrapper: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    android_hyphenationFrequency: 'none',
  },
  bookWrapperPressed: {
    elevation: 8,
  },
  gridBook: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
