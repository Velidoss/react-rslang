const removeLast = (arr, word) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === word) {
      arr.splice(i, 1);
      break;
    }
  }

  return arr;
};

export default removeLast;
