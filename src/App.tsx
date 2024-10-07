import React from 'react';
import {useEffect, useState} from 'react';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {
  CURRENT_USER,
  messageFirstPart,
  messageSecondPart,
} from './data/messages';
import {CustomMessage} from './data/types';
import {CustomMessageCard} from './components/custom-message-card';
import {View} from 'react-native';
import {CustomInput} from './components/custom-input';
import {CustomActions} from './components/custom-options';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEarlierLoaded, setIsEarlierLoaded] = useState(false);
  const [messagesList, setMessagesList] = useState<CustomMessage[]>([]);

  useEffect(() => {
    setMessagesList(messageFirstPart);
  }, []);

  const onSend = (messages: IMessage[] = []) => {
    setMessagesList(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  };

  const onLoadEarlier = () => {
    if (!isEarlierLoaded) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsEarlierLoaded(true);
        setMessagesList(previousMessages =>
          GiftedChat.append(previousMessages, messageSecondPart),
        );
      }, 2000);
    }
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <View style={{flex: 1, paddingTop: 40}}>
        <GiftedChat
          user={CURRENT_USER}
          loadEarlier={!isEarlierLoaded}
          isLoadingEarlier={isLoading}
          onLoadEarlier={onLoadEarlier}
          messages={messagesList}
          renderMessage={CustomMessageCard}
          renderComposer={CustomInput}
          renderActions={CustomActions}
          minComposerHeight={45}
          onSend={messages => onSend(messages)}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
