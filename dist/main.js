var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SweetSweetBasil = (function () {
    function SweetSweetBasil(name, startColor) {
        console.log("Even sweeter" + name);
        this.color = startColor;
    }
    SweetSweetBasil.prototype.getColor = function () {
        console.log(this.color);
    };
    return SweetSweetBasil;
}());
var world = new SweetSweetBasil("world", "black");
var Basil = (function (_super) {
    __extends(Basil, _super);
    function Basil(name, startColor) {
        return _super.call(this, name, startColor) || this;
    }
    Basil.prototype.setNewColor = function (color) {
        this.color = color;
    };
    return Basil;
}(SweetSweetBasil));
var basil3 = new Basil("basil", "brigt green");
basil3.getColor();
basil3.setNewColor("red");
