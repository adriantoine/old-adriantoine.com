export function shallowDiffers(a, b) {
  for (let key in a) {
    if (a[key] !== b[key]) {
      return true;
    }
  }

  for (let key in b) {
    if (!(key in a)) {
      return true;
    }
  }

  return false;
}
