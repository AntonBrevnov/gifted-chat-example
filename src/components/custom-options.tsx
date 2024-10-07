import React from 'react';
import {Actions, ActionsProps} from 'react-native-gifted-chat';

export const CustomActions = (props: ActionsProps) => {
  return (
    <Actions
      {...props}
      options={{
        'Open Gallery': () => {},
        'Take phone/video': () => {},
        Cancel: () => {},
      }}
    />
  );
};
