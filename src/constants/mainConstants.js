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
    text: 'Duo dicam tempor denique eu, qui in vidit conceptam, ad eum wisi patrioque reprehendunt.',
    image: velidoss,
    github: 'Velidoss',
  },
  {
    name: 'Ирина Степанова',
    text: 'Duo dicam tempor denique eu, qui in vidit conceptam, ad eum wisi patrioque reprehendunt.',
    image: arumirinka,
    github: 'arumirinka',
  },
  {
    name: 'Василий Задорожнюк',
    text: 'Duo dicam tempor denique eu, qui in vidit conceptam, ad eum wisi patrioque reprehendunt.',
    image: vaz,
    github: 'va-z',
  },
  {
    name: 'Виктор Башинчеев',
    text: 'Duo dicam tempor denique eu, qui in vidit conceptam, ad eum wisi patrioque reprehendunt.',
    image: reagentjs,
    github: 'reagentjs',
  },
];

export const miniGameLocations = [
  '/savannah',
  '/puzzle',
  '/audiochallange',
  '/sprint',
];

export const youTubeVideoId = 'dQw4w9WgXcQ';
