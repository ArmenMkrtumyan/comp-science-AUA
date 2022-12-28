#include <math.h>
#include <stdio.h>


int is_prime(int k)
{
	int n;		
	n = k / pow(k, 0.5);
	int i;
	i = 2;
	
	while(i <= n)
	{
		if( k % i == 0 && i != k)
		{
			return 0;
		}
		i++;
	}
	return 1;
}


int main()
{
	printf("IS prime? : %d \n", is_prime(11));

	int number = 100;

	int i;
	int k;
	i = 2;

	while(i<=number)
	{
		if(is_prime(i) == 1)
			printf("%d ", i);
		i++;
	}

}
