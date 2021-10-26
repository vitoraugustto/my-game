export function persistEnemy(selectedEnemy, enemyHitPoints) {
  return selectedEnemy !== ""
    ? sessionStorage.setItem(selectedEnemy, JSON.stringify({ enemyHitPoints }))
    : "";
}
