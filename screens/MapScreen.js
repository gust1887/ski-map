import { View, Image, Text } from 'react-native';
import styles from '../styles/styles';
import { friends } from '../data/friends';

// Mock-værdi for fart
const mySpeedKmh = 35;

export default function MapScreen() {
  return (
    <View style={styles.mapContainer}>
      <Image
        source={require('../assets/skimap.png')}
        style={styles.mapImage}
        resizeMode="cover"
      />

      {friends.map((friend) => (
        <View
          key={friend.id}
          style={[styles.marker, { top: friend.top, left: friend.left }]}
        >
          <View style={styles.markerDot} />
          <Text style={styles.markerLabel}>
            {friend.name} · {friend.speedKmh} km/t
          </Text>
        </View>
      ))}

      <View style={styles.mySpeedBadge}>
        <Text style={styles.mySpeedLabel}>Din fart</Text>
        <Text style={styles.mySpeedText}>{mySpeedKmh} km/t</Text>
      </View>
    </View>
  );
}