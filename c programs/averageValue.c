//  Write a C program that accepts two item’s weight (floating points' values ) and number of
// purchase (floating points' values) and calculate the average value of the items.
// example::
// Test Data :
// Weight - Item1: 15
// No. of item1: 5
// Weight - Item2: 25
// No. of item2: 4
// Expected Output:
// Average Value = 19.444444

#include <stdio.h>

int main()
{
    float item1, item1Amount, item2, item2Amount, AverageValue;
    printf("Enter weight of item1 = ");
    scanf("%f", &item1);
    printf("Enter amount of item1 = ");
    scanf("%f", &item1Amount);
    printf("Enter weight of item2 = ");
    scanf("%f", &item2);
    printf("Enter amount of item2 = ");
    scanf("%f", &item2Amount);
    AverageValue = ((item1 * item1Amount) + (item2 * item2Amount)) / (item1Amount + item2Amount);
    printf("average Value = %f\n", AverageValue);
    return 0;
}

// In problem