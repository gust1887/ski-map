import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles';
import PrimaryButton from '../components/PrimaryButton';
import { START_REGION } from '../data/friends';
import { loadFriends, saveFriends } from '../storage/friendStorage';

export default function AddFriendScreen({ navigation }) {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [error, setError] = useState('');

  async function handleSave() {
    const speedNumber = parseInt(speed, 10);

    // Simpel validering af brugerens input
    if (name.trim() === '' || isNaN(speedNumber) || speedNumber < 0) {
      setError('Skriv et navn og en fart som tal (fx 30)');
      return;
    }

    const friends = await loadFriends();

    const newFriend = {
      id: Date.now().toString(),
      name: name.trim(),
      speedKmh: speedNumber,
      status: speedNumber > 0 ? 'Kører' : 'Pause',
      // Positionen er tilfældig i nærheden af startområdet (mock),
      // da der endnu ikke er rigtig lokationsdeling mellem telefoner.
      latitude: START_REGION.latitude + (Math.random() - 0.5) * 0.01,
      longitude: START_REGION.longitude + (Math.random() - 0.5) * 0.01,
    };

    await saveFriends([...friends, newFriend]);
    navigation.goBack();
  }

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Navn</Text>
      <TextInput
        style={styles.input}
        placeholder="Fx Anna"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Fart (km/t)</Text>
      <TextInput
        style={styles.input}
        placeholder="Fx 30"
        keyboardType="numeric"
        value={speed}
        onChangeText={setSpeed}
      />

      {error !== '' && <Text style={styles.errorText}>{error}</Text>}

      <PrimaryButton title="Gem ven" onPress={handleSave} />
    </View>
  );
}