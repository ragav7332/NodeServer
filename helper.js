import { client } from "./server.js";

export async function getallProducts() {
  return await client.db("Items").collection("luxeryprod").find().toArray();
}
export async function getProductbyId(id) {
  return await client.db("Items").collection("luxeryprod").findOne({ id: id });
}
export async function deleteProduct(id) {
  return await client.db("Items").collection("luxeryprod").deleteOne({ id: id });
}
export async function getProductByCategory(req) {
  return await client.db("Items").collection("luxeryprod").find(req.query).toArray();
}
export async function addProducts(newProduct) {
  return await client.db("Items").collection("luxeryprod").insertMany(newProduct);
}
export async function updateProducts(id,updateProduct) {
  return await client.db("Items").collection("luxeryprod").updateOne({id:id},{$set: updateProduct });
}