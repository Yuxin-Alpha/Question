#include<iostream>
using namespace std;

void swap(int num1, int num2);
int main() {
  swap(5, 10);
  return 0;
}

void swap(int num1, int num2) {
  num1 ^= num2;
  num2 ^= num1;
  num1 ^= num2;
  cout << num1 << num2;
}