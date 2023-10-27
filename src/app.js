import express from 'express';
import handlebars from 'express-handlebars';
import{
        __dirname}
 from './utils.js';
import {
        Server
} from 'socket.io';
import productRouter from './routes/api/products.router.js';
import cartRouter from './routes/api/cart.router.js';
import viewsRouter from './routes/web/views.router.js';

//para el socket

import ProductManager from './managers/productManager.js';
import { productsFilePath } from './utils.js';
const manager = new ProductManager(productsFilePath);

// Crea server express
const app = express();

//Servidor archivos estaticos

app.use(express.static(`${__dirname}/public`));

//middleware
app.use(express.json({}));
app.use(express.urlencoded({
        extended: true
}));


// handlebars

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars');

// Ruta view
app.use('/', viewsRouter);


// Llama a la ruta de product Router (Todo lo hecho hasta ahora)
app.use('/api/products', productRouter);

// Ruta carts
app.use('/api/carts', cartRouter);

const server = app.listen(8080, () => console.log('listening en 8080'));

// IO

const io = new Server(server)

app.set('socketio', io);


io.on('connection', socket => {
    
        //agrego producto via form
        socket.on('agregarProducto', async data => {
                manager.addProducts(data);
                io.emit('showProducts', await manager.getProducts());
        });
    
        //elimino via form que me pasa el cliente
        socket.on('eliminarProducto', async (data) => {
         
                const id = Number(data)
                await manager.deleteProductById(id);
                io.emit('showProducts', await manager.getProducts());
          
        });
    
    });
