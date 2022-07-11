const functions = require("./functions");
//---------------------------------------

test("add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//--

test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});
//--

test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});
test("should be falsy", () => {
  expect(functions.checkValue(0)).not.toBeTruthy();
});
//falsy === 0 undefined null ....
//--

test("shoud be my name", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Hassan",
    lastName: "Saber",
  });
});
// toBe   ==== primitive types
// toEqual   ==== reference types
//--

test("should be unde 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});
//toBeLessThan
//--

//Regex
test("there should be no I in team", () => {
  expect("team").not.toMatch(/I/i);
});
// toMath === regex
//--

//Arrays
test("should have admin", () => {
  const users = ["Ali", "Hausa", "admin"];
  expect(users).toContain("admin");
});
//--

//--------------------------------------------

//promise

//should use assertions
//should return
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
// expect.assertions  ==>  dot
// expect(data.name) ===>  no dot  every time

//--

//Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  return expect(data.name).toEqual("Leanne Graham");
});

//check diff between Promise and AsyncAwait tests
