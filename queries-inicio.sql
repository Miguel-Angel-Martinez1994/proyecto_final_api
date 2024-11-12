CREATE TABLE libros(
    libro_id SERIAL NOT NULL PRIMARY KEY, 
    titulo varchar(255), 
    idioma varchar(255),
	titulo_original varchar(255),
	autor varchar(255),
	sinopsis varchar(255),
	genero varchar(255)
  );

CREATE TABLE usuarios_libros(
  	usuario_id SERIAL NOT NULL PRIMARY KEY , 
  	encuadernacion varchar(255),
  	editorial varchar(255),
  	precio int,
	  libro_id int, 
	FOREIGN KEY (libro_id) REFERENCES libros(libro_id)
  );

CREATE TABLE buscados(
	buscado_id SERIAL NOT NULL PRIMARY KEY,
	usuario_id int,
	FOREIGN KEY (usuario_id) REFERENCES usuarios_libros(usuario_id),
	 libro_id int,
	 FOREIGN KEY (libro_id) REFERENCES libros(libro_id)
);