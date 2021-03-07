#include <stdio.h>

int main(){ 
    int result[5]= {5,4,3,2,1};
    int *ptr= &result[0];
    for (int i = 0; i < 5; i++)
    {
        printf("value of array element %d is %d \n",i+1, *ptr);
        ptr++;
    }
                                                 
return 0;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  