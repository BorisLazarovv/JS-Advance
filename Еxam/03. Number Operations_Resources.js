const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
}

describe("first", function () {

    it(" powNumber first", function () {

        let instance = numberOperations.powNumber(2);

        assert.equal(instance, 4);

 
    });
 
 
    it("second", function () {
        let instance = numberOperations.numberChecker(29);

        assert.equal(instance, 'The number is lower than 100!');

        instance = numberOperations.numberChecker(2);

        assert.equal(instance, 'The number is lower than 100!');

        instance = numberOperations.numberChecker(125);

        assert.equal(instance, 'The number is greater or equal to 100!');

        instance = numberOperations.numberChecker(100);

        assert.equal(instance, 'The number is greater or equal to 100!');

 
        assert.throw(() => { numberOperations.numberChecker('first') }, 'The input is not a number!');
 
    });
 
 
    it('third', () => {

        let instance = numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4]);
 
        assert.deepEqual(instance,[2, 4, 6, 4]);
    })
 
});