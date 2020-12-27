//  Write a C program to read an amount (integer value) and break the amount into smallest
//  possible number of bank notes.
// Test Data :
// Input the amount: 375
// Expected Output:
// There are:
// 3 Note(s) of 100.00
// 1 Note(s) of 50.00
// 1 Note(s) of 20.00
// 0 Note(s) of 10.00
// 1 Note(s) of 5.00
// 0 Note(s) of 2.00
// 0 Note(s) of 1.00
#include <stdio.h>

int main(){ 
int notes , hundred, fifty , twenty, ten, five, two ,one;
printf("Enter the amount = ");
scanf("%d",&notes);
hundred= notes/100 ;
fifty = (notes%100)/50;
twenty = (notes - (hundred*100 + fifty*50))/20;
ten =  (notes - (hundred*100 + fifty*50 + twenty*20))/10;
five = (notes - (hundred*100 + fifty*50 + twenty*20 + ten*10))/5;
two = (notes - (hundred*100 + fifty*50 + twenty*20 + ten*10 + five*5))/2;
one = (notes - (hundred*100 + fifty*50 + twenty*20 + ten*10 + five*5 + two*2))/1;


printf("%d Note(s) of 100\n", hundred);
printf("%d Note(s) of 50\n", fifty);
printf("%d Note(s) of 20\n", twenty);
printf("%d Note(s) of 10\n", ten);
printf("%d Note(s) of 5\n", five);
printf("%d Note(s) of 2\n", two);
printf("%d Note(s) of 1\n", one);
return 0;
}