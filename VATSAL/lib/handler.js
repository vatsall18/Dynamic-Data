
let eList = {"orders":[]}

const pList = require('../data1/products.json');
let shoppingCart = {"products":[]}

const fs = require("fs")

exports.showCategory = (req,res) => { 

    var products = require('../data1/products.json')
    var categories = require('../data1/categories.json')
    var categoryDetails = categories.categories.filter((category)=>{ 
        return category.url == req.params.category
    })

    var productDetails = products.items.filter((product)=>{ 
        return product.category == req.params.category
    })
 
    res.render('category',{"products": productDetails,"category":categoryDetails})
}

exports.showProduct = (req,res) => { 
    var products = require('../data1/products.json')

    var productDetails = products.items.filter((product)=>{ 
        return product.id == req.params.id
    })
    
    res.render("products",{"products":productDetails})
}

exports.addToCartProcess = (req,res) => {
     
    console.log(req.body)
    // extract product from request body
    const addProduct = req.body.product;
    
    // find matching product from pList on ProductID and add to cart
    const findProduct = pList.items.find(product => product.id === parseInt(addProduct));
    
    if (findProduct) {
        shoppingCart.products.push(findProduct);
    }
    // returns updated shopping cart 
     console.log('Updated Shopping Cart:', shoppingCart.products);
    
     res.render('cart', { cartProducts: shoppingCart.products, pageTitle: 'Shopping Cart' });
}

exports.checkout= (req,res) => {
    res.render('checkout', { csrf : 'supersecret'  })
}

exports.checkoutProcess = (req,res) => {
    var userDetails = {
        'First Name': req.body.firstname,
        'Last Name': req.body.lastname,
        'Address':req.body.address,
        'City': req.body.city,
        'State': req.body.state,
        'Zip': req.body.zip,
        'Email': req.body.email
    }
   
    eList.orders.push(userDetails)
    eList.orders.push(shoppingCart)
    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data1/orders.json',json,'utf8',()=>{})
    eList = {"orders":[]}
    res.redirect(303,'/thankyou')
}
