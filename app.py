from sqlite3 import IntegrityError

from flask import Flask
from sqlalchemy import and_, or_
from datetime import date, timedelta
from alchemyClasses import db
from alchemyClasses import Usuario, Pelicula, Renta
from alchemyClasses.Alumno import Alumno
from alchemyClasses.Pelicula import Pelicula
from alchemyClasses.Renta import Renta
from alchemyClasses.Usuario import Usuario
import re
from cryptoUtils.CryptoUtils import cipher
from hashlib import sha256

from model.model_alumno import borra_alumno

#mysql+pymysql://ferfong:Developer123!@localhost:3306/ing_soft
#<dialecto>+<driver>://<usuario>:<passwd>@localhost:3306/<db>
#mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_soft
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://lab:Developer123!@localhost:3306/lab_ing_software'
app.config.from_mapping(
    SECRET_KEY='dev'
)
db.init_app(app)


""""
Funciones que crean nuevas filas en una tabla dada
"""


def insert_user(name, f_last_name, s_last_name, email, profile_picture=None, is_super_user=None):
    with app.app_context():
        new_user = Usuario(name, f_last_name, s_last_name, email, profile_picture, is_super_user)
        db.session.add(new_user)
        db.session.commit()


def insert_movie(nombre, genero, duracion, inventario=1):
    with app.app_context():
        new_movie = Pelicula(nombre, genero, duracion, inventario)
        db.session.add(new_movie)
        db.session.commit()


def insert_rental(id_usuario, id_pelicula, dias_renta, estatus, fecha_renta=date.today()):
    with app.app_context():
        #Verificamos que existan el usuario y la pelicula ya que son llaves foráneas
        if Usuario.exists_with_id(id_usuario):
            if Pelicula.exists_with_id(id_pelicula):
                new_rent = Renta(id_usuario, id_pelicula, dias_renta, estatus, fecha_renta)
                db.session.add(new_rent)
                db.session.commit()



""""
ending_in: cadena con la que termina el apellido paterno
Regresa todas las entradas en las que el apellido paterno termina con la cadena dada
"""


def filter_name_ending(ending_in):
    regex = re.compile(ending_in + '%')
    with app.app_context():
        for user in Usuario.query.all():
            if regex.match(str(user.ap_paterno)):
                print(user)



""""
name: nombre de la pelicula
old_genre: género de la película que se quiere cambiar
new_genre: género al que se cambiará la película
"""


def change_genre(name, old_genre, new_genre):
    with app.app_context():
        peli = Pelicula.query.filter_by(nombre=name, genero=old_genre).first()
        if peli is not None:
            peli.genero = new_genre
            db.session.commit()
        else:
            print(f"No existe una película con el nombre {name} y género {old_genre}")



""""
borra rentas viejas (de hace 3 días o más)
"""


def delete_old_rentals():
    with app.app_context():
        three_days_ago = date.today() - timedelta(days=3)
        for rental in Renta.query.filter(Renta.fecha_renta <= three_days_ago).all():
            db.session.delete(rental)
        db.session.commit()


""""
table: tabla de la que se quiere mostrar las entradas
muestra todas las entradas de la tabla 
"""


def show_rows(table):
    with app.app_context():
        print(f"-----------{table}-------------")
        for row in table.query.all():
            print("------------")
            print(row)


""""
table: tabla en la que se buscará
pkey: id de la entrada que se buscará 
imprime la entrada de existir o un mensaje predeterminado si no 
"""


def show_with_id(table, row_id):
    with app.app_context():
        entry = table.query.filter_by(pkey=row_id).first()
        if entry is not None:
            print("------------")
            print(entry)
        else:
            print(f"No existe una entrada con ID {row_id} en la tabla {table}")


""""
rental_id: id de la renta que se desea cambiar
new_rental_id: nuevo día de renta
"""


def update_rental_day(rental_id, new_rental_day):
    with app.app_context():
        rental = Renta.query.filter_by(pkey=rental_id).first()
        rental.fecha_renta = new_rental_day
        db.session.commit()


def update_movie_name(movie_id, new_name):
    with app.app_context():
        movie = Pelicula.query.filter_by(pkey=movie_id).first()
        movie.nombre = new_name
        db.session.commit()


def update_users_name(user_id, new_name):
    with app.app_context():
        user = Usuario.query.filter_by(pkey=user_id).first()
        user.nombre = new_name
        db.session.commit()


def delete_from_table_with_id(table, entry_id):
    with app.app_context():
        entry = table.query.filter_by(pkey=entry_id).first()
        if entry is not None:
            db.session.delete(entry)
            db.session.commit()
        else:
            print("Entrada con ID {pkey} no encontrada en la tabla {table}")


def delete_all_from_table(table):
    with app.app_context():
        for row in table.query.all():
            try:
                db.session.delete(row)
            except IntegrityError:
                db.session.rollback()
                print("Fallo de borrado, una entrada tiene llaves foráneas")
        print(f"Todas las entradas de {table} borradas exitosamente")
        db.session.commit()


def get_user_id_with_name(name, f_last_name):
    with app.app_context():
        with db.session() as session:
            user_id = session.query(Usuario.pkey).filter_by(nombre=name, ap_paterno=f_last_name).scalar()
            return user_id


def get_movie_id_with_name(movie_name, movie_genre):
    with app.app_context():
        with db.session() as session:
            movie_id = session.query(Pelicula.pkey).filter_by(nombre=movie_name, genero=movie_genre).scalar()
            return movie_id


def get_rental_id(user_id, movie_id, day=date.today()):
    with app.app_context():
        with db.session() as session:
            rental_id = session.query(Renta.pkey).filter_by(id_usuario=user_id, id_pelicula=movie_id, fecha_renta=day).scalar()
            return rental_id


""""
Función que crea filas en las tablas
"""


def create_rows():

    # Crea entradas de usuarios
    insert_user("Pepe", "Sanchez", "Perez", "mipassword_123", "elpepe123@gmail.com")
    insert_user("Juan", "Perez", "Hernandéz", "contraseñaUltraSecreta", "Juan123@gmail.com")
    insert_user("María", "Hernandez", "Montes de Oca", "123321pass", "marimari@gmail.com")
    insert_user("Sara", "Juarez", "Garcia", "paaaaaaassword", "saraaaa@gmail.com")
    insert_user("Gian", "Ovando", "Gonzalez", "dfjalfjhkaf", "fjdakfjdafjk@gmail.com")

    insert_movie("The Shining", "Terror", 123, 10)
    insert_movie("The Thing", "Terror", 101, 3)
    insert_movie("El Gigante de Hierro", "Ciencia Ficción", 81, 4)
    insert_movie("El Laberinto del Fauno", "Drama", 91, 9)

    insert_rental(get_user_id_with_name("Pepe", "Sanchez"), get_movie_id_with_name("The Shining", "Terror"), 10, 0)
    insert_rental(get_user_id_with_name("Gian", "Ovando"), get_movie_id_with_name("El Laberinto del Fauno", "Drama"), 10, 0)
    insert_rental(get_user_id_with_name("Sara", "Juarez"), get_movie_id_with_name("The Thing", "Terror"), 10, 0)


if __name__ == '__main__':
    # Borramos para evitar entradas repetidas
    delete_all_from_table(Renta)
    delete_all_from_table(Usuario)
    delete_all_from_table(Pelicula)
    # Creamos entradas
    create_rows()
    change_genre("The Shining", "Terror", "Suspenso")
    # Enseñamos las filas
    show_rows(Usuario)
    show_rows(Pelicula)
    show_rows(Renta)

    # Ejemplo cambiar fecha de renta y borrar renta vieja
    id_renta_ejemplo = get_rental_id(get_user_id_with_name("Pepe", "Sanchez"),
                                     get_movie_id_with_name("The Shining", "Suspenso"))
    print("Renta a cambiar")
    show_with_id(Renta, id_renta_ejemplo)
    print("Cambiamos día de Renta")
    update_rental_day(id_renta_ejemplo, date.today() - timedelta(days=5))
    show_with_id(Renta, id_renta_ejemplo)
    delete_old_rentals()
    print("Borramos renta vieja")
    show_rows(Renta)
    print("Apellidos paternos que terminan en 'ez'")
    filter_name_ending("ez")
    show_rows(Usuario)
    show_rows(Pelicula)
    show_rows(Renta)
