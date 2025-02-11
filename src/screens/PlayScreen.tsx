import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const PlayScreen = () => {
  const [reels, setReels] = useState<Array<{ id: string; title: string; image: string }>>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadReels();
  }, [page]);

  const loadReels = async () => {
    if (loading) return;
    setLoading(true);

    // Simulate an API call to fetch reels
    const newReels = Array.from({ length: 10 }, (_, index) => ({
      id: `reel-${page}-${index}`,
      title: `Reel ${page * 10 + index + 1}`,
      image: 'https://via.placeholder.com/150', // Replace with your reel image URL
    }));

    setReels((prevReels) => [...prevReels, ...newReels]);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const renderReel = ({ item }: { item: { id: string; title: string; image: string } }) => (
    <View style={styles.reelContainer}>
      <Image source={{ uri: item.image }} style={styles.reelImage} />
      <Text style={styles.reelTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reels}
        renderItem={renderReel}
        keyExtractor={(item) => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <Text>Loading...</Text> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reelContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  reelImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  reelTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlayScreen;