let timer;
export default (callback, timeout = 200) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, timeout);
};
