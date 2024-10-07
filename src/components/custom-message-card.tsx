import React from 'react';
import {MessageProps} from 'react-native-gifted-chat';
import {CustomMessage} from '../data/types';
import {
  Text,
  View,
  FlexAlignType,
  Image,
  StyleProp,
  ImageStyle,
} from 'react-native';

export const CustomMessageCard = ({
  position,
  currentMessage,
  user,
}: MessageProps<CustomMessage>) => {
  const alignment: FlexAlignType =
    position === 'left' ? 'flex-start' : 'flex-end';

  const rootStyles = {
    margin: 5,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 10,
    alignSelf: alignment,
  };

  const userNameStyles = {
    marginBottom: 4,
    textAlign: position,
    color: 'green',
  };

  const imageStyles: StyleProp<ImageStyle> = {
    width: 300,
    height: 300,
    marginBottom: 4,
  };

  const textStyles = {
    fontSize: 16,
    maxWidth: 300,
  };

  const viewsCountStyles = {
    marginTop: 4,
    textAlign: position,
    color: '#484848',
  };

  return (
    <View style={rootStyles}>
      <Text style={userNameStyles}>{user.name}</Text>

      {currentMessage.image && (
        <Image
          resizeMode="cover"
          src={currentMessage.image}
          style={imageStyles}
        />
      )}

      <Text style={textStyles}>{currentMessage.text}</Text>

      {currentMessage.viewsCount && (
        <Text style={viewsCountStyles}>Views: {currentMessage.viewsCount}</Text>
      )}
    </View>
  );
};
