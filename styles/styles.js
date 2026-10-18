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

  // Knapper
  button: {
    backgroundColor: '#1e5fd9',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#eef2fa',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextSecondary: {
    color: '#1e5fd9',
  },
  buttonFull: {
    width: '100%',
  },

  // Kort
  map: {
    flex: 1,
  },
  mapButton: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
  },

  // Venneliste og rangliste
  searchInput: {
    margin: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    fontSize: 16,
  },
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
  listRight: {
    alignItems: 'flex-end',
  },
  listSpeed: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e5fd9',
  },
  deleteText: {
    color: '#c0392b',
    fontSize: 13,
    marginTop: 4,
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 32,
  },
  footerButton: {
    margin: 16,
  },
  rankText: {
    fontSize: 18,
    fontWeight: '700',
    width: 36,
  },
  rankName: {
    flex: 1,
  },

  // Formular
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#c0392b',
    marginTop: 10,
  },
});