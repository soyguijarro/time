import { arrayToObject, objectToArray } from './utils';

describe('arrayToObject', () => {
  const array = [1, 2, 3];
  const double = x => [x, x * 2];

  it('returns object', () => {
    const result = arrayToObject(array, double);
    expect(result).toEqual({ 1: 2, 2: 4, 3: 6 });
  });

  it('returns empty object if empty array', () => {
    const result = arrayToObject([], double);
    expect(result).toEqual({});
  });

  it('returns empty object if no array', () => {
    const result = arrayToObject(undefined, double);
    expect(result).toEqual({});
  });

  it('returns empty object if no function', () => {
    const result = arrayToObject();
    expect(result).toEqual({});
  });
});

describe('objectToArray', () => {
  const object = { user1: 'john', user2: 'bill' };
  const toUppercase = (key, value) => ({ id: key, name: value });

  it('returns array if custom function', () => {
    const result = objectToArray(object, toUppercase);
    expect(result).toEqual([
      { id: 'user1', name: 'john' },
      { id: 'user2', name: 'bill' },
    ]);
  });

  it('returns array if no function', () => {
    const result = objectToArray(object);
    expect(result).toEqual(['john', 'bill']);
  });

  it('returns empty array if empty object', () => {
    const result = objectToArray({}, toUppercase);
    expect(result).toEqual([]);
  });

  it('returns empty array if no object', () => {
    const result = objectToArray();
    expect(result).toEqual([]);
  });
});
