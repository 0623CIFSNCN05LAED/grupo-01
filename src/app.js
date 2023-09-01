const express = require(`express`);
const path = require(`path`);
const app = express();

app.use(express.static(path.join(__dirname , `../public`)));
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Servidor Funcionando en el puerto ${PORT}`);
});

app.get('/' , (req , res) => {
    res.sendFile (path.join(__dirname , './view/index.html'));
});
app.get('/login', (req , res) => {
    res.sendFile (path.join(__dirname, './view/login.html'))
});
app.get('/cart-shopping', (req , res) => {
    res.sendFile (path.join(__dirname, './view/cart-shopping.html'))
});
app.get('/detalle-producto', (req , res) => {
    res.sendFile (path.join(__dirname, './view/details-product.html'))
});