//REVERSE WORDS WITHOUT CHANGING SYMBOLS POSITION
const sentence = "Hello world, I am Jvstblvck.";

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word
        .split(/([a-zA-Z]+)/)
        .map((wrd) => wrd.split("").reverse().join(""))
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

  return maxInteger;
}
mostFrequent(numbers);

//STEP-BY-STEP SOLUTION
// > const numbers = [1, 2, 3, 55, 6, 55, 7, 55, 8, 6, 10];
// >
// > function mostFrequent(list) {
// ...     return list.reduce(function(acc, n) {
// .....         acc[n.toString()] = 0
// .....         return acc
// .....     }, {})
// ...
// ...
// ... }
// undefined
// > mostFrequent(numbers);
// { '1': 0, '2': 0, '3': 0, '6': 0, '7': 0, '8': 0, '10': 0, '55': 0 }

// > function mostFrequent(list) {
// ...     return list.reduce(function(acc, n) {
// .....         acc[n.toString()] = Object.keys(acc)
// .....         return acc
// .....     }, {})
// ...
// ...
// ... }
// undefined
// > mostFrequent(numbers);
// {
//   '1': [],
//   '2': [ '1' ],
//   '3': [ '1', '2' ],
//   '6': [
//     '1',  '2', '3',
//     '6',  '7', '8',
//     '55'
//   ],
//   '7': [ '1', '2', '3', '6', '55' ],
//   '8': [ '1', '2', '3', '6', '7', '55' ],
//   '10': [
//     '1',  '2', '3',
//     '6',  '7', '8',
//     '55'
//   ],
//   '55': [ '1', '2', '3', '6', '7', '55' ]
// }

// > function mostFrequent(list) {
// ...     return list.reduce(function(acc, n) {
// .....         acc[n.toString()] = Object.keys(acc).includes(n.toString())
// .....         return acc
// .....     }, {})
// ...
// ...
// ... }
// undefined
// > mostFrequent(numbers);
// {
//   '1': false,
//   '2': false,
//   '3': false,
//   '6': true,
//   '7': false,
//   '8': false,
//   '10': false,
//   '55': true
// }

// > function mostFrequent(list) {
// ...   return list.reduce(function (acc, n) {
// .....     acc[n.toString()] = Object.keys(acc).includes(n.toString())
// .....       ? acc[n.toString()] + 1
// .....       : 1;
// .....     return acc;
// .....   }, {});
// ... }
// undefined
// > mostFrequent(numbers);
// { '1': 1, '2': 1, '3': 1, '6': 2, '7': 1, '8': 1, '10': 1, '55': 3 }

// > function mostFrequent(list) {
// ...   const obj = list.reduce(function (acc, n) {
// .....     acc[n.toString()] = Object.keys(acc).includes(n.toString())
// .....       ? acc[n.toString()] + 1
// .....       : 1;
// .....     return acc;
// .....   }, {});
// ...
// ...   const maxInteger = Object.keys(obj).find(
// ...     (key) => obj[key] === Math.max(...Object.values(obj))
// ...   );
// ...
// ...   return maxInteger;
// ... }
// undefined
// > mostFrequent(numbers);
// '55'
// >
