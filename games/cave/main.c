#include <stdio.h>
#include <string.h>
#include "location.h"


static char input[100];

static int getInput() 
{
    printf("\n--> ");
    return fgets(input, sizeof(input), stdin) != NULL;
}

static int parseAndExecute()
{
    char *verb = strtok(input, " \n"); // strtok splits strings into "tokens" whatever those are.
    char *noun = strtok(NULL, " \n");
    if (verb != NULL)
    {
        if (strcmp(verb, "quit") == 0) 
        { // strcmp means "string compare"
            return 0;
        } // If strcmp
        else if (strcmp(verb, "look") == 0)
        { // Remember == 0 means "is true"
            executeLook(noun);
        }
        else if (strcmp(verb, "go") == 0)
        {
            executeGo(noun);
        }
        else
        {
            printf("I don't know how to '%s'.\n", verb);
        }
    }
    return 1;
}

int main()
{
    printf("Welcome to Little Cave Aventure.\n");
    executeLook("around");
    while (getInput() && parseAndExecute());
    printf("\nBy!\n");
    return 0;
}
