import { TextInput, TextInputProps, View } from 'react-native';
import { Icon } from './Icon';
import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

/**
 * CustomTextInputProps is the props type of the CustomTextInput component.
 */
interface CustomTextInputProps extends TextInputProps {
  containerStyle?: string;
  /**
   * The hint text displayed in the input when it's empty.
   * This text should guide the user on what to enter in the input.
   */
  placeholder?: string;
  /**
   * The name of the icon displayed at the end of the input.
   * This icon should provide a visual indication of the input's purpose.
   */
  endIcon?: ComponentProps<typeof Ionicons>['name'];
  error?: boolean;
}
export function CustomTextInput(props: CustomTextInputProps) {
  const { containerStyle, endIcon, error, ...rest } = props;
  return (
    <View
      className={`mt-2 w-full ${containerStyle} ${error ? 'border border-error-500' : ''} h-12 bg-neutral-200 rounded-xl p-3 font-pregular flex-row items-center justify-center`}>
      <TextInput className='flex-1 h-full font-pregular' {...rest} />
      {endIcon && <Icon name={endIcon} className='text-neutral-400' />}
    </View>
  );
}
