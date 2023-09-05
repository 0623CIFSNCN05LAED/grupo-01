const express = require(`express`);
const path = require(`path`);

const mainRouter = require('./routers/main-routers');

const app = express();

app.use(express.static(path.join(__dirname , `../public`)));
const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Servidor Funcionando en el puerto ${PORT}`);
});
/*
app.get('/' , (req , res) => {
    res.sendFile (path.join(__dirname , './views/index.html'));

});
app.get('/registro', (req , res) => {
    res.sendFile (path.join(__dirname, './views/register.html'))

});
app.get('/login', (req , res) => {
    res.sendFile (path.join(__dirname, './views/login.html'))
});
app.get('/cart-shopping', (req , res) => {
    res.sendFile (path.join(__dirname, './views/cart-shopping.html'))
});
app.get('/detalle-producto', (req , res) => {
    res.sendFile (path.join(__dirname, './views/details-product.html'))

});
*/

app.use(mainRouter);
=======
});

