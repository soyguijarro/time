export const arrayToObject = (array = [], fn = (x, i) => [i, x]) =>
  array.reduce((object, item, index) => {
    const [key, value] = fn(item, index);
    object[key] = value;
    return object;
  }, {});

export const objectToArray = (object = {}, fn = (key, value) => value) =>
  Object.keys(object).map((key, index) => fn(key, object[key], index));
