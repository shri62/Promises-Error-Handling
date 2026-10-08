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
//fetchProductReviews(productId: number): Simulates fetching reviews for a product.
//Resolve the Promise with an array of reviews after a 1.5-second delay.
//Reject the Promise randomly with an error message, e.g., "Failed to fetch reviews for product ID ${productId}".


export const fetchProductReviews = (
    productId: number
): Promise<{ id: number; productId: number; reviewer: string; comment: string }[]> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.8) {

                resolve([
                    {
                        id: 1,
                        productId: productId,
                        reviewer: "DJ",
                        comment: "Great product!"
                    },
                    {
                        id: 2,
                        productId: productId,
                        reviewer: "RJ",
                        comment: "Very good quality."
                    }
                ]);

            } else {

                reject(`Failed to fetch reviews for product ID ${productId}`);

            }

        }, 1500);
    });
};

//fetchSalesReport(): Simulates fetching a sales report with totalSales, unitsSold, and averagePrice.
//Resolve the Promise with a mock sales report after a 1-second delay.
//Reject randomly with an error message, e.g., "Failed to fetch sales report".

export const fetchSalesReport = (): Promise<{
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.8) {

                resolve({
                    totalSales: 7500,
                    unitsSold: 10,
                    averagePrice: 600
                });

            } else {

                reject("Failed to fetch sales report");

            }

        }, 1000);
    });
};