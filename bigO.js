Big O Notation
///////////////////CONSTANT TIME O(1)//////////////////////

Constant time algorithms will always take same amount of time to be executed.
The execution time of these algorithm is independent of the size of the input.
A good example of O(1) time is accessing a value with an array index.

var arr = [ 1,2,3,4,5];
arr[2]; // => 3


//////////////////LINEAR TIME COMPLEXITY  O(n) ////////////////////////
An algorithm has a linear time complexity if the time to execute the algorithm
is directly proportional to the input size n.

Anywhere where you iterate over each item of the collection.
//looking through a magazine
//drinking beer

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let 6pack=[ipa, stout, belgian, lambic, pale ale, blonde] 6 steps
let 12pack= [ipa, stout, belgian, lambic, pale ale, blonde, ipa, stout, belgian, lambic, pale ale, blonde] 12 steps

//WHAT OTHERS CAN YOU THINK OF?

//////////////////LOGARITHMIC TIME COMPLEXITY O( log N) ///////////////////
An algorithm has logarithmic time complexity if the time it takes
to run the algorithm is proportional to the logarithm of the input size n.
 An example is binary search, which is often used to search data sets:

//real life example



///////////////////QUADRATIC TIME COMPLEXITY /////////////////


///////////////////HOW TO CALCULATE ////////////////////
