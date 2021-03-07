#include <stdio.h>

int main(){ 
int a=5;
int b= 'b';
int *p1,*p2;
p1=&a;
p2=&b;
printf("The addressess of variables are %u and %u \n",&a,&b);
printf("the values of variables are %d and %d \n",a,b);
printf("the values of variables are %d and %d \n",*p1,*p2);
return 0;
}