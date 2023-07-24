export const fauxAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 1000);
  });
};

export const callbackAsync = (callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback("foo"));
    }, 1000);
  });
};
