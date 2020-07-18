var reverse = function(x) {
    if (x<Math.pow(-2,31)||x>(Math.pow(2,31)-1)) {
        return 0;
    } else if (x>=0) {
        console.log(Number(Array.from(Math.abs(x+'')+'').reverse().join('')));
        
        return Number(Array.from(Math.abs(x+'')+'').reverse().join(''));
    } else {
        return -1*Number(Array.from(Math.abs(x+'')+'').reverse().join(''));
    }
  };
  reverse(1534236469);
