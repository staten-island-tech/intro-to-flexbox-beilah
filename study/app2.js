/* const age = 18;
const citizen = true; */

// 2 equals evaluates and ignores type
// if 1 =="1"

//3 equals evaluates and compares type
//if 1 ==="1"

// && and || or

/* if (age === true && citizen === true) {
    console.log("can run for prez");
}

if (age >= 18) {
  console.log("vote");
} else {
  console.log("u can't vote haha loser");
}
 */

/* const temp = 32;
if (temp >= 212) {
  console.log("boiling ssssss");
} else if (temp <= 32) {
  console.log("brrr frozen");
} else {
  console.log("dogwater");
}
 */

function enterCastle(hasKey, hasMagic, isBanned) {
  if ((hasKey === true || hasMagic === true) && !isBanned) {
    console.log("u may enter");
  } else {
    console.log("get out");
  }
}
enterCastle(true, true, true);