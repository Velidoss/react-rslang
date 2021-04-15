import {
  Pets,
  DirectionsRun,
  Headset,
  Extension,
} from '@material-ui/icons';
//
import * as images from '../assets/images';

export const linkTypes = {
  LINK_PUBLIC: 'LINK_PUBLIC',
  LINK_PRIVATE: 'LINK_PRIVATE',
};

export const textBookConstants = {
  TEXTBOOK_PAGES_QUANTITY: 30,
  getTextBookLinks: (setGroupNumber) => ([
    {
      id: 0,
      link: '/textbook',
      text: 'Раздел 1',
      onClickAction: () => setGroupNumber(0),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 1,
      link: '/textbook',
      text: 'Раздел 2',
      onClickAction: () => setGroupNumber(1),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 2,
      link: '/textbook',
      text: 'Раздел 3',
      onClickAction: () => setGroupNumber(2),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 3,
      link: '/textbook',
      text: 'Раздел 4',
      onClickAction: () => setGroupNumber(3),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 4,
      link: '/textbook',
      text: 'Раздел 5',
      onClickAction: () => setGroupNumber(4),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 5,
      link: '/textbook',
      text: 'Раздел 6',
      onClickAction: () => setGroupNumber(5),
      type: linkTypes.LINK_PUBLIC,
    },
    {
      id: 6,
      link: '/textbook/learning',
      text: 'Изучаемые слова',
      onClickAction: () => {},
      type: linkTypes.LINK_PRIVATE,
    },
    {
      id: 7,
      link: '/textbook/difficult',
      text: 'Сложные слова',
      onClickAction: () => {},
      type: linkTypes.LINK_PRIVATE,
    },
    {
      id: 8,
      link: '/textbook/deleted',
      text: 'Удаленные слова',
      onClickAction: () => {},
      type: linkTypes.LINK_PRIVATE,
    },
  ]),
};

const {
  minigames: {
    sprint,
    savannah,
    audioChallenge,
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
    path: '/savannah',
    img: savannah,
    className: 'mini-game-link__savannah',
  },
  {
    title: 'Аудиовызов',
    path: '/audiochallenge',
    img: audioChallenge,
    className: 'mini-game-link__audiochallenge',
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
    statName: 'sprintStats',
  },
  {
    title: 'Саванна',
    icon: Pets,
    statName: 'savannahStats',
  },
  {
    title: 'Аудиовызов',
    icon: Headset,
    statName: 'audioChallengeStats',
  },
  {
    title: 'Паззл',
    icon: Extension,
    statName: 'puzzleStats',
  }];

export const TEXTBOOK_PAGES_QUANTITY = 30;
