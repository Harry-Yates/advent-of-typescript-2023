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

/* NOTE:
This TypeScript code defines two types:

1. Address: This type represents an address and has two properties, 'address' (a string) and 'city' (a string).

2. PresentDeliveryList<T>: This is a generic type that takes a type parameter T. It is used to create a delivery list for presents. The type uses a mapped type to iterate over the keys of type T and assigns an 'Address' type to each key. In other words, it associates each key in T with an 'Address' type.

This code provides a way to create structured delivery lists for different types of presents or items, ensuring that each key in the list is associated with an 'Address' type for accurate deliveries.
*/
