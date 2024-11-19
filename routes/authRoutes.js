const express =require("express")
const router= express.Router()
const {
    crearLibro,
    borrarLibro,
    editarLibro,
    obtenerLibros,
    obtenerLibroPorCategoria,
    obtenerLibroPorId
}=require("../controllers/librosController")


//obtener todos los libros
router.get("/allLibros/:page",obtenerLibros)

//obtener libro por su categoria
router.get("/getLibroCategoria/:categoria_id",obtenerLibroPorCategoria)

//obtener libro por su id
router.get("/getLibro/:id",obtenerLibroPorId)

//crear 1 libro
router.post("/createLibro",crearLibro)

//editar 1 libro
router.put("/editLibro/:id",editarLibro)

//borrar 1 libro
router.delete("/removeLibro/:id",borrarLibro)



module.exports=router