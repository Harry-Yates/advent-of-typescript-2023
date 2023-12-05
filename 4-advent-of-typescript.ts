// FIXME: type PresentDeliveryList = unknown;

/* TODO: Christmas Present Delivery Addresses

    Amidst the hustle and bustle in the North Pole kitchenette, Bernard, the head elf,
    expresses his frustration to Santa. After more than 200 years of service, he feels
    the elf team is understaffed and overworked. Santa, viewing their operation as a
    'family startup', asks for one more year of hard work with promises of future rewards.

    Bernard, feeling a mix of frustration and duty, decides to continue but not without
    grumbling about another TypeScript challenge.

    Your task is to assist Bernard. Craft a type (PresentDeliveryList) that takes an
    object type as input and replaces the values at each property with an Address. This
    needs to be a generic type to accommodate various properties.
*/

type Address = { address: string; city: string };

type PresentDeliveryList<T> = {
  [K in keyof T]: Address;
};
