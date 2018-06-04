import each from 'jest-each';

describe('Example test forms', () => {
    each`
    a    | b     | c
    ${1} | ${1}  | ${2}
    ${1} | ${2}  | ${3}
    ${1} | ${10} | ${11}
    `.test('$a + $b = $c', ({a, b, c}) => {
        expect(a + b).toBe(c);
    })

    test.skip('Test my important feature', () => {
        // This test will be skipped.
        // To skip all but one, set the one you want to test.only(...
    })
});