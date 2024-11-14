const libros ={
    getLibros:`
        SELECT * 
        FROM libros
        ORDER BY libro_id
        LIMIT 4
        OFFSET 4*$1
    `,
    getLibroByTittle:`
        SELECT * 
        FROM libros 
        WHERE titulo LIKE '%' || $1 || '%' ;
    `,
    getLibroByCategory:`
        SELECT *
        FROM libros l
        JOIN categorias c ON l.categoria_id = c.categoria_id
        WHERE c.nombre = $1;  
    `,
    createLibro:`
     INSERT INTO libros(titulo,idioma,titulo_original,autor,sinopsis,categoria_id)
    VALUES ($1,$2,$3,$4,$5,$6);
    `,
    updateLibro:`
    UPDATE libros
    SET titulo=$1,idioma=$2,titulo_original=$3,autor=$4,sinopsis=$5,categoria_id=$6
    WHERE libro_id = $7;

    `,
    deleteLibro:`
        DELETE
        FROM libros
        WHERE libro_id=$1;
    `
}

module.exports={
    libros
}















