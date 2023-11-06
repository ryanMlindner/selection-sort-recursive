function selectionSortRecursive(arr) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
/**
 * given an array of integers, find the lowest value in the array
 * splice it out of the array
 * put that value in the first index of a new array, with the rest of the array 
 * derived from a recursive call of the remaining values in the original array
 */
// And a written explanation of your solution
/**
 * recursion sometimes makes more sense when i think about it in terms of a return statement,
 * because then you can chain things down without having to put extra information in
 * the function call (since the problem statement defines what they want the function call to be)
 * when i originally learned how recursion worked, it was from my dad, and he taught me the
 * opposite way, always returning a static call, initiating the recursive logic in the function
 * call, so this has been a good learning experience to kind of learn everything backwards and
 * forwards. good way to make sure i know it
 */
