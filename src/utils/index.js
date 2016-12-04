const LOREM_IPSUM_WORDS = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
  'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
  'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
  'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ' +
  'mollit anim id est laborum').split(' ')
const COLORS = ['red', 'blue', 'green', 'yellow']
const SHAPES = ['circle', 'square', 'triangle']
const LOCATIONS = ['Seattle', 'New York', 'Chicago', 'Los Angeles', 'Portland']
/**
 * Returns a random element from the provided list.
 * @param {Array} list List from were to take elements.
 * @return {Any} Random element from the list.
 */
export const randomFrom = list => (
  list[Math.floor(Math.random() * list.length)]
)
/**
 * Returns a string of random lorem ipsum words of the size needed.
 * @param {Number} wordCount The lenght in words of the string.
 * @return {String} Random string of lorem ipsum words.
 */
export const lorem = wordCount => (
  Array.apply(null, Array(wordCount))
  .map(item => randomFrom(LOREM_IPSUM_WORDS))
  .join(' ')
)
/**
 * identity function. Taekes a value and returns it.
 * @param {Any} x Any value.
 * @return {Any} returns the given value.
 */
export const identity = x => x
/**
 * Creates a valid selection item
 * @param {Number} count Number of items to return.
 * @param {Number} count Index to start the count. Defaults to 0.
 * @return {Array} List of valid selection items.
 */
export const createListItems = (count, startIndex=0) => (
  Array.apply(null, Array(count))
  .map((item, index) => {
    let size = 150 + Math.round(Math.random() * 100)
    return {
      thumbnail: `//placehold.it/${size}x${size}`,
      key: `${item}-${index + startIndex} ${lorem(4)}`,
      name: lorem(5),
      description: lorem(10 + Math.round(Math.random() * 50)),
      color: randomFrom(COLORS),
      shape: randomFrom(SHAPES),
      location: randomFrom(LOCATIONS),
      width: size,
      height: size,
    }
  })
)
