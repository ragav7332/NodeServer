import express from 'express'

import { getallProducts, getProductbyId, deleteProduct, getProductByCategory, addProducts, updateProducts } from '../helper.js'
const router = express.Router()
// app.get('/products',(req,res)=>{
//   
//   res.send(products)
// })
router.get('/', async (req, res) => {
  const products = await getallProducts()
  console.log(products)
  res.send(products)
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.params, id)
  const product = await getProductbyId(id)
  console.log(product)
  //const product = Products.filter((pd)=>pd.id==id)
  res.send(product)
})
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.params, id)
  const product = await deleteProduct(id)
  console.log(product)
  //const product = Products.filter((pd)=>pd.id==id)
  res.send(product)
})
router.get('/', async (req, res) => {
  const { category } = req.query
  console.log(req.query, category)
  //let filteredProducts = Products
  // if(category){
  //     filteredProducts = filteredProducts.filter((pd) => pd.category == category)
  // }
  // if(rating){
  //   filteredproduct = filteredproduct.filter((pd)=>pd.rating== rating)
  //   }
  //const product = Products.filter((pd)=>pd.category==category)
  const product = await getProductByCategory(req)
  res.send(product)
})
//ADD
router.post('/', async (req, res) => {
  const newProduct = req.body
  const product = await addProducts(newProduct)
  console.log(product)
  //const product = Products.filter((pd)=>pd.id==id)
  res.send(product)
})
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const updateProduct = req.body
    const product = await updateProducts(id,updateProduct)
    console.log(product)
    //const product = Products.filter((pd)=>pd.id==id)
    res.send(product)
  })

export const productRouter = router;