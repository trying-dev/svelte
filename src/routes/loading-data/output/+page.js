/** @type {import('./$types').PageLoad} */
export function load() {
  return {
    a: Promise.resolve('a'),
    b: Promise.resolve('b'),
    c: {
      value: Promise.resolve('c')
    }
  };
}