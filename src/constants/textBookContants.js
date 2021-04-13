import {
  Pets,
  DirectionsRun,
  Headset,
  Extension,
} from '@material-ui/icons';
//
import * as images from '../assets/images';

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
