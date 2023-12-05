//  FIXME: type CookieSurveyInput = unknown;

/*  TODO: 🎄🍪 Christmas Cookie Inventory 🍪🎄

    Great job on helping Santa with his favorite cookies! Now, it's time to 
    tackle the cookie inventory. Santa noticed that the elves are getting a bit 
    sidetracked during cookie inventory discussions. 

    Your task is to speed up the cookie inventory process. Look at the 
    cookieInventory variable in the tests. Update CookieSurveyInput so that it 
    will return a union of all of the names of the various different cookies.

    Remember, as Santa always says: "your hard work will pay off eventually, 
    just be patient".

    Good luck! 🎅🏽
*/

type CookieSurveyInput<T> = keyof T;
