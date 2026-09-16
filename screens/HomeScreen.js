import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>SkiTracker</Text>
      <Text style={styles.subtitle}>
        Se hvor dine venner er på pisten, og hold styr på hastigheden
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.buttonText}>Åbn kort</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.buttonSecondary]}
        onPress={() => navigation.navigate('Friends')}
      >
        <Text style={[styles.buttonText, styles.buttonTextSecondary]}>
          Se venneliste
        </Text>
      </TouchableOpacity>
    </View>
  );
}
