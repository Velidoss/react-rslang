import * as images from '../assets/images/index';

const {
  main: {
    featureAudio,
    featureLearn,
    featurePlay,
  },
  teams: {
    velidoss,
    vaz,
    reagentjs,
    arumirinka,
  },
} = images;

export const features = [
  {
    title: 'Изучайте новые слова',
    text: 'Alii decore ex mel, nam vide munere quaestio ei, appareat iudicabit interesset id mel. Mel at summo gloriatur, eos agam epicuri ex. Per an natum salutatus, te mel posse salutandi consetetur. ',
    image: featureLearn,
  },
  {
    title: 'Оттачивайте произношение',
    text: 'Congue adipisci signiferumque ad est, est te libris convenire. Eu mea erant essent. Alii decore ex mel, nam vide munere quaestio ei, appareat iudicabit interesset id mel. Mel at summo gloriatur, eos agam epicuri ex.',
    image: featureAudio,
  },
  {
    title: 'Играйте',
    text: 'Per an natum salutatus, te mel posse salutandi consetetur. Congue adipisci signiferumque ad est, est te libris convenire. Eu mea erant essent. Eu mea erant essent.',
    image: featurePlay,
  },
];

export const team = [
  {
    name: 'Юрий Велидченко',
    text: 'Full-stack Team Lead. Разрабатывал back-end, Учебник, Словарь, а также мини-игру Саванна.',
    image: velidoss,
    github: 'Velidoss',
  },
  {
    name: 'Ирина Степанова',
    text: 'Front-end разработчик. Разрабатывала мини-игры Спринт и Аудиовызов.',
    image: arumirinka,
    github: 'arumirinka',
  },
  {
    name: 'Василий Задорожнюк',
    text: 'Front-end / дизайнер. Макет в Figma, стилизация, главная страница, авторизация, статистика словаря, рефакторинг.',
    image: vaz,
    github: 'va-z',
  },
  {
    name: 'Виктор Башинчеев',
    text: 'Full-stack разработчик. Разрабатывал back-end и мини-игру Puzzle.',
    image: reagentjs,
    github: 'reagentjs',
  },
];

export const miniGameLocations = [
  '/savannah',
  '/puzzle',
  '/audiochallenge',
  '/sprint',
];

export const youTubeVideoId = 'dQw4w9WgXcQ';
