/**
 * 题目一
 * 不定义新的变量实现两个数的交换
 * 时间：2019/11/14
*/

let swapNumber: (numOne: number, numTwo: number) => void = function(numOne: number, numTwo: number): void {
  console.log(numOne, numTwo);
  numOne ^= numTwo;
  numTwo ^= numOne;
  numOne ^= numTwo;
  console.log(numOne, numTwo);
} 

// 测试代码
swapNumber(45, 90)
