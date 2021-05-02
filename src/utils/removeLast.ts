const removeLast = (arr: [], word: string): [] => {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] === word) {
      arr.splice(i, 1);
      break;
    }
  }

  return arr;
};

export default removeLast;
