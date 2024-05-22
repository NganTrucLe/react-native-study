import React from 'react';
import { PropsWithChildren } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  variant?: 'contained' | 'outlined';
  onPress?: () => void;
  containerStyle?: string;
}

export function Button({ children, variant = 'contained', onPress, containerStyle }: PropsWithChildren & ButtonProps) {
  const variantStyle = variant === 'contained' ? 'bg-primary text-white' : 'text-primary border border-primary';
  const textStyle = variant === 'contained' ? 'text-white' : 'color-primary-700';
  return (
    <TouchableOpacity
      className={`${variantStyle} rounded-xl h-12 w-full justify-center items-center ${containerStyle}`}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text className={`${textStyle} font-pregular`}>{children}</Text>
    </TouchableOpacity>
  );
}
