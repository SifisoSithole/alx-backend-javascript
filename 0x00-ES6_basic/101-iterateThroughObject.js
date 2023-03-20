export default function iterateThroughObject(reportWithIterator) {
  let text = '';
  const lastEmployee = reportWithIterator[reportWithIterator.length - 1];
  for (const employee of reportWithIterator) {
    if (lastEmployee !== employee) {
      text += `${employee} | `;
    }
  }
  text += lastEmployee;
  return text;
}
