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

  it("should invalidate malformed emails", function () {
    expect(validateEmail("user.com")).toBe(false);
    expect(validateEmail("user@.com")).toBe(false);
    expect(validateEmail("user@com")).toBe(false);
  });

  it("should validate matching passwords", function () {
    expect(validatePasswordMatch("secret123", "secret123")).toBe(true);
  });

  it("should invalidate mismatched or short passwords", function () {
    expect(validatePasswordMatch("short", "short")).toBe(false); // too short
    expect(validatePasswordMatch("password", "different")).toBe(false);
  });

  it("should validate a correct date of birth", function () {
    expect(validateDOB("2000-01-01")).toBe(true);
  });

  it("should invalidate future dates or invalid format", function () {
    expect(validateDOB("2099-01-01")).toBe(false);
    expect(validateDOB("not-a-date")).toBe(false);
    expect(validateDOB("")).toBe(false);
  });


});
