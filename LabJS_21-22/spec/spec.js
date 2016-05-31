var app = require('../js/script2.js');

describe("app", function () {
    it("Testing app x^y", function () {
        // prepare
        var result;
        //act
        result = app.pwr(4,2);
        //assert
        expect(result).toBe(16);
        //act
        result = app.pwr(3,3);
        //assert
        expect(result).toBe(27);
        //act
        result = app.pwr(-5,3);
        //assert
        expect(result).toBe(-125);
        //act
        //result = app.pwr(3,3);
        //assert
        //expect(result).toBe(33);
    });
     it("It generates error", function () {
         // prepare
        var result;
        //act
        result = app.pwr(3,3);
        //assert
        expect(result).toBe(33);
         
     });
     xit("It`s disabled", function () {
         // prepare
        var result;
        //act
        result = app.pwr(3,3);
        //assert
        expect(result).toBe(33);
         
     });
});