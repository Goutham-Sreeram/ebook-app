import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LibraryScreen({ navigation }) {
  const subscriptions = [
    { id: 1, name: "The New Yorker", type: "Magazine", nextIssue: "March 2024" },
    { id: 2, name: "National Geographic", type: "Magazine", nextIssue: "April 2024" },
    // Add more subscriptions as needed
  ];

  const books = [
    { id: 1, title: "A perfect day to be alone", author: "Nanae Aoyama", progress: "60%" },
    { id: 2, title: "The Design of Everyday Things", author: "Don Norman", progress: "30%" },
    // Add more books as needed
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Library</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Subscriptions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Subscriptions</Text>
          {subscriptions.map((sub) => (
            <View key={sub.id} style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{sub.name}</Text>
                <Text style={styles.cardSubtitle}>{sub.type}</Text>
                <Text style={styles.cardDetail}>Next Issue: {sub.nextIssue}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>
          ))}
        </View>

        {/* Books Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Books</Text>
          {books.map((book) => (
            <View key={book.id} style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{book.title}</Text>
                <Text style={styles.cardSubtitle}>{book.author}</Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: book.progress }]} />
                  <Text style={styles.progressText}>{book.progress}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#666" />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Ionicons name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('SearchScreen')}
        >
          <Ionicons name="search" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="library" size={24} color="#6B4EFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardDetail: {
    fontSize: 12,
    color: '#999',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#6B4EFF',
    borderRadius: 2,
    marginRight: 8,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  navItem: {
    alignItems: 'center',
  },
});