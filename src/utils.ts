export function getRand(int: number) {
  return Math.floor(Math.random() * int);
}

export function getRandomElement(array: string[]) {
  return array[getRand(array.length)];
}

export function capitalizeFirstLetter(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}
