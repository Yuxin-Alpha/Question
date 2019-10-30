#include<stdio.h>

void swap(int num1, int num2);
int main() {
  // swap(5, 10);
  int num = 10;
  int* p = &num;
  printf("%d", *p);
  return 0;
}

void swap(int num1, int num2) {
  num1 ^= num2;
  num2 ^= num1;
  num1 ^= num2;
  printf("%d %d", num1, num2);
}