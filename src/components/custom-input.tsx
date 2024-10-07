import React from 'react';
import {Composer, ComposerProps} from 'react-native-gifted-chat';

export const CustomInput = (props: ComposerProps) => {
  const inputStyle = {
    backgroundColor: '#f5f5f5',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    borderRadius: 15,
    padding: 8,
    marginRight: 8,
  };

  return <Composer {...props} textInputStyle={inputStyle} />;
};
