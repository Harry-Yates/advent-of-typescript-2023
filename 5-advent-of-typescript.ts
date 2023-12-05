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

/* NOTES:
This TypeScript code defines a generic type called SantasList.

- Generic Type: A type that can work with different data types.
- Type Parameters: Special placeholders for these different data types.
- Extends: This keyword is used to define constraints on a type parameter. It's similar to saying "should meet the following requirements."
- Readonly: This keyword is used to indicate that a type, such as an array or tuple, is read-only, meaning its values cannot be modified after they are created. In other words, you can't add, remove, or change elements in a read-only array or tuple once it's defined.

SantasList takes two type parameters:
- Bad: A readonly array (cannot be modified) of any type.
- Good: A readonly array of any type.

Now, what does SantasList do?
- It represents a list that combines two arrays, Bad and Good.
- The spread operator (...) is used to concatenate elements of the Bad array with the elements of the Good array.
- The result is a new array containing all elements from both arrays.
- This preserves the order and immutability (cannot be changed) of the original arrays.

In summary, SantasList is a flexible tool for combining two readonly arrays while keeping their elements in order and ensuring they can't be modified later. It's great for maintaining data integrity.
*/
