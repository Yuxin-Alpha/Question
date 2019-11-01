#include<stdio.h>
// 链表
typedef struct node{
  int val;
  struct node* p_next;
} node;

int main () {
  node n1 = {10}, n2 = {20}, n3 = {30};
  node head = {0}, tail = {0};
  head.p_next = &n1;
  n1.p_next = &n2;
  n2.p_next = &n3;
  n3.p_next = &tail;
  // 定义循环指针
  node* p_tmp = NULL;
  for(p_tmp = &head; p_tmp != &tail; p_tmp = p_tmp->p_next) {
    node* p_first = p_tmp;
    node* p_mid = p_first->p_next;
    node* p_last = p_mid->p_next;
  }
  return 0;
}