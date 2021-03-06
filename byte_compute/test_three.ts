/**
 * &运算符做双目运算符时，可以将两个数的二进制数中的每一位做&操作
 * 比如：0011 & 0001 的结果就是 0001，对应成10进制，3&1的值就是1
 * 所以我们可以通过num&1的结果来判断数字num的奇偶性
*/
int isOdd(int num){
  return (num & 1) != 0;
}

/**
 * 写一个函数判断是否参数是不是2的整数是不是2的整数次幂
 * 2的整数次幂比如8(100),16(1000),32(10000),容易发现是1...0...00这种形式
 * 所以我们用num&(num - 1)的结果是否为0来判断
*/
int isPerfectLog2(int num) {
  return (num & (num - 1)) == 0; 
}

#include <iostream>
using namespace std;
int main () {
  int flag1 = isOdd(5);
  (flag1) ? cout << "奇数" : cout << "偶数";
  int flag2 = isPerfectLog2(8);
  int flag3 = isPerfectLog2(13);
  cout << flag2 << flag3; 
  return 0;
}