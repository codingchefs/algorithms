const binarySearch = (array, value) => {
    // start
    let start = 0;
    // end
    let end = array.length - 1;
   // calculate middle
    let middle = Math.floor((start + end) /2);
   // while value not found and end >=start
    while(array[middle] !== value && end  >= start) {
      // check if value > middle
      if(value > array[middle]) start = middle + 1;
      // else if value < middle
      else end = middle + 1;

      middle = Math.floor((start + end) /2);
    }
   // if element found
  if(array[middle] === value) {
    return middle;
  }

  // if element not found
  return -1;

}

module.exports = binarySearch;
