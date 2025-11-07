function gamble (quarters, m1, m2, m3) {
    timesPlayed === 0
    while (quarters > 0) {
        m1 += 1;
        if (m1 = 35) {
            quarters += 30;
            m1 === 0;
        }
        quarters -= 1;
        timesPlayed += 1;

        m2 += 1;
        if (m2 = 100) {
            quarters += 60;
            m2 === 0;
        }
        quarters -= 1;
        timesPlayed += 1;

        m3 += 1;
        if (m1 = 10) {
            quarters += 9;
            m3 === 0;
        }
        quarters -= 1;
        timesPlayed += 1;
    };
    console.log("Martha plays {timesPlayed} before going broke.");
}
gamble(48, 3, 10, 60);