export default function hasValuesFromArray(set, array) {
  let contains = true;
  array.forEach((number) => {
    if (!set.has(number)) {
      contains = false;
    }
  });
  return contains;
}
