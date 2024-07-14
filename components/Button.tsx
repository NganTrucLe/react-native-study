import { PropsWithChildren } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  onPress?: () => void;
  containerStyle?: string;
  href?: string;
}

export function Button({
  children,
  variant = 'contained',
  onPress,
  containerStyle,
  href,
}: PropsWithChildren & ButtonProps) {
  const router = useRouter();
  const variantStyle =
    variant === 'contained'
      ? 'bg-primary'
      : variant === 'outlined'
        ? 'text-primary border border-primary-700'
        : 'text-primary';
  const textStyle = variant === 'contained' ? 'text-white' : 'text-primary-dark';
  return (
    <TouchableOpacity
      className={`${variantStyle} rounded-xl h-12 w-full justify-center items-center ${containerStyle}`}
      onPress={() => {
        if (onPress) {
          onPress();
        }
        if (href) {
          router.push(href);
        }
      }}
      activeOpacity={0.8}>
      <Text className={`${textStyle} font-pmedium`}>{children}</Text>
    </TouchableOpacity>
  );
}
