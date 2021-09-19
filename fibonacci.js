function fib(n) {
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

//Storing the results of expensive function calls and returning 
//the cached result when the same inputs occur again.
// function fib(n, memo=[]){
//   if(memo[n] !== undefined) return memo[n];
//   if(n <= 2) return 1;
//   var res = fib(n-1, memo) + fib(n-2, memo);
//   memo[n] = res;
//   console.log(memo)
//   return res;
// }

// Refactoring
function fib_memo(n, memo=[undefined,1,1]){
  if(memo[n] !== undefined) return memo[n];
  var res = fib(n-1, memo) + fib(n-1, memo);
  memo[n] = res;
  return res;
}

// Base case solving complext problems
function fib_table(n){
  if(n <= 2) return 1;
  var fibNums = [0,1,1];
  for(var i = 3; i <= n; i++){
      fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}