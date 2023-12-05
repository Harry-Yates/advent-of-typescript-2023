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
