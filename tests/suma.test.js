const assert = require("node:assert");
const { describe, it } = require("node:test");
const { suma } = require("../app.js");

describe("suma", () => {
  it("suma 2 + 3 = 5", () => {
    assert.strictEqual(suma(2, 3), 5);
  });
});
