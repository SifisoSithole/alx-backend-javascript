export default function cleanSet(set, str) {
  let result = '';
  if (str === '') return result;
  for (const item of set) {
    if (item.startsWith(str)) result += `-${item.replace(str, '')}`;
  }
  return result.replace('-', '');
}
