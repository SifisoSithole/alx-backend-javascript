export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const noQueries = weakMap.get(endpoint);
    if (noQueries >= 4) throw Error('Endpoint load is high');
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  } else { weakMap.set(endpoint, 1); }
}
