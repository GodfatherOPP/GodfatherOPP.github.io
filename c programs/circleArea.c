#include <stdio.h>
//Area of circle
int main()
{
    int radius;
    float pie = 3.14;
    printf("Enter the radius of circle: ");
    scanf("%d", &radius);
    printf("Area of circle is %f", pie*radius*radius);
    return 0;
}