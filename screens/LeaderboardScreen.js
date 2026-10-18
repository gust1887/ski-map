import { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles/styles';
import { loadFriends } from '../storage/friendStorage';

export default function LeaderboardScreen() {
  const [friends, setFriends] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadFriends().then(setFriends);
    }, [])
  );

  // Sorterer fra højeste til laveste fart (kopi af arrayet, så state ikke ændres)
  const ranked = [...friends].sort((a, b) => b.speedKmh - a.speedKmh);

  return (
    <View style={styles.container}>
      <FlatList
        data={ranked}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Ingen venner endnu</Text>}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.rankText}>{index + 1}.</Text>
            <Text style={[styles.listName, styles.rankName]}>{item.name}</Text>
            <Text style={styles.listSpeed}>{item.speedKmh} km/t</Text>
          </View>
        )}
      />
    </View>
  );
}