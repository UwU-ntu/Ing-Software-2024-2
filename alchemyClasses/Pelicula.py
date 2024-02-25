from sqlalchemy import Column, Integer, String
from sqlalchemy import and_, or_
from alchemyClasses import db


class Pelicula(db.Model):

    __tablename__ = "peliculas"
    pkey = Column("idPelicula", Integer, primary_key=True, autoincrement=True)
    nombre = Column("nombre", String(200))
    genero = Column("genero", String(45), nullable=True, default=None)
    duracion = Column("duracion", Integer, nullable=True, default=None)
    inventario = Column("inventario", Integer, nullable=False, default=1)

    def __init__(self, nombre, genero, duracion, inventario):
        self.nombre = nombre
        self.genero = genero
        self.duracion = duracion
        self.inventario = inventario

    @classmethod
    def exists_with_id(cls, movie_id):
        with db.session() as session:
            pelicula = Pelicula.query.get(movie_id)
            return bool(pelicula)

    def __str__(self):
        return f"MOVIE ID: {self.pkey}\nNombre: {self.nombre}\nGénero: {self.genero}\nDuración: {self.duracion}\nUnidades: {self.inventario}"
