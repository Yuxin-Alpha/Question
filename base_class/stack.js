"use strict";
exports.__esModule = true;
var MyStack = /** @class */ (function () {
    function MyStack() {
        this.items = [];
    }
    MyStack.prototype.getLength = function () {
        return this.items.length;
    };
    MyStack.prototype.isEmpty = function () {
        return this.getLength() === 0;
    };
    MyStack.prototype.push = function (item) {
        this.items.push(item);
    };
    MyStack.prototype.pop = function () {
        var item = this.items.pop();
        return item;
    };
    MyStack.prototype.getTop = function () {
        return this.items[this.getLength() - 1];
    };
    return MyStack;
}());
exports.MyStack = MyStack;
