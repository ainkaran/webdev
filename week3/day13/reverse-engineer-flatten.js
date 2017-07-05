function flatten([beginning, ...remaining]) {
  if (beginning === undefined) {
    return [];
  }
  else if (Array.isArray(beginning)) {
    return [...flatten(beginning), ...flatten(remaining)];
  }
  else {
    return [beginning, ...flatten(remaining)];
  }
}


function flatten(array) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i])
    }
  }
  return result
}


a = [ 1, 2, [3, [4, 5] ] ];

function flatten(arr) {

  let newArray = [];

  for(let i = 0; i < arr.length; i++) {

    if(Array.isArray([i])) {

      for(let j = 0; j < [i].length; j++) {
        newArray[j] = arr[i][j];
      }

      i = i + j;
    }
    else {
      newArray[i] = arr[i];
    }

  }
   return newArray;
}

console.log(flatten(a));
