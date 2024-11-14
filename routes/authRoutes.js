const express =require("express")
const router= express.Router()
const {
    crearLibro,
    borrarLibro,
    editarLibro,
    obtenerLibros
}=require("../controllers/librosController")


//obtener todos los libros
router.get("/allLibros/:page",obtenerLibros)

//crear 1 libro
router.post("/createLibro",crearLibro)

//editar 1 libro
router.put("/editLibro/:id",editarLibro)

//borrar 1 libro
router.delete("/removeLibro/:id",borrarLibro)



module.exports=router