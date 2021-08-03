//REVERSE WORDS WITHOUT CHANGING SYMBOLS POSITION
const sentence = "Hello world, I am Jvstblvck.";

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split(/([a-zA-Z]+)/)
        .map((word) => word.split("").reverse().join(""))
        .join("")
    )
    .join(" ");
}

reverseWords(sentence);

//FIND THE MOST FREQUENT NUMBER
const numbers = [1, 2, 3, 55, 6, 55, 7, 55, 8, 6, 10];

function mostFrequent(list) {
  const obj = list.reduce(function (acc, n) {
    acc[n.toString()] = Object.keys(acc).includes(n.toString())
      ? acc[n.toString()] + 1
      : 1;
    return acc;
  }, {});

  const maxInteger = Object.keys(obj).find(
    (key) => obj[key] === Math.max(...Object.values(obj))
  );
  return Number(maxInteger);
}
mostFrequent(numbers);

//BINARY SEARCH
function newArr(n) {
  return [...new Set([...Array(n)].map(() => Math.floor(Math.random() * 100)))];
}
function binarySearch(sortedArray, target) {
  if (sortedArray.length === 1 && sortedArray[0] !== target) return false;

  const mid = Math.floor(sortedArray.length / 2);
  if (sortedArray[mid] === target) return true;

  if (sortedArray[mid] > target) {
    return binarySearch(sortedArray.splice(0, mid), target);
  }
  return binarySearch(sortedArray.splice(mid), target);
}
function sortInt(a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
}
sa = newArr(100).sort(sortInt);
binarySearch(sa, 10);

//BUBBLE SORT
const ints = [9, 8, 6, 4, 29, 11, 2, 1, 11, 7];

function bubbleSort(nums) {
  const sorted = [...nums];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j + 1], sorted[j]] = [sorted[j], sorted[j + 1]];
      }
    }
  }

  return sorted;
}

bubbleSort(ints);
