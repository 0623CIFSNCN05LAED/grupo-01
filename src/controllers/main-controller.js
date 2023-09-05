const path = require('path');
const mainController = {
    
    index: (req , res)=>{
        res.sendFile(path.join(__dirname , "../views/index.html"));
       },
    login: (req ,res) =>{
        res.sendFile(path.join(__dirname, "../views/login.html"))
       },
    cartshopping: (req ,res) =>{
        res.sendFile(path.join(__dirname, "../views/cart-shopping.html"))
       },
    detailsproduct: (req ,res) =>{
        res.sendFile(path.join(__dirname, "../views/details-product.html"))
       }
}

module.exports = mainController;