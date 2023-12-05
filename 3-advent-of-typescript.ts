// FIXME: type GiftWrapper = unknown;

/* TODO: The Gift Wrapper

    Did you know about the monetary inflation at the North Pole? After 200+ years 
    without a pay raise, Santa's elves are discussing a general strike.

    December 3rd is the worst time for this, but Santa's got a plan. If he can wrap 
    some presents, maybe the elves will cool down. But he needs help organizing the 
    wrapping process. The GiftWrapper type is a start, but it needs to be parameterized 
    to specify values for Present, From, and To.

    Please help! If not, the reindeer might join the elves in their strike!

    Your task is to update the GiftWrapper type so it can accept specific values for 
    Present, From, and To.
*/

type GiftWrapper<Present, From, To> = {
  present: Present;
  from: From;
  to: To;
};

/* NOTE:
This code defines a TypeScript generic type called GiftWrapper. It takes three type parameters: Present, From, and To. This type represents a structure for wrapping a gift. It has three properties:
- 'present' of type Present: This property represents the gift itself and can have any type assigned to it.
- 'from' of type From: This property represents the sender of the gift and can also have any type assigned to it.
- 'to' of type To: This property represents the recipient of the gift and can have any type assigned to it.

By using generics, this type can be customized to work with different types of presents, senders, and recipients, making it flexible and reusable.
*/
