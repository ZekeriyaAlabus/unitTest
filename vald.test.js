// validation.spec.js

const {
  validateName,
  validateEmail,
  validatePasswordMatch,
  validateDOB,
} = require("./validation");

describe("Account Form Validation", function () {
  it("should validate valid names", function () {
    expect(validateName("John")).toBe(true);
  });

  it("should invalidate short or numeric names", function () {
    expect(validateName("A")).toBe(false);
    expect(validateName("123")).toBe(false);
    expect(validateName("")).toBe(false);
  });

  it("should validate valid email", function () {
    expect(validateEmail("user@example.com")).toBe(true);
  });

});
