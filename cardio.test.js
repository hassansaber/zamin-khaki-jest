const cardio = require("./cardio");

//---------------

//--reverseString
test("check if reverse String exists", () => {
  expect(cardio.reverseString).toBeDefined();
});
//toBeDefined ==> func without ()
//--

test("string  should reverse", () => {
  expect(cardio.reverseString("hello")).toBe("olleh");
});
test("string  should reverse", () => {
  expect(cardio.reverseString("hello")).toEqual("olleh");
});
//--

//--chunkArray
test("check if chunk Array exists", () => {
  expect(cardio.chunkArray).toBeDefined();
});

test("chunk an array of 10 value with a length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArrayFunc = cardio.chunkArray(numbers, len);
  const chunkedArray = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ];
  expect(chunkedArrayFunc).toEqual(chunkedArray);
});
//--

//--isAnagram
test("check if is Anagram exists", () => {
  // expect(cardio.isAnagram).toBeDefined();
  expect(typeof cardio.isAnagram).toEqual("function");
});

test("check if ali and lia are same anagram", () => {
  expect(cardio.isAnagram("##Ali", "lia**")).toBeTruthy();
});
