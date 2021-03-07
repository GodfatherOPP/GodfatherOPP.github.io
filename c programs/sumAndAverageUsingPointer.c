#include <stdio.h>
// int sum(int *x,int *y){
//     printf("the sum of the numbers is %d\n",(*x)+(*y));
//     return 0;
// }
// int average(int *x,int *y){
//     printf("the average of the numbers is %d\n",((*x)+(*y))/2);
//     return 0;
// }5
int main()
{

    int a, b;
    // int *p1,*p2;
    // p1=&a;
    // p2=&b;
    printf("Enter the number a ");
    scanf("%d\n",&a);
    printf("Enter the number b ");
    scanf("%d\n",&b);
    printf("entered numbers are %d and %d \n",a,b);
    // sum(&a,&b);
    // average(&a,&b);
    return 0;
}