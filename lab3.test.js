const { STIRLING_SECOND_KIND, bells_nums } = require('./lab3'); 


  test('Bell numbers calculation', () => {
    const N = 5, K = 5;
    const table = STIRLING_SECOND_KIND(N, K);
    const expectedBellNumber = 52; 
    expect(bells_nums(table)).toBe(expectedBellNumber);
  });

