import {User} from 'react-native-gifted-chat';
import uuid from 'react-native-uuid';
import {faker} from '@faker-js/faker';
import {CustomMessage} from './types';

const ANOTHER_USER_ID = String(uuid.v4());
const CURRENT_USER_ID = String(uuid.v4());

export const ANOTHER_USER: User = {
  _id: ANOTHER_USER_ID,
  avatar: faker.image.avatarGitHub(),
  name: faker.person.fullName(),
};

export const CURRENT_USER: User = {
  _id: CURRENT_USER_ID,
  avatar: faker.image.avatarGitHub(),
  name: faker.person.fullName(),
};

export const messageFirstPart: CustomMessage[] = [
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: 'Test',
    image:
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    createdAt: Date.now(),
    viewsCount: 1,
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
    viewsCount: 1,
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
    viewsCount: 1,
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
    viewsCount: 1,
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s',
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
];

export const messageSecondPart: CustomMessage[] = [
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: CURRENT_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
  {
    _id: String(uuid.v4()),
    user: ANOTHER_USER,
    text: faker.lorem.sentences(),
    createdAt: Date.now(),
  },
];
