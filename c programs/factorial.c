// factorial using loop

// #include <stdio.h>

// int main(){
// long int factirial ,a;
// printf("Enter the number = ");
// scanf("%ld",&a);

// for(int i=a-1; i>0; i--){
// a = a*i;
// }
// printf("factorial is %ld \n",a);

// return 0;
// }

// factorial using recursion

#include <stdio.h>

int factorial(int n);

int main()
{
    int a;
    printf("enter the value : ");
    scanf("%d", &a);
    factorial(a);
     printf("the factorial of %d is %d \n",a,factorial(a));
    return 0;
}

int factorial(int n)
{
    if (n == 1 || n == 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
};