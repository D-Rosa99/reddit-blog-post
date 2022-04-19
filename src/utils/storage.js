export const getFromLocalStorage = (label) => JSON.parse(localStorage.getItem(label));

export const setLocalStorage = (data, label) => localStorage.setItem(label, JSON.stringify(data));
