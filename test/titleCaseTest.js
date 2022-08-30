const assert = require("chai").assert;
const titleCase = require("../titleCase");

// TEST CODES
describe("#titleCase", () => {
  it("titleCase(\"this is an example\") should return 'This Is An Example'", () => {
    const init = "this is an example";
    const expected = "This Is An Example";
    assert.equal(titleCase(init), expected);
  });

  it("titleCase(\"test\") should return \"Test\"", () => {
    assert.equal(titleCase("test"), "Test");
  });

  it("titleCase(\"i r cool\") should return \"I R Cool\"", () => {
    assert.equal(titleCase("i r cool"), "I R Cool")
  });

  it("titleCase(\"WHAT HAPPENS HERE\") should return \"What Happens Here\"", () => {
    assert.equal(titleCase("WHAT HAPPENS HERE"), "What Happens Here");
  });

  it("titleCase(\"\") should return \"\"", () => {
    assert.equal(titleCase(""), "");
  });

  it("titleCase(\"A\") should return \"A\"", () => {
    assert.equal(titleCase("A"), "A");
  });
});
