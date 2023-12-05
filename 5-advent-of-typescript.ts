// FIXME: type SantasList = unknown;

/* TODO: Organize Santa's List

    It's December 5th at the North Pole, and the elves are feeling the pressure. A 
    motivational sign above the factory entrance reads "we're all about passion, 
    not just paychecks," but the elves are struggling to keep up with the demand.

    Santa needs his list of good and bad kids, and he prefers having it well in advance 
    of Christmas Eve. The elves usually manually combine the good and bad lists into 
    Santa's list, but this year, Frymagen, the elf with exceptional Vim skills, is 
    unable to perform his usual magic due to a problematic MacBook Pro.

    Your task: Implement the SantasList type. It should accept the types of the badList 
    and goodList as parameters and return a TypeScript tuple with the values of both 
    lists combined.
*/

type SantasList<Bad extends readonly any[], Good extends readonly any[]> = [
  ...Bad,
  ...Good
];

/* NOTE:
This TypeScript code defines a generic type called SantasList. It takes two type parameters: Bad and Good, both of which are readonly arrays (arrays that cannot be modified after creation).

The type SantasList represents a list that combines two arrays, Bad and Good. It uses the spread operator (...) to concatenate the elements of the Bad array with the elements of the Good array, creating a new array that includes all the elements from both arrays.

For example, if you have two arrays:
Bad: ["coal", "switch"]
Good: ["toy", "candy"]

Then using SantasList<Bad, Good> would result in the following array:
["coal", "switch", "toy", "candy"]

This type is a way to combine two readonly arrays into a single array, preserving their order and immutability.
*/
