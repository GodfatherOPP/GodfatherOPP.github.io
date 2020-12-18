#include <stdio.h>
//Change celcius to fahrenheit
int main()
{
    float celcius;
    float farn;
    printf("Enter the temperature in celcius: ");
    scanf("%f", &celcius);
    printf("IT is %f fahrenheit", celcius * 9 / 5 + 32);
    return 0;
}