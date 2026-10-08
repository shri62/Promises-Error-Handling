//Create an apiSimulator.ts file:

//This file will contain functions that simulate API requests using Promises.
//Each function should return a Promise that resolves with mock data after a delay, or rejects with an error message.

export const fetchProductCatalog = (): Promise<
    { id: number; name: string; price: number }[]
> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.8) {

                resolve([
                    {
                        id: 1,
                        name: "Iphone",
                        price: 1200
                    },
                    {
                        id: 2,
                        name: "Samsung",
                        price: 200
                    }
                ]);

            } else {

                reject("Failed to fetch product catalog");

            }

        }, 1000);
    });
};