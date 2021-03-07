#include <stdio.h>
//Area of circle
int main()
{
    double radius;
    float pie = 3.14;
    printf("Enter the radius of circle: ");
    scanf("%lf", &radius);
    printf("diameter of circle is %.2f square unit \n", 2*radius);
    printf("Area of circle is %.2f square unit\n", pie*radius*radius);
    printf("peremeter of circle is %.2f square unit \n", 2*pie*radius);
    return 0;
}