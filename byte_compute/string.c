#include<stdio.h>
#include<string.h>
int main() {
  char greeting_one[12] = "Hello";
  char greeting_two[12] = "World";
  strcat(greeting_one, greeting_two);
  printf("%s", greeting_one);
  return 0;
}