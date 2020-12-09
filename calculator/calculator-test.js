
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 10 })).toEqual("132.15");
  expect(calculateMonthlyPayment({ amount: 20000, years: 10, rate: 10 })).toEqual("264.30");
  expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 10 })).toEqual("0.00");
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 10 })).toEqual(132.15.toFixed(2));
  expect(calculateMonthlyPayment({ amount: 20000, years: 10, rate: 10 })).toEqual(264.30000000.toFixed(2));
  expect(calculateMonthlyPayment({ amount: 0, years: 10, rate: 10 })).toEqual(0.0000000.toFixed(2));
});


//updated to 3.6 to get this one to work - was included in lesson
it("should return a string", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 10 })).toBeInstanceOf(String);
});
