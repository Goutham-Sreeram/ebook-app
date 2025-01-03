import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Animated, Easing, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pressedBooks, setPressedBooks] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("Tech");
  const pulseAnim = useRef(new Animated.Value(0)).current;

  const booksByCategory = {
    Tech: [
      { id: 1, source: require('../../assets/book1.webp'), title: "Greta & Valdin", author: "Rebecca K Reily" },
      { id: 2, source: require('../../assets/book2.webp'), title: "Tech Book 2", author: "Author 2" },
      { id: 3, source: require('../../assets/book3.webp'), title: "Tech Book 3", author: "Author 3" },
      { id: 4, source: require('../../assets/book2.webp'), title: "Tech Book 4", author: "Author 4" }
    ],
    Art: [
      { id: 5, source: require('../../assets/book3.webp'), title: "Art Book 1", author: "Artist 1" },
      { id: 6, source: require('../../assets/book1.webp'), title: "Art Book 2", author: "Artist 2" },
      { id: 7, source: require('../../assets/book2.webp'), title: "Art Book 3", author: "Artist 3" },
      { id: 8, source: require('../../assets/book3.webp'), title: "Art Book 4", author: "Artist 4" }
    ],
    Culture: [
      { id: 9, source: require('../../assets/book2.webp'), title: "Culture Book 1", author: "Writer 1" },
      { id: 10, source: require('../../assets/book3.webp'), title: "Culture Book 2", author: "Writer 2" },
      { id: 11, source: require('../../assets/book1.webp'), title: "Culture Book 3", author: "Writer 3" },
      { id: 12, source: require('../../assets/book2.webp'), title: "Culture Book 4", author: "Writer 4" }
    ],
    Fashion: [
      { id: 13, source: require('../../assets/book1.webp'), title: "Fashion Book 1", author: "Designer 1" },
      { id: 14, source: require('../../assets/book2.webp'), title: "Fashion Book 2", author: "Designer 2" },
      { id: 15, source: require('../../assets/book3.webp'), title: "Fashion Book 3", author: "Designer 3" },
      { id: 16, source: require('../../assets/book1.webp'), title: "Fashion Book 4", author: "Designer 4" }
    ],
    Architecture: [
      { id: 17, source: require('../../assets/book3.webp'), title: "Architecture Book 1", author: "Architect 1" },
      { id: 18, source: require('../../assets/book1.webp'), title: "Architecture Book 2", author: "Architect 2" },
      { id: 19, source: require('../../assets/book2.webp'), title: "Architecture Book 3", author: "Architect 3" },
      { id: 20, source: require('../../assets/book3.webp'), title: "Architecture Book 4", author: "Architect 4" }
    ]
  };

  const categories = ["Tech", "Art", "Culture", "Fashion", "Architecture"];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleBookPress = (bookId) => {
    setPressedBooks(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }));
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => navigation.replace('LoginScreen')
        }
      ]
    );
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

    setTimeout(() => {
      pulse.stop();
      setIsLoading(false);
    }, 2000);

    return () => pulse.stop();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{getGreeting()}</Text>
            <Text style={styles.userName}>Elise Maria</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Image 
              source={require('../../assets/avatar.jpg')}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity 
              key={category}
              style={[
                styles.categoryButton,
                category === selectedCategory && styles.activeCategory
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                category === selectedCategory && styles.activeCategoryText
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
            <Text style={styles.bookTitle}>Greta & Valdin</Text>
            <Text style={styles.authorName}>Rebecca K Reily</Text>
            <View style={styles.progressBarContainer}>
              <LinearGradient
                colors={['#6B4EFF', '#4E7FFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.progressBar}
              />
            </View>
          </View>
        </View>

        {/* Book Grid */}
        <View style={styles.bookGrid}>
          {booksByCategory[selectedCategory].map((book) => (
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
              <View style={styles.bookGridInfo}>
                <Text style={styles.gridBookTitle} numberOfLines={1}>
                  {book.title}
                </Text>
                <Text style={styles.gridAuthorName} numberOfLines={1}>
                  {book.author}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home" size={24} color="#6B4EFF" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Icon name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('LibraryScreen')}
        >
          <Icon name="book-open" size={24} color="#666" />
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
    color: '#333',
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
    borderColor: '#E2E2E2',
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
    borderColor: '#E2E2E2',
    borderWidth: 1,
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
    color: '#333',
    marginBottom: 5,
  },
  authorName: {
    color: '#666',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#E2E2E2',
    borderRadius: 2,
    marginTop: 10,
    width: '100%',
  },
  progressBar: {
    height: 4,
    width: '60%',
    borderRadius: 2,
  },
  bookGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bookWrapper: {
    width: '48%',
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  bookWrapperPressed: {
    elevation: 8,
  },
  gridBook: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  bookGridInfo: {
    padding: 8,
  },
  gridBookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  gridAuthorName: {
    fontSize: 12,
    color: '#666',
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
