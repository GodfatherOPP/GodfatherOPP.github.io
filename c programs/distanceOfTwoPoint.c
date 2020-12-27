#include <stdio.h>
#include <math.h>
int main(){ 
float x1,y1,x2,y2;
float distanceSquare;
printf("enter x1 = ");
scanf("%f",&x1);
printf("enter y1 = ");
scanf("%f",&y1);
printf("enter x2 = ");
scanf("%f",&x2);
printf("enter y2 = ");
scanf("%f",&y2);

distanceSquare = ((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
printf("distance between given two point is %.4f unit ", sqrt(distanceSquare));
return 0;
}


//  SOLUTION
// #include <stdio.h>
// #include <math.h>

// int main() {
// 	float x1, y1, x2, y2, gdistance;
// 	printf("Input x1: ");
// 	scanf("%f", &x1);
// 	printf("Input y1: ");
// 	scanf("%f", &y1);
//               printf("Input x2: ");
// 	scanf("%f", &x2);
// 	printf("Input y2: ");
// 	scanf("%f", &y2);
// 	gdistance = ((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1));
// 	printf("Distance between the said points: %.4f", sqrt(gdistance));
// 	printf("\n");
// 	return 0;
// }