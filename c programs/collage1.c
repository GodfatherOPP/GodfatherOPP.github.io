#include <stdio.h>

int main(){ 
char name[20];
int roll,phy,chem,maths,total;
float per;
printf("Enter your name\n");
gets(name);
printf("Enter your Roll No.\n");
scanf("%d",&roll);
printf("Enter your marks in physics\n");
scanf("%d",&phy);
printf("Enter your marks in chemistery\n");
scanf("%d",&chem);
printf("Enter your marks in maths\n \n");
scanf("%d",&maths);


total = phy + chem + maths ;
per = (total/3);
printf("Name of student is : %s ",name);
printf("Roll No. : %d\n", roll);
printf("Marks in physics is %d\n",phy);
printf("Marks in chemistry is %d\n",chem);
printf("Marks in maths is %d\n",maths);

printf("Total marks out of 300 is %d\n",total);
printf("Percentage is %.2f \n",per);

return 0;
}