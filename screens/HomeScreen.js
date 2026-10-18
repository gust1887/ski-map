import { View, Text } from 'react-native';
import styles from '../styles/styles';
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>SkiTracker</Text>
      <Text style={styles.subtitle}>
        Se hvor dine venner er på pisten, og hvem der kører hurtigst.
      </Text>

      <PrimaryButton
        title="Åbn kort"
        style={styles.buttonFull}
        onPress={() => navigation.navigate('Map')}
      />
      <PrimaryButton
        title="Se venneliste"
        variant="secondary"
        onPress={() => navigation.navigate('Friends')}
      />
      <PrimaryButton
        title="Rangliste"
        variant="secondary"
        onPress={() => navigation.navigate('Leaderboard')}
      />
    </View>
  );
}