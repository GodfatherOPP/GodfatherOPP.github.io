//  Write a C program to convert a given integer (in seconds) to hours, minutes and seconds. 
// Test Data :
// Input seconds: 25300
// Expected Output:
// There are:
// H:M:S - 7:1:40 
#include <stdio.h>

int main(){ 
    long int value;
    int minutes;
    int H,M,S;
printf("please enter value(in seconds) : ");
scanf("%ld",&value);
minutes = value/60;
H = minutes/60;
M = minutes%60;
S = value%60;
printf("%d:%d:%d : ",H,M,S);
return 0;
}