// Write a C program that accepts an employee ID, total worked hours of a month and the amount he received per hour.
//  Print the employee's ID and salary (with two decimal places) of a particular month. Go to the editor
// Test Data :
// Input the Employees ID(Max. 10 chars): 0342
// Input the working hrs: 8
// Salary amount/hr: 15000
// Expected Output:
// Employees ID = 0342
// Salary = U$ 120000.00
#include <stdio.h>

int main()
{
    char ID[10];
    int hour;
    double value,salary;
    printf("Enter your ID : ");
    scanf("%s", &ID);
    printf(" total worked hours :");
    scanf("%d",&hour);
    printf("amount per hour :");
    scanf("%lf",&value);

    salary = hour*value;
    printf("Employes ID: %s\n",ID);
    printf("Salary = U$ %.2lf\n",salary);

    return 0;
}