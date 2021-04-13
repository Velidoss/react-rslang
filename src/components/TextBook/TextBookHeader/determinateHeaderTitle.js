const determinateHeaderTitle = (pathname, groupNumber) => {
  switch (pathname) {
    case '/textbook/learning':
      return 'Изучаемые слова';
    case '/textbook/deleted':
      return 'Удаленные слова';
    case '/textbook/difficult':
      return 'Сложные слова';
    default:
      return `Раздел ${groupNumber + 1}`;
  }
};

export default determinateHeaderTitle;
