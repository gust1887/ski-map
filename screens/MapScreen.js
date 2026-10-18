import { useState, useCallback } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import styles from '../styles/styles';
import PrimaryButton from '../components/PrimaryButton';
import { START_REGION } from '../data/friends';
import { loadFriends, saveFriends } from '../storage/friendStorage';

export default function MapScreen() {
  const [friends, setFriends] = useState([]);

  // Henter data hver gang skærmen kommer i fokus,
  // så nye venner fra AddFriend-skærmen vises med det samme.
  useFocusEffect(
    useCallback(() => {
      loadFriends().then(setFriends);
    }, [])
  );

  // Simulerer at vennerne flytter sig lidt. Der er ingen rigtig deling
  // mellem telefoner endnu, så det er en demo af "live"-ideen.
  async function simulateMovement() {
    const moved = friends.map((friend) => {
      const isPaused = friend.status === 'Pause';
      return {
        ...friend,
        latitude: friend.latitude + (Math.random() - 0.5) * 0.002,
        longitude: friend.longitude + (Math.random() - 0.5) * 0.002,
        speedKmh: isPaused ? 0 : Math.max(5, Math.round(friend.speedKmh + (Math.random() - 0.5) * 10)),
      };
    });
    setFriends(moved);
    await saveFriends(moved);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={START_REGION}>
        {friends.map((friend) => (
          <Marker
            key={friend.id}
            coordinate={{ latitude: friend.latitude, longitude: friend.longitude }}
            title={friend.name}
            description={`${friend.speedKmh} km/t · ${friend.status}`}
          />
        ))}
      </MapView>

      <PrimaryButton
        title="Simulér bevægelse"
        style={styles.mapButton}
        onPress={simulateMovement}
      />
    </View>
  );
}