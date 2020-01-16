var num = 100;

var arr = {};

function fact(n){
//var comment = "unn unnnnnnnnnn jeet ki taiyaariiiii";
  if(arr[n])
    return arr[n];

  else if(n<=1)
    return 1;

  else {
      arr[n] = n*fact(n-1);
      return arr[n];
    }

  }


console.log(fact(num));
