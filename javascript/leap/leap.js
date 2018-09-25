export function isLeap(year) {
  // if it's evenly divisible by 100, but not evenly divisible by 400
  if ( (year % 100 === 0) && (year % 400 !== 0) ) {
    return false;
  }
  // if it's divisible by 4 (or 400)
  if ( year % 4 === 0 ) {
    return true;
  }
}