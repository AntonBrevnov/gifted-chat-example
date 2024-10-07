import {IMessage} from 'react-native-gifted-chat';

export interface CustomMessage extends IMessage {
  viewsCount?: number;
}
