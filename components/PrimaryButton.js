import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles';

//Knap 
export default function PrimaryButton({ title, onPress, variant = 'primary', style }) {
  const isSecondary = variant === 'secondary';

  return (
    <TouchableOpacity
      style={[styles.button, isSecondary && styles.buttonSecondary, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, isSecondary && styles.buttonTextSecondary]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}