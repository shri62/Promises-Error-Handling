//Part 3: Build the Main Application Logic
//Create an index.ts file to contain the main logic of your application.
//Write a Function to Handle API Calls and Display Data:
//Use fetchProductCatalog() to fetch product details and display them.
//For each product, fetch the reviews using fetchProductReviews(productId).
//After fetching products and reviews, retrieve the sales report using fetchSalesReport().
// catch and finally
import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport
} from "./apiSimulator";

const handleApiCalls = () => {
    fetchProductCatalog()
        .then((products) => {
            console.log("Products:", products);
            return Promise.all(
                products.map((product) => {
                    return fetchProductReviews(product.id)
                        .then((reviews) => {
                            console.log(
                                `Reviews for ${product.name}:`,
                                reviews
                            );
                            return reviews;
                        });
                })
            );
        })
        .then(() => {

            return fetchSalesReport();

        })
        .then((salesReport) => {

            console.log("Sales Report:", salesReport);

        })
        .catch((error) => {

            console.log("Error:", error);

        })
        .finally(() => {

            console.log("API calls completed.");

        });
};

handleApiCalls();
