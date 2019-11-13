"use strict";
exports.__esModule = true;
var stack_1 = require("../base_class/stack");
/**
 * 使用一个栈对另一个栈进行排序
 * 时间：2019/11/13
 */
var sortStack = function (s) {
    if (s.getLength() < 2) {
        throw new Error('The stack does not need sort');
    }
    var helpStack = new stack_1.MyStack();
    while (!s.isEmpty()) {
        var popValue = s.pop();
        var n = 0;
        if (helpStack.isEmpty()) {
            helpStack.push(popValue);
            continue;
        }
        while (popValue > helpStack.getTop() && !helpStack.isEmpty()) {
            s.push(helpStack.pop());
            n++;
        }
        helpStack.push(popValue);
        for (var i = 0; i < n; i++) {
            helpStack.push(s.pop());
        }
    }
    return helpStack.items;
};
// 测试代码
var testStack = new stack_1.MyStack();
testStack.push(6);
testStack.push(7);
testStack.push(1);
testStack.push(5);
testStack.push(3);
testStack.push(12);
testStack.push(2);
testStack.push(9);
console.log(sortStack(testStack));
