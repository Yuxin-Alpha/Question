#include <stdio.h>
#include "p_math.h"

int main(void) {
  int val_x = 6, val_y = 9;
  printf("%d + %d = %d", val_x, val_y, t_add(val_x, val_y));
  return 0;
}