var app = require('../js/script2.js');

describe("app", function () {
    it("It should return 16", function () {
        // prepare
        var result;
        //act
        result = app.pwr(4,2);
        //assert
        expect(result).toBe(16);
    });
});