function powMap([first, ...second]){
      if (second.length === 0) return [first *first];
      return [first*first, ...powMap(second)];
}

    function powMap2(arr){
    if (arr.length === 0)
        return 0;
    return [arr[0]*arr[0]].concat(powMap2(arr.slice(1)));
}
