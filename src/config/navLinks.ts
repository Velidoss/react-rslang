import { Home, MenuBook, Pets, DirectionsRun, Headset, Extension, Equalizer } from '@material-ui/icons';

export const navLinks = [
  {
    label: 'Главная',
    path: '/',
    icon: Home,
  },
  {
    label: 'Учебник',
    path: '/textbook',
    icon: MenuBook,
  },
  {
    label: 'Мини-игры',
    path: [
      {
        label: 'Саванна',
        path: '/savannah',
        icon: Pets,
      },
      {
        label: 'Спринт',
        path: '/sprint',
        icon: DirectionsRun,
      },
      {
        label: 'Аудиовызов',
        path: '/audiochallenge',
        icon: Headset,
      },
      {
        label: 'Пазл',
        path: '/puzzle',
        icon: Extension,
      },
    ],
  },
  {
    label: 'Статистика',
    path: '/statistics',
    icon: Equalizer,
  },
];
