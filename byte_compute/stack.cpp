#include<iostream>
using namespace std;
const int SIZE = 10;

typedef struct stack {
  int vals[SIZE];
  int qty;
} stack;

int stack_size (const stack* p_stack) {
  return p_stack->qty;
}
int stack_empty (const stack* p_stack) {
  return !p_stack->qty;
}
// 判定是否栈满
int stack_full(const stack* p_stack) {
  return p_stack->qty >= SIZE;
}
// 返回值为真表示加入成功，否则加入失败
int stack_push(stack* p_stack, int val) {
  if (stack_full(p_stack)) {
    return 0;
  }
  p_stack->vals[p_stack->qty] = val;
  p_stack->qty++;
  return 1;
}
// 删除栈顶元素
int stack_pop(stack* p_stack) {
  if(stack_empty(p_stack)) {
    return 0;
  }
  p_stack->qty--;
  return 1;
}
