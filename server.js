const express = require('express')
const app = express()

const Products = [
    {
        id:1,
      poster: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SX522_.jpg",
      name: "Apple iPhone 14 Pro Max (256 GB) - Deep Purple",
      rating: 4.5,
      description: "48MP Main camera for up to 4x greater resolution Cinematic mode now in 4K Dolby Vision up to 30 fps Action mode for smooth, steady, handheld videos",
      price: "1,43,990",
      category: "Electronics",
      trailer: "https://www.youtube.com/embed/WXHeyz7_9fc"
    },
    {
      id:2,
      poster: "https://m.media-amazon.com/images/I/51uVckL1jRL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74K (Black)",
      rating: 4.8,
      description: "Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console",
      price: "75,990",
      category: "Electronics",
      trailer: "https://www.youtube.com/embed/TqK341a5qVM"
    },
    {
      id:3,
      poster: "https://m.media-amazon.com/images/I/61MPGbBpC3L._UY679_.jpg",
      name: "Veirdo® Oversized Baggy Fit Comfortable Pure Cotton Round Neck T-Shirt",
      rating: 4.0,
      description: "Made from pure cotton for maximum comfort and breathability.Trendy and fashionable oversized fit for a unique and stylish look.",
      price: "600",
      category: "T-shirts and Polos",
      trailer: "https://www.youtube.com/embed/_rCIzoNB_xE"
    }
  ]
//   const apps = products

  app.get('/',(req,res)=>{
    res.send("Hello Everone")
  })
  app.get('/products',(req,res)=>{
    res.send(Products)
  })

  app.get('/products/:id',(req,res)=>{
    const {id} = req.params
    console.log(req.params,id)
    const product = Products.filter((pd)=>pd.id==id)
    res.send(product)
  })

  app.listen(9000,()=>console.log("Server started in 9000"))