#include <stdio.h>

int main(){ 
int arr[3][3] = {
    {1,4,5},
    {1,5,6},
    {1,7}
};
printf("the value of arr[2][2] and arr[0][1] is %d and %d\n ",arr[2][2],arr[0][1]);
return 0;
}