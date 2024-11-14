CREATE TABLE categorias (
    categoria_id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE libros (
    libro_id SERIAL NOT NULL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    idioma VARCHAR(255),
    titulo_original VARCHAR(255),
    autor VARCHAR(255),
    sinopsis VARCHAR(255),
    categoria_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
);

CREATE TABLE usuarios (
    usuario_id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(255),
    rol VARCHAR(255),
    libro_id INT,
    FOREIGN KEY (libro_id) REFERENCES libros(libro_id)
);


INSERT INTO libros(titulo,idioma,titulo_original,autor,sinopsis,categoria_id)
VALUES 
('titulo1','idioma1','titulo original','autor1','lore ipsum',1),
('titulo2','idioma2','titulo original2','autor2','lore ipsum2',3),
('titulo3','idioma3','titulo original3','autor3','lore ipsum3',4),
('titulo4','idioma4','titulo original4','autor4','lore ipsum4',2),
('titulo5','idioma5','titulo original5','autor5','lore ipsum5',1),
('titulo6','idioma6','titulo original6','autor6','lore ipsum6',5),
('titulo7','idioma7','titulo original7','autor7','lore ipsum7',1),
('titulo8','idioma8','titulo original8','autor8','lore ipsum8',1),
('titulo9','idioma9','titulo original9','autor9','lore ipsum9',4)

INSERT INTO categorias(nombre)
VALUES 
('accion'),('romance'),('poesia'),('educativo'),('aventura')