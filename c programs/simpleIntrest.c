#include <stdio.h>
//Calculate simple intrest
int main()
{
    float principle;
    float year;
    float rate;
    float simpleIntrest = (principle*rate*year)/100 ;
printf("Enter the principle amount(in rupees): ");
scanf("%f", &principle);
printf("Enter the time period(in years): ");
scanf("%f", &year);
printf("Enter the rate of intrest: ");
scanf("%f", &rate);
printf("simple intrest is: %f", simpleIntrest);
    return 0;
}