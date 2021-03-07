#include <stdio.h>

int main(){ 
int i = 5;
int *ptr = &i;
int **ptr_to_ptr = &ptr; 

// printf("%d\n", ptr); //gives address of i
// printf("%u\n", ptr);//gives address of i

// printf("%u\n", *ptr);//gives value of i
// printf("%d\n", *ptr);//gives value of i

// printf("%u\n", &i);//gives address of i
// printf("%d\n", &i);//gives address of i
 
 printf("Value of variable i is: %d\n", **ptr_to_ptr);

return 0;
}