function getLocalStorageItem(key: string, defaultValue: string) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    return defaultValue;
  }
}

function setLocalStorageItem(key: string, value: string) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key: string) {
  window.localStorage.removeItem(key);
}

export {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
};
