// Question- Write a C program to print your name, date of birth. and mobile number.
#include <stdio.h>
#include <conio.h>
int main()
{
    clscr();
    char*name[20];
//     printf("Name      :   Harsh Rathore\n");
//    printf("DOB        :   21/04/2001 \n");
//    printf("Mobile no. :   3842339034\n");
printf(" Enter your name : \n");
scanf("%s",&name);
printf("Name: %s", name);
    return 0;
    getch();
}