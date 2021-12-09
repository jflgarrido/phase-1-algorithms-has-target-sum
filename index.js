function hasTargetSum(array, target) {
  for (let i=0; i < array.length; i++){
    const balance = target - array[i];
    for (let j=i +1; j <array.length; j++)
      if(array[j] === balance){
        return true
      }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  function hasTargetSum(array, target) {
  // n steps
  for (let i=0; i < array.length; i++){
    const balance = target - array[i];
    // n steps
    for (let j=i +1; j <array.length; j++)
      if(array[j] === balance){
        return true
      }
  }
  return false;
  Big O notation => O(n*n) or O(n^2) or quadratic time complexity
*/

/* 
  Write a function that has arguments array and target
    iterate through the array of numbers
      For each number, know the balance between the target and the current number
      Iterate through the rest of the numbers
        See if there are numbers there's a number that is the same with the balance
          Return true if there are matches
  Otherwise, return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([13, 8, 4, 20], 17));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
