#include <stdio.h>
//Volume of cylinder
int main()
{
    float radius;
    float height;
    float pie = 3.14;
    printf("Enter the radius of cylinder: ");
    scanf("%f", &radius);
    printf("Enter the height of cylinder: ");
    scanf("%f", &height);
    printf("Volume of Cylinder is %f square unit", pie*radius*radius*height);
    return 0;
}