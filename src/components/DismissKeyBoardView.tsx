import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const DismissKeyBoardView: React.FC<Props> = ({children, ...props}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView
      {...props}
      style={props.style}
      behavior={Platform.OS === 'android' ? 'position' : 'padding'}>
      {children}
    </KeyboardAvoidingView>
  </TouchableWithoutFeedback>
);

export default DismissKeyBoardView;
