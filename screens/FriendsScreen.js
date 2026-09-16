import { View, Text, FlatList } from 'react-native';
import styles from '../styles/styles';
import { friends } from '../data/friends';

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View>
              <Text style={styles.listName}>{item.name}</Text>
              <Text style={styles.listStatus}>{item.status}</Text>
            </View>
            <Text style={styles.listSpeed}>{item.speedKmh} km/t</Text>
          </View>
        )}
      />
    </View>
  );
}
