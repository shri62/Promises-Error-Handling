// Create an apiSimulator.ts file

// Custom Error Classes

// Network errors
export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NetworkError";
    }
}

// Data errors
export class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "DataError";
    }
}

// Fetch Product Catalog
export const fetchProductCatalog = (): Promise<
    { id: number; name: string; price: number }[]
> => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.8) {

                const products = [
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
                ];

                // Check product data
                if (products.some((product) => !product.name)) {
                    throw new DataError("Product name is missing");
                }

                resolve(products);

            } else {

                reject(
                    new NetworkError(
                        "Failed to fetch product catalog"
                    )
                );

            }

        }, 1000);
    });
};

//  Product Reviews
export const fetchProductReviews = (
    productId: number
): Promise<{
    id: number;
    productId: number;
    reviewer: string;
    comment: string;
}[]> => {

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

                reject(
                    new NetworkError(
                        `Failed to fetch reviews for product ID ${productId}`
                    )
                );

            }

        }, 1500);
    });
};

//  Sales Report
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

                reject(
                    new NetworkError(
                        "Failed to fetch sales report"
                    )
                );

            }

        }, 1000);
    });
};