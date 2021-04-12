const textBookContants = {
  TEXTBOOK_PAGES_QUANTITY: 30,
  getTextBookLinks: (setGroupNumber) => ([
    {
      link: '/textbook',
      text: 'Раздел 1',
      onClickAction: () => setGroupNumber(0),
    },
    {
      link: '/textbook',
      text: 'Раздел 2',
      onClickAction: () => setGroupNumber(1),
    },
    {
      link: '/textbook',
      text: 'Раздел 3',
      onClickAction: () => setGroupNumber(2),
    },
    {
      link: '/textbook',
      text: 'Раздел 4',
      onClickAction: () => setGroupNumber(3),
    },
    {
      link: '/textbook',
      text: 'Раздел 5',
      onClickAction: () => setGroupNumber(4),
    },
    {
      link: '/textbook',
      text: 'Раздел 6',
      onClickAction: () => setGroupNumber(5),
    },
    {
      link: '/textbook/learning',
      text: 'Изучаемые слова',
      onClickAction: () => {},
    },
    {
      link: '/textbook/difficult',
      text: 'Сложные слова',
      onClickAction: () => {},
    },
    {
      link: '/textbook/deleted',
      text: 'Сложные слова',
      onClickAction: () => {},
    },
  ]),
};

export default textBookContants;
