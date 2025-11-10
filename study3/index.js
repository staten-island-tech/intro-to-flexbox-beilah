function gamble(quarters, m1, m2, m3) {
  let timesPlayed = 0;
  let curr = 1;

  while (quarters > 0) {
    if (curr === 1) {
      timesPlayed += 1;
      m1 += 1;
      quarters -= 1;
      curr = 2;
      if (m1 === 35) {
        quarters += 30;
        m1 = 0;
      }
    } else if (curr === 2) {
      timesPlayed += 1;
      m2 += 1;
      quarters -= 1;
      curr = 3;
      if (m2 === 100) {
        quarters += 60;
        m2 = 0;
      }
    } else if (curr === 3) {
      timesPlayed += 1;
      m3 += 1;
      quarters -= 1;
      curr = 1;
      if (m3 === 10) {
        quarters += 9;
        m3 = 0;
      }
    }
  }

  console.log(`Martha plays ${timesPlayed} before going broke.`);
}
gamble(48, 3, 10, 4);
