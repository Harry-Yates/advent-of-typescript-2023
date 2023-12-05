//  FIXME: type SantasFavoriteCookies = unknown;

/*  TODO:  Christmas Cookies

    It's December 1st! That means it's almost time for the big day!
    Santa has a preparation regimen that involves, of course, eating
    lots of delicious cookies.

    Santa's elves have provided Santa an API whereby Santa can submit his
    favorite cookie flavors. This year his favorites are:

    - ginger-bread
    - chocolate-chip

    But the elves have some kind of fancy code-gen build step (built in Rust, of course),
    so all Santa needs to do is update the SantasFavoriteCookies type to accept either of his favorite cookies. 
*/

type SantasFavoriteCookies = "ginger-bread" | "chocolate-chip";

/* NOTE:
This code defines a TypeScript type called SantasFavoriteCookies, which is a "String Literal Union Type." This means it can only be one of two specific words: "ginger-bread" or "chocolate-chip." It restricts the allowed values for variables or properties of this type to just these two options.
*/
