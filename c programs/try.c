// QUESTION 1
#include <stdio.h>
int main()
{
    printf(" 1 = Burger\n 2 = French fry\n 3 = Pizza\n");
    int ss;
    int n;
    printf("What would you like to order ");
    scanf("%d", &ss);
    switch (ss)
    {
    case 1:
        printf("Enter the quantity ");
        scanf("%d", &n);
        int a = 50;
        printf("\n Your bill of burger is Rs. %d", a * n);
        break;

    case 2:
        printf("Enter the quantity ");
        scanf("%d", &n);
        int b = 75;
        printf("\n Your bill of French Fry is Rs. %d", b * n);
        break;

    case 3:
        printf("Enter the quantity ");
        scanf("%d", &n);
        int c = 150;
        printf("\n Your bill of Pizza is Rs. %d \n", c * n);
        break;
    }
    return 0;
}

//QUESTION 2

// int main() {
//     // Write C code here
//     long int a;
//     char b[20];
//     // printf("What is your Lucky Number ");
//     // scanf("%ld",&a);
//     // printf("\n So your Lucky Number is %ld",a);

//     printf("\n Heeey!,What's Your Name \n");
//     scanf("%s",&b);
//     printf("\n Hello my friend %s . welcome to C programing, %s Enjoy your journey with C .",b,b );
//     return 0;

// }