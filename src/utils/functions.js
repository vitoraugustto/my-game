export function getIntervalDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function persistEnemy(selectedEnemy, baseStatus) {
  return selectedEnemy !== ""
    ? sessionStorage.setItem(selectedEnemy, JSON.stringify({ baseStatus }))
    : "";
}
