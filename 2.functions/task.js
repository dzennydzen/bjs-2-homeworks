function getArrayParams(...arr) {
    let min = arr[0];
    let max = arr[0];
    const sum = arr.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0)
    const avg = Number((sum / arr.length).toFixed(2));

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] < min) {
           min = arr[i];
       } else if (arr[i] > max) {
           max = arr[i];
       }
    }

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const sum = arr.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0)

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  
  for (let num of arr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  const even = arr.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc += num;
    }
    return acc;
},0)

  const odd = arr.reduce((acc, num) => {
      if (num % 2 !== 0) {
          acc += num;
      }
      return acc;
  }, 0);

  return even - odd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;
  const sum = arr.reduce((acc, num) => {
    if (num % 2 === 0) {
            acc += num;
            count += 1;
        }
        return acc;
  },0)
  return sum / count;
}

function makeWork (arrOfArr, func) {
  const res = arrOfArr.map(arr => func(...arr));
  return Math.max(...res);
  // let max = res[0];

  // for (let i = 0; i < res.length; i++) {
  //   if (res[i] > max) {
  //     max = res[i];
  //   }
  // }

  // return max;
}
