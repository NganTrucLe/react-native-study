import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { Icon } from './Icon';
import { useState } from 'react';

/**
 * PasswordInputProps is the props type of the PasswordInput component.
 */
interface PasswordInputProps extends TextInputProps {
  containerStyle?: string;
  /**
   * The hint text displayed in the input when it's empty.
   * This text should guide the user on what to enter in the input.
   */
  placeholder?: string;
  error?: boolean;
}
export function PasswordInput({ containerStyle, placeholder, error, ...rest }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className={`mt-2 w-full ${containerStyle} ${error ? 'border border-error-500' : ''} h-12 bg-neutral-200 rounded-xl p-3 font-pregular flex-row items-center justify-center`}>
      <TextInput
        className='flex-1 h-full font-pregular '
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        {...rest}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Icon name={showPassword ? 'eye-off' : 'remove-red-eye'} className='text-neutral-400' />
      </TouchableOpacity>
    </View>
  );
}
