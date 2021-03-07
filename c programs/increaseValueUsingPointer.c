#include <stdio.h>
int increaseValue(int *x){
  return (*x)*10;
};
int main(){ 

int a=5;
printf("Increased value is %d",increaseValue(&a));
return 0;
}