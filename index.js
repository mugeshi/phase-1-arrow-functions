// Function expression called divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function called square
const square = (num) => num * num;

// Arrow function called add
const add = (num1, num2) => num1 + num2;

// Test cases
describe("index.js", () => {
  beforeAll((done) => {
    // Perform any setup or asynchronous operations here
    // Call done() when the setup is complete
    done();
  });

  it("has a function expression called divide", () => {
    expect(divide).to.exist;
  });

  it("divide divides 2000 by 100", () => {
    expect(divide()).to.equal(20);
  });

  it("has an arrow function called square", () => {
    expect(square).to.exist;
  });

  it("square arrow function takes one parameter and multiplies it times itself", () => {
    let x = 2;
    expect(square(x)).to.equal(4);
  });

  it("has an arrow function called add", () => {
    expect(add).to.exist;
  });

  it("add arrow function takes two parameters and adds them together", () => {
    let a = 3;
    let b = 4;
    expect(add(a, b)).to.equal(a + b);
  });
});


