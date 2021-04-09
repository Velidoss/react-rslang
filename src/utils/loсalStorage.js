function getLocalStorageItem(key, defaultValue) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    return defaultValue;
  }
}

function setLocalStorageItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key) {
  window.localStorage.removeItem(key);
}

export {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
};
