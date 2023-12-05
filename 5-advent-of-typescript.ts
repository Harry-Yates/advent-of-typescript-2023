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
