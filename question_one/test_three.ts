import {MyStack} from '../base_class/stack'
/**
 * 使用一个栈对另一个栈进行排序
 * 时间：2019/11/13
 */

let sortStack:(s:MyStack) => Array<number> = function(s:MyStack): Array<number>{
  if(s.getLength() < 2) {
    throw new Error('The stack does not need sort')
  }
  let helpStack:MyStack = new MyStack()
  while(!s.isEmpty()) {
    let popValue:number = s.pop()
    let n: number = 0
    if(helpStack.isEmpty()) {
      helpStack.push(popValue)
      continue
    }
    // 小的直接入栈，大的进行操作，最后从大到小排列
    while(popValue > helpStack.getTop() && !helpStack.isEmpty()) {
      s.push(helpStack.pop())
      n ++
    }
    helpStack.push(popValue)
    for(let i:number = 0; i < n; i++) {
      helpStack.push(s.pop())
    }
  }
  return helpStack.items
}

// 测试代码
let testStack:MyStack = new MyStack()
testStack.push(6)
testStack.push(7)
testStack.push(1)
testStack.push(5)
testStack.push(3)
testStack.push(12)
testStack.push(2)
testStack.push(9)
console.log(sortStack(testStack));