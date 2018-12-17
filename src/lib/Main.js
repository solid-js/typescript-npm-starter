import { Other } from './Other';
var SuperTest = /** @class */ (function () {
    function SuperTest() {
        this.boule();
    }
    SuperTest.prototype.boule = function () {
        var other = new Other();
        console.log("Coucou " + other.test());
    };
    return SuperTest;
}());
global['truc'] = new SuperTest();
