import {
  Pets,
  DirectionsRun,
  Headset,
  Extension,
} from '@material-ui/icons';
//
import * as images from '../assets/images';

export const textBookConstants = {
  TEXTBOOK_PAGES_QUANTITY: 30,
  getTextBookLinks: (setGroupNumber) => ([
    {
      id: 0,
      link: '/textbook',
      text: 'Раздел 1',
      onClickAction: () => setGroupNumber(0),
    },
    {
      id: 1,
      link: '/textbook',
      text: 'Раздел 2',
      onClickAction: () => setGroupNumber(1),
    },
    {
      id: 2,
      link: '/textbook',
      text: 'Раздел 3',
      onClickAction: () => setGroupNumber(2),
    },
    {
      id: 3,
      link: '/textbook',
      text: 'Раздел 4',
      onClickAction: () => setGroupNumber(3),
    },
    {
      id: 4,
      link: '/textbook',
      text: 'Раздел 5',
      onClickAction: () => setGroupNumber(4),
    },
    {
      id: 5,
      link: '/textbook',
      text: 'Раздел 6',
      onClickAction: () => setGroupNumber(5),
    },
    {
      id: 6,
      link: '/textbook/learning',
      text: 'Изучаемые слова',
      onClickAction: () => {},
    },
    {
      id: 7,
      link: '/textbook/difficult',
      text: 'Сложные слова',
      onClickAction: () => {},
    },
    {
      id: 8,
      link: '/textbook/deleted',
      text: 'Удаленные слова',
      onClickAction: () => {},
    },
  ]),
};

const {
  minigames: {
    sprint,
    savanna,
    audioChallange,
    puzzle,
  },
} = images;

export const miniGameLinksConfig = [
  {
    title: 'Спринт',
    path: '/sprint',
    img: sprint,
    className: 'mini-game-link__sprint',
  },
  {
    title: 'Саванна',
    path: '/savanna',
    img: savanna,
    className: 'mini-game-link__savanna',
  },
  {
    title: 'Аудиовызов',
    path: '/audiochallange',
    img: audioChallange,
    className: 'mini-game-link__audiochallange',
  },
  {
    title: 'Паззл',
    path: '/puzzle',
    img: puzzle,
    className: 'mini-game-link__puzzle',
  },
];

export const statChipConfig = [
  {
    title: 'Спринт',
    icon: DirectionsRun,
  },
  {
    title: 'Саванна',
    icon: Pets,
  },
  {
    title: 'Аудиовызов',
    icon: Headset,
  },
  {
    title: 'Паззл',
    icon: Extension,
  }];

export const TEXTBOOK_PAGES_QUANTITY = 30;
