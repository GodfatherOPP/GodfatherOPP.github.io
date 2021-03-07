#include <stdio.h>

int main(){ 
// array is a variable to store multiple values of same type
//   Array declaration

int arr[10];  // integer array with size 10
char arr2[15]; // character array with size 15 or string
float arr3[22]; // float array with size size 22

int result[5];
char section[5]={'A','B','C','D','E'};

for (int i = 0; i < 5; i++)
{
//printf("\n enter section name : ");
//scanf("%c",&section[i]);
// using %c 
 printf("\n enter section average percentage : ");
 scanf("%d",&result[i]);
}

for (int i = 0; i < 5; i++)
{
printf("\n section %c has average result of %d per  ",
 section[i] ,result[i]);
}
return 0;
}