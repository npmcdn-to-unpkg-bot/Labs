var app = {
    pwr: function (a, b) {
        var k = 1;
        for (var i = 0; i < b; i++) {
            k *= a;
        }
        return k;
    }
};
try {
    module.exports = app;
} catch (e) { };