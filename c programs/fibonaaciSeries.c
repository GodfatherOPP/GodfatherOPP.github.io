// fibonaaci series = 0,1,1,2,3,5,8,13
// f(n) = f(n-1) + f(n-2);
#include<stdio.h>    
 void series(int n);
 
 void series(int n){
    if(n>0){
    static int a=0 ,b=1 ,c;
     c = a + b;
     printf(", %d",c);
     a = b;
     b = c;
     series(n-1);
    }
}
int main()
{
    int n;
     printf("\n");
    printf("enter the no. of digits \n");
    scanf("%d",&n);
    printf("series is : %d , %d",0,1);
    series(n-2);
    printf("\n");
    return 0;
};

