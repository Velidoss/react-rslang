const textBookContants = {
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

export default textBookContants;
