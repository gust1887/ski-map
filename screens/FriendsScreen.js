import { useState, useCallback } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles/styles';
import PrimaryButton from '../components/PrimaryButton';
import { loadFriends, saveFriends } from '../storage/friendStorage';

export default function FriendsScreen({ navigation }) {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState('');

  useFocusEffect(
    useCallback(() => {
      loadFriends().then(setFriends);
    }, [])
  );

  // Søgefunktion: viser kun venner hvor navnet indeholder søgeteksten
  const filteredFriends = friends.filter((friend) =>
    friend.name.toLowerCase().includes(search.toLowerCase())
  );

  function confirmDelete(friend) {
    Alert.alert('Slet ven', `Vil du slette ${friend.name}?`, [
      { text: 'Annuller', style: 'cancel' },
      {
        text: 'Slet',
        style: 'destructive',
        onPress: async () => {
          const updated = friends.filter((f) => f.id !== friend.id);
          setFriends(updated);
          await saveFriends(updated);
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Søg efter en ven..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredFriends}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Ingen venner fundet</Text>}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View>
              <Text style={styles.listName}>{item.name}</Text>
              <Text style={styles.listStatus}>{item.status}</Text>
            </View>
            <View style={styles.listRight}>
              <Text style={styles.listSpeed}>{item.speedKmh} km/t</Text>
              <TouchableOpacity onPress={() => confirmDelete(item)}>
                <Text style={styles.deleteText}>Slet</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <PrimaryButton
        title="Tilføj ven"
        style={styles.footerButton}
        onPress={() => navigation.navigate('AddFriend')}
      />
    </View>
  );
}