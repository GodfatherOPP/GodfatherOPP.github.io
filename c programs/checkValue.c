// Write a C program that accepts 4 integers p, q, r, s from the user where r and s are positive 
// and p is even. If q is greater than r and s is greater than p and if the sum of r and s is greater 
// than the sum of p and q print "Correct values", otherwise print "Wrong values"
#include <stdio.h>

int main(){ 
int p,q,r,s;
printf("enter first number : ");
scanf("%d",&p);
printf("enter second number : ");
scanf("%d",&q);
printf("enter third number : ");
scanf("%d",&r);
printf("enter fourth number : ");
scanf("%d",&s);

if(r>0 && s>0 && p%2==0 && q>r && s>p && r+s> p+q){
    printf("Correct values");
}else
{
    printf("Wrong value");
}

return 0;
}