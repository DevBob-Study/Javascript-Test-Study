const handleSort = (array) => {
  let sortarray = array.sort((a, b) => a - b);
  return sortarray;
};

function solution(sizes) {
  let widtharray = [];
  let heightarray = [];
  sizes.map((size) => {
    let sortsize = handleSort(size);
    widtharray.push(sortsize[0]);
    heightarray.push(sortsize[1]);
  });
  let sortWidthArray = handleSort(widtharray);
  let sortHeightArray = handleSort(heightarray);

  return (
    sortWidthArray[sortWidthArray.length - 1] *
    sortHeightArray[sortHeightArray.length - 1]
  );
}
