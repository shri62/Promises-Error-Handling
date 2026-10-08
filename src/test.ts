import { 
    fetchProductCatalog, 
    fetchProductReviews, 
    fetchSalesReport 
} from "./apiSimulator";

fetchProductCatalog()
    .then((products) => {
        console.log("Products:", products);

        return fetchProductReviews(products[0]!.id);
    })
    .then((reviews) => {
        console.log("Reviews:", reviews);

        return fetchSalesReport();
    })
    .then((salesReport) => {
        console.log("Sales Report:", salesReport);
    })
    .catch((error) => {
        console.log("Error:", error);
    });