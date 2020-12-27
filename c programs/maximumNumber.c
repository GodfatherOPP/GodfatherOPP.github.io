// Write a C program that accepts three integers and find the maximum of three
#include <stdio.h>

int main(){ 
int a,b,c;
printf("Enter first integer : ");
scanf("%d",&a);
printf("Enter second integer : ");
scanf("%d",&b);
printf("Enter third integer : ");
scanf("%d",&c);
if(a>b && a>c){
    printf("%d is the greatest of all three number that you have entered \n",a);
}else if(b>a && b>c){
    printf("%d is the greatest of all three number that you have entered \n",b);
}else{
    printf("%d is the greatest of all three number that you have entered \n",c);
}

return 0;
}