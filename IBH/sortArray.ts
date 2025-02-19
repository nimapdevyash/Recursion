// this approch is similar for stack as well infact you could use the same code ,
// as we are using the same functions as stack methods so it's fine.

function sortArray(arr: number[]): void {
  if (arr.length <= 1) {
    return;
  }

  let lastNUm = arr.pop()!;

  sortArray(arr);

  insertInSortedArr(arr, lastNUm);
}

function insertInSortedArr(arr: number[], num: number): void {
  if (arr.length == 0 || arr[arr.length - 1] <= num) {
    arr.push(num);
    return;
  }

  let lastNum = arr.pop()!;

  insertInSortedArr(arr, num);

  arr.push(lastNum);
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 10];
sortArray(arr);

console.log(arr);
