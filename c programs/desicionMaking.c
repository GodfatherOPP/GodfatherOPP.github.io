#include <stdio.h>

int main(){ 

int pass;
printf("Enter following \n 1 = pass in science \n 2 = pass in math \n 3 = pass in english \n 4 = pass in all \n ");
scanf("%d",&pass);
switch (pass)
{
case 1:
    printf("You got $10\n");
    break;
case 2:
    printf("You got $15\n");
    break;
    case 3:
    printf("You got $20\n");
    break;
    case 4:
    printf("You got $50\n");
    break;
default:
printf("Don\'t mess with my program enter correct value from above option\n");
    break;
}
return 0;
}