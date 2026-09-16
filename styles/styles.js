import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e5fd9',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginTop: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#eef2fa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#1e5fd9',
  },

  // Map skærm
  mapContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  marker: {
    position: 'absolute',
    alignItems: 'center',
  },
  markerDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1e5fd9',
    borderWidth: 2,
    borderColor: '#fff',
  },
  markerLabel: {
    marginTop: 2,
    backgroundColor: 'rgba(0,0,0,0.65)',
    color: '#fff',
    fontSize: 11,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
  },
  mySpeedBadge: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: 'rgba(255,255,255,0.92)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  mySpeedText: {
    fontSize: 18,
    fontWeight: '700',
  },
  mySpeedLabel: {
    fontSize: 11,
    color: '#555',
  },

  // Friends list skærm
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listName: {
    fontSize: 16,
    fontWeight: '600',
  },
  listStatus: {
    fontSize: 13,
    color: '#888',
  },
  listSpeed: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e5fd9',
  },
});
