import {MyStack} from '../base_class/stack'
/**
 * 题目二：使用两个栈完成一个队列功能
 * 时间：2019/11/12
 * 
 */
class NewQueue {
  stackPush: MyStack
  stackPop: MyStack
  constructor() {
    this.stackPush = new MyStack
    this.stackPop = new MyStack
  }
  inQueue(newValue: number) {
    if(!this.stackPop.isEmpty()) {
      throw new Error('The pop stack is not empty now!!')
    } else {
      this.stackPush.push(newValue)
    }
  }
  outQueue(): number {
    if(this.stackPush.isEmpty()) {
      throw new Error('The Queue is empty right now')
    } else {
      let popValue: number = this.stackPush.pop()
      this.stackPop.push(popValue)
      return popValue
    }
  }
  outAllQueue(): Array<number>{
    if(this.stackPush.isEmpty()) {
      throw new Error('The Queue is empty right now')
    } else {
      let arr: Array<number> = []
      while(!this.stackPush.isEmpty()){
        this.stackPop.push(this.stackPush.pop())
      }
      while(!this.stackPop.isEmpty()) {
        arr.push(this.stackPop.pop())
      }
      return arr
    }
  }
}

// 测试代码
let testQueue = new NewQueue()
testQueue.inQueue(5)
testQueue.inQueue(6)
testQueue.inQueue(8)
testQueue.inQueue(1)
testQueue.inQueue(12)
testQueue.inQueue(9)
testQueue.inQueue(2)
console.log(testQueue.outQueue());