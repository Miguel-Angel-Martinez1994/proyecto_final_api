/** 
 * importaciones de dependecias express, cors y dotenv
*/
const express=require("express");
var cors =require("cors");
require("dotenv").config();

const app=express();
const port=process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))
app.use(cors())

app.use("/api/v1",require("./routes/authRoutes"))

/**
 * console.log que nos indica en que puerto nos hemos conectado
 */
app.listen(port, () => {
    console.log(`Servidor por el puerto ${port}`)
})