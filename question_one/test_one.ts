import {MyStack} from '../base_class/stack'
/**
 * 题目一：
 * 使用栈实现一种新的栈，在这个原有栈的基础之上使得新栈拥有获取栈中最小值
 * 拥有push,pop,getMin的操作
 * 时间：2019/11/12
 */

class NewStack extends MyStack {
  // 使用两个栈来实现
  stackData: MyStack
  // 存储最小值的栈
  stackMin: MyStack
  constructor() {
    super()
    this.stackData = new MyStack()
    this.stackMin = new MyStack()
  }
  push(newValue: number): void {
    if(this.stackData.isEmpty()) {
      this.stackData.items.push(newValue)
      this.stackMin.items.push(newValue)
    } else {
      if (newValue <= this.stackMin.getTop()) {
        this.stackData.items.push(newValue)
        this.stackMin.items.push(newValue)
      } else {
        this.stackData.items.push(newValue)
        return 
      }
    }
  }
  pop(): number {
    if(this.stackData.isEmpty()) {
      throw new Error('The Stack is Empty!!')
    } else {
      let value = this.stackData.items.pop()
      if(value === this.stackMin.getTop()) {
        this.stackMin.items.pop()
      }
      return value
    }
  }
  getMin(): number{
    return this.stackMin.getTop()
  }
}

// 测试代码
let testStack = new NewStack()
testStack.push(5)
testStack.push(14)
testStack.push(6)
testStack.push(1)
testStack.push(46)
testStack.push(9)
console.log(testStack.stackData.items);
console.log(testStack.stackMin.items);
while(!testStack.stackData.isEmpty()) {
  let test = testStack.pop()
  console.log(test)
  console.log(testStack.stackData.items);
  console.log(testStack.stackMin.items);
  console.log(testStack.getMin());
  console.log('-----------------------------------');
}