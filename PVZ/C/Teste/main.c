#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numero = 5;
    int * ptr;
    *ptr = numero;

    printf("Address: %h/n", ptr);

    system("pause");
    return 0;
}
