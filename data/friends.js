// Startdata, som kun bruges første gang appen åbnes.
// Derefter er det AsyncStorage der holder dataen (se storage/friendStorage.js).
// Skift START_REGION til stakeholders
export const START_REGION = {
  latitude: 60.86,
  longitude: 8.56,
  latitudeDelta: 0.03,
  longitudeDelta: 0.03,
};
//Sat til Norge (Hemsedal)
export const defaultFriends = [
  { id: '1', name: 'Emil', speedKmh: 42, status: 'Kører', latitude: 60.865, longitude: 8.555 },
  { id: '2', name: 'Sofie', speedKmh: 0, status: 'Pause', latitude: 60.855, longitude: 8.565 },
  { id: '3', name: 'Jonas', speedKmh: 28, status: 'Kører', latitude: 60.86, longitude: 8.57 },
];