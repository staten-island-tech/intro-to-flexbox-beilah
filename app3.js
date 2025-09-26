/* function middle(x, y, z) {
  const weights = [x, y, z];
  weights.sort ((a, b) => a - b);
  console.log(weights[1]);
}
middle(10, 5, 8); */



function middle(x, y, z) {
    if((x >= y && x<=z) || (x<= y && x>= z)) {
        console.log(x)
    }
}
middle(10, 5, 8);




/* function getSecondLargest(x, y, z) {
    const numbers = [x, y, z];
    const unique = [...new Set(numbers)]; //rmeoves dupes
    unique.sort((a, b) => b - a);
    console.log(unique[1])
}
getSecondLargest(3, 7, 5) */