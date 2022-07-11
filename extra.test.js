const sum = require("./extra");
//-----------------------------------------------

// run sth before or after every single tests
const extra = {
  initDatabase: () => console.log("DataBase initialized..."),
  closeDatabase: () => console.log("DataBase closed..."),
};

beforeEach(() => extra.initDatabase());
afterEach(() => extra.closeDatabase());

// run sth before or after All tests
const extraAll = {
  initDatabase: () => console.log("DataBase initialized..."),
  closeDatabase: () => console.log("DataBase closed..."),
};
beforeAll(() => extraAll.initDatabase());
afterAll(() => extraAll.closeDatabase());

//target single tests
describe("checking names...", () => {
  beforeEach(() => console.log("before each checking names"));

  test("should sum 5+ 2 equal to 7", () => {
    expect(sum(5, 2)).toBe(7);
  });
  test("should sum 6+ 2 equal to 8", () => {
    expect(sum(6, 2)).toBe(8);
  });
  test("should sum 7+ 2 equal to 9", () => {
    expect(sum(7, 2)).toBe(9);
  });
});
//-

//-----------------------------------------
test("should sum 2+ 2 equal to 4", () => {
  expect(sum(2, 2)).toBe(4);
});
