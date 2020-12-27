#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main()
{
    int guess, number;
    int count=1;
    srand(time(0));
    number = rand()%100 +1;
    printf("welcome to the game \n");
    do
    {
            printf("please guess the number\n");
    scanf("%d", &guess);
        if (guess > number)
        {
            printf("think lower number please!\n");
        }
        else if (guess < number)
        {
            printf("think higher number please!\n");
        }
        else
        {
            printf("you Won! , you guess the number in %d turns\n", count);
        }
        count++;
    } while (guess != number);
    

    return 0;
}