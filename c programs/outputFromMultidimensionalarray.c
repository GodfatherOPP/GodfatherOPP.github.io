#include <stdio.h>

int main(){ 

int arr[5][5];
for(int i=0; i<5; i++){
    for (int j = 0; j <5; j++)
    {
    printf("enter the salary of employ no. %d#%d \n",i+1,j+1);
    scanf("%d ",&arr[i][j]);
    }
}

for(int i=0; i<5; i++){
    for (int j = 0; j <5; j++)
    {
    printf("enter the salary of employ no. %d#%d is : %d\n",i+1,j+1,arr[i][j]);
    }
}
return 0;
}