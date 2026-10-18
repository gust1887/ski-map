import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultFriends } from '../data/friends';

const KEY = 'skitracker_friends';

// Henter vennelisten fra telefonens lokale lager.
// Hvis der ikke er gemt noget endnu, bruges startdataen.
export async function loadFriends() {
  try {
    const json = await AsyncStorage.getItem(KEY);
    if (json === null) {
      await AsyncStorage.setItem(KEY, JSON.stringify(defaultFriends));
      return defaultFriends;
    }
    return JSON.parse(json);
  } catch (error) {
    console.log('Kunne ikke hente venner', error);
    return defaultFriends;
  }
}

// Gemmer hele vennelisten.
export async function saveFriends(friends) {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(friends));
  } catch (error) {
    console.log('Kunne ikke gemme venner', error);
  }
}