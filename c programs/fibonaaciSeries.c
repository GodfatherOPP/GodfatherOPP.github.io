// fibonaaci series = 0,1,1,2,3,5,8,13
// f(n) = f(n-1) + f(n-2);

#include <stdio.h>
int f(int n);
// f(int n) = f(int n-1) + f(int n-2);

int main(){ 
int n;
printf("enter the number");
scanf("%d\n",&n);

f(n);

return 0;
}

