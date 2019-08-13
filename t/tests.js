require('should');
const { formatCurrency } = require('../src/main');

describe("format currency", () => {
  it("passing a string", () => {
    formatCurrency("1").should.be.eql("1,00");
  });

  it("passing a number", () => {
    [
      [1, "1,00"],
      [1., "1,00"],
      [1.01, "1,01"],
      [10.1, "10,10"],
      [100.1, "100,10"],
      [1000.01, "1.000,01"],
      [10000.01, "10.000,01"],
      [100000.01, "100.000,01"],
      [1000000.01, "1.000.000,01"]
    ].forEach(pair => formatCurrency(pair[0]).should.be.eql(pair[1]));
  });

  it("truncate if decimal number is smaller than 1e-2.", () => {
    formatCurrency("1.001").should.be.eql("1,00");
  });

  it("use 3 digits for decimal places.", () => {
    formatCurrency("1.001", '.', ',', 3).should.be.eql("1,001");
  });

  it("negative value.", () => {
    formatCurrency("-1.00").should.be.eql("-1,00");
  });
});
