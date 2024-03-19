from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, SmallInteger
from datetime import date
from alchemyClasses import db

class Renta(db.Model):

    __tablename__ = 'rentar'
    pkey = Column("idRentar", Integer, primary_key=True, autoincrement=True)
    id_usuario = Column("idUsuario", Integer, ForeignKey("usuarios.idUsuario", ondelete="CASCADE"), nullable=False)
    id_pelicula = Column("idPelicula", Integer, ForeignKey("peliculas.idPelicula", ondelete="CASCADE"), nullable=False)
    fecha_renta = Column("fecha_renta", DateTime, nullable=False)
    dias_renta = Column("dias_de_renta", Integer, nullable=True, default=5)
    estatus = Column("estatus", SmallInteger, nullable=True, default=0)

    def __init__(self, id_usuario, id_pelicula, dias_renta, estatus, fecha_renta=date.today()):
        self.id_usuario = id_usuario
        self.id_pelicula = id_pelicula
        self.fecha_renta = fecha_renta
        self.dias_renta = dias_renta
        self.estatus = estatus

    def __str__(self):
        return f'ID RENTA: {self.pkey}\nUsuario: {self.id_usuario}\nPelicula: {self.id_pelicula}\nFecha renta: {self.fecha_renta}\nDías de Renta: {self.dias_renta}\nEstatus: {self.estatus}'
