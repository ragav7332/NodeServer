// import { client } from "./server.js";
// async function getAllProducts(req){
//     return await client.db("Items").collection("product").find(req.query).toArray();
// }
// async function getProductbyId(id){
//     return await client.db("Items").collection("product").findOne({id:id});
// }
// async function deleteProduct(id){
//     return await client.db("Items").collection("product").deleteOne({ id:id });
// }
// async function addProduct(newProduct){
//     return await client.db("Items").collection("product").insertMany(newProduct);
// }
// async function updateProducts(id,updateProduct){
//     return await client.db("Items").collection("product").updateOne({ id:id },{ $set: updateProduct});
// }
// export {getAllProducts,getProductbyId,deleteProduct,addProduct,updateProducts}