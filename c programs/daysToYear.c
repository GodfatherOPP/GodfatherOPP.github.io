//  Write a C program to convert specified days into years, weeks and days.
#include <stdio.h>

int main(){ 

int day,year,weak,days;

printf("enter no. of days \n");
scanf("%d",&day);

year = day/365;
weak = (day%365)/7;
days = (day%365)%7;
printf("%d years, %d weak , %d days",year,weak,days);
return 0;
}