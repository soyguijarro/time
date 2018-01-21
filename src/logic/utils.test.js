import { arrayToObject, objectToArray, getFirstLetter } from './utils';

describe('arrayToObject', () => {
  const array = [4, 1, 7];
  const doubleIndex = (x, i) => [x, x * 2 * (i + 1)];

  it('returns object if function provided', () => {
    const result = arrayToObject(array, doubleIndex);
    expect(result).toEqual({ 4: 8, 1: 4, 7: 42 });
  });

  it('returns empty object if no function provided', () => {
    const result = arrayToObject(array);
    expect(result).toEqual({ 0: 4, 1: 1, 2: 7 });
  });

  it('returns empty object if empty array provided', () => {
    const result = arrayToObject([], doubleIndex);
    expect(result).toEqual({});
  });

  it('returns empty object if no array provided', () => {
    const result = arrayToObject();
    expect(result).toEqual({});
  });
});

describe('objectToArray', () => {
  const object = { user1: 'john', user2: 'bill' };
  const addId = (key, value) => ({ id: key, name: value });

  it('returns array if function provided', () => {
    const result = objectToArray(object, addId);
    expect(result).toEqual([
      { id: 'user1', name: 'john' },
      { id: 'user2', name: 'bill' },
    ]);
  });

  it('returns array if no function provided', () => {
    const result = objectToArray(object);
    expect(result).toEqual(['john', 'bill']);
  });

  it('returns empty array if empty object provided', () => {
    const result = objectToArray({}, addId);
    expect(result).toEqual([]);
  });

  it('returns empty array if no object provided', () => {
    const result = objectToArray();
    expect(result).toEqual([]);
  });
});

describe('getFirstLetter', () => {
  it('returns first letter of string provided', () => {
    const result = getFirstLetter('test');
    expect(result).toBe('t');
  });

  it('returns empty string if no string provided', () => {
    const result = getFirstLetter();
    expect(result).toBe('');
  });
});
