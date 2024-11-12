const express =require("express")
const router= express.Router()




//vista de registrase en la APP de la aplicacion
router.post("/signup",crear_usuario_controller)

//vista de loggearse en la APP de la aplicacion
router.post("/",obtener_usuario_controller)

//vista de salirse de la aplicacion
router.post("/logout")


module.exports=router