
import {products} from "./constants/product.js"
import Product from "./model/product-schema.js";


const DefaultData = async() => {
    try{
       await Product.insertMany(products);
        console.log('Default data inserted successfully');
    } catch(error){
        console.log('Error while inserting default data', error.message);
    }
}

export default DefaultData;