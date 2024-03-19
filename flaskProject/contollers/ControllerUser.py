from flask import Blueprint, request, render_template, flash, url_for, jsonify
from random import randint

from flaskProject.alchemyClasses import db, Usuario

usuarios_blueprint = Blueprint('usuarios', __name__, url_prefix='/usuarios')


@usuarios_blueprint.route('/') #localhost:5000/usuarios/
def ver_alumnos():
    with db.session() as session:
        users = session.query(Usuario).all()
    render_template('show_users.html')
    return jsonify([user.serialize() for user in users])


# responde a localhost:5000/alumno/id/1

@usuarios_blueprint.route('/id/<int:id_usuario>') # <tipo:nombre_variable>
def ver_usario_id(id_usuario):
    usuario = db.session.query(Usuario).filter_by(pkey=id_usuario).first()
    if usuario:
        return jsonify(usuario)


@usuarios_blueprint.route('/agregar', methods=['GET', 'POST'])
def agregar_alumno():
    if request.method == 'GET':
        return render_template('add_user.html')
    else:
        # Obtengo la información del método post.
        nombre = request.form['nombre']
        ap_paterno = request.form['ap_pat']
        ap_materno = request.form['ap_mat']
        password = request.form['password']
        pfp = request.form['pfp']
        email = request.form['email']
        super_user = request.form['super_user']
        # Creo mi usuario.
        user = Usuario(nombre, ap_paterno, ap_materno, password, email, pfp, super_user)
        db.session.add(user)
        db.session.commit()
        # url_for
        # flash
        # v = randint(0, 2)
        # if v == 1:
        #    flash("Hello from flash!")
        #    return url_for('alumno.agregar_alumno')
        # Y regreso al flujo que me hayan especificado.
        return render_template('user_added.html', name=nombre, ap_paterno=ap_paterno, ap_materno=ap_materno, email=email)